---
layout: examples
lessonVideoUrl: https://www.youtube.com/embed/sy_aRvozdOw
lessonVideoDescription: Follow along in a video format.
---

<script>
  import LessonVideo from '$lib/components/atoms/LessonVideo.svelte';   
</script>

Our tutorial on writing a smart contract will help you start building on Flow. Specifically, you'll learn Cadence, the smart contract language created by the Flow blockchain. We learn about resources and their ownership through the example of a "Car" resource.

<LessonVideo {lessonVideoUrl} {lessonVideoDescription} />

## Getting Started

The easiest way to start coding a smart contract on Flow **without any installations required** is to load up the [Flow playground](https://play.flow.com).

<img src="/tutorials/flow-playground.png" />

## Deploying a Contract

You can start by deploying your own contract that does nothing.

```cadence
pub contract Race {

    // run only once: when the contract is deployed
    init() {
        // will get logged to the console when you deploy
        log("Let's get started for a race!")
    }
}
```

## Resources

In contract to many other blockchains like Ethereum where storage is maintained in the contract in the form of key-value stores, it is most often in Cadence that an account stores a **resource** in their own storage. We will get to that in a bit. 

Resources are characterized by having the following properties:

- They cannot be copied
- They cannot be lost (they must be explicity moved, stored, or destroyed)
- They have a unique identifier (`uuid`)

```cadence
pub contract Race {

    pub resource Car {
        pub var speed: UFix64
        pub var acceleration: UFix64
        pub var handling: UFix64

        // run only once: when the resource is created
        init() {
            self.speed = 0.0
            self.acceleration = 0.0
            self.handling = 0.0
        }
    }

    init() {
        log("Let's get started for a race!")
    }

}
```

As stated earlier, resources must either be moved, stored, or destroyed. Resources themselves are really just objects, so they can stored:

- In other resources
- In an account's storage
- In dictionaries/arrays

## Functions

Several visibility modifiers limit or gate access to Cadence functions. `pub` (or sometimes seen as `access(all)`) functions can be called by anything. `access(contract)` functions can be called within the contract they are defined. `access(account)` functions can be called within the account that their contract is deployed in. Contracts are deployed to accounts, so an account can have multiple contracts. `access(self)` (or sometimes seen as `priv`) functions can only be called within the context they are defined.

A special function called `init` is found in a contract (executing when it's deployed), or in a resource or struct (executing when it's created). 
Similarly, `destroy` is found in a resource, and only called when the resource is destroyed.

```cadence
pub contract Race {

    pub resource Car {
        pub var speed: UFix64
        pub var acceleration: UFix64
        pub var handling: UFix64
        pub var color: String

        // gave our car a color to showcase
        // you can also add functions
        // to resources
        pub fun changeColor(newColor: String) {
            self.color = newColor
        }

        init(color: String) {
            self.speed = 0.0
            self.acceleration = 0.0
            self.handling = 0.0
            self.color = color
        }
    }

    // resources cannot be created outside the contract
    //
    // so we must define a public function to create a car
    // so anyone can call this in a transaction
    pub fun createCar(color: String): @Car {
        return <- create Car(color: color)
    }

    init() {
        log("Let's get started for a race!")
    }

}
```

## Transactions and Scripts

Transactions (for writing data) and scripts (for reading data), like contracts, are implemented in Cadence. But they are seperate files.

Let's add a variable in the contract that keeps track of the total amount of cars created.

```cadence
// Race.cdc
pub contract Race {

    pub var totalCars: UInt64

    pub resource Car {
        pub var speed: UFix64
        pub var acceleration: UFix64
        pub var handling: UFix64
        pub var color: String

        pub fun changeColor(newColor: String) {
            self.color = newColor
        }

        init(color: String) {
            self.speed = 0.0
            self.acceleration = 0.0
            self.handling = 0.0
            self.color = color

            // incremnet the total cars every time a resource is created
            Race.totalCars = Race.totalCars + 1
        }

        destroy() {
            Race.totalCars = Race.totalCars - 1
        }
    }

    pub fun createCar(color: String): @Car {
        return <- create Car(color: color)
    }

    init() {
        log("Let's get started for a race!")
    }

}
```

Now let's run a transaction to mint a car and destroy it.

```cadence
// create_car.cdc
import Race from 0x01

transaction() {
    prepare(signer: AuthAccount) {

    }

    execute {
        log(Race.totalCars) // 0

        let car: @Race.Car <- Race.createCar()
        log(Race.totalCars) // 1

        destroy car
        log(Race.totalCars) // 0
    }
}
```

We can also write a script to view the total amount of cars at any point.

```cadence
// get_total_cars.cdc
import Race from 0x01

pub fun main(): UInt64 {
    return Race.totalCars
}
```

## Account Storage

As mentioned earlier, unlike languages like Solidity where user data is stored in a centralized contract, in Cadence we store user data directly in their accounts. Let's store a Car in a user's account.

```cadence
// create_car.cdc
import Race from 0x01

transaction() {
    
    // prepare is used when needing to 
    // manipulate a user's account storage
    // since it requires the `AuthAccount` type
    prepare(signer: AuthAccount) {
        let car: @Race.Car <- Race.createCar()
        signer.save(<- car, to: /storage/Car)
    }

    execute {
       
    }
}
```

Resources are stored in account **paths**. Each resource must have its own path. You cannot overwrite existing data.

We can read data about our car in a script. Without the use of **Capabilities** (a concept that we will not cover here, but you can read about [here](https://developers.flow.com/cadence/language/capability-based-access-control)), we need the `AuthAccount` type to borrow a reference to this car. Because `AuthAccount` is a very dangerous type (it gives you full control of everything stored in an account), we would only get access to an  `AuthAccount` type in a tranaction if that account signs it. 

However, because this is just a script and thus modified data will revert after its execution, scripts allow us to use the `getAuthAccount` function to get the type.

```cadence
// get_car_info.cdc
import Race from 0x01

pub fun main(carOwner: Address): Result {
   let authAccount: AuthAccount = getAuthAccount(carOwner)
   let carReference: &Race.Car = authAccount.borrow<&Race.Car>(from: /storage/Car) ?? panic("A Car is not stored here!")

   return Result(
        s: carReference.speed,
        a: carReference.acceleration,
        h: carReference.handling,
        c: carReference.color
   )
}

pub struct Result {
    pub let speed: UFix64
    pub let acceleration: UFix64
    pub let handling: UFix64
    pub let color: String

    init(s: UFix64, a: UFix64, h: UFix64, c: String) {
        self.speed = s
        self.acceleration = a
        self.handling = h
        self.color = c
    }
}
```

## Next Steps

Take the [Beginner Cadence Course](https://academy.ecdao.org/en/catalog/courses/beginner-cadence) next if you'd like to master Cadence development.

Till next time ~ Jacob Tucker