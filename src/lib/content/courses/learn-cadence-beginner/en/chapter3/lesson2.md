---
title: Account Storage
lesson: 2
language: en
lessonVideoUrl: https://www.youtube.com/embed/01zvWVoDKmU
lessonVideoDescription: Watch this video up until 14:45.
---

<script>
  import LessonVideo from '$lib/components/atoms/LessonVideo.svelte';   
</script>

# Chapter 3 Lesson 2 - Account Storage

So far, we have been storing all of our data inside the smart contract. Today, we will learn how we can store a Pokemon directly in our own account and catch it just like the real show!

<img src="https://i.imgur.com/QnB7MW0.png" />

## Accounts on Flow

We briefly touched on accounts in Chapter 1 Lesson 2. Let's review what we said:

*"In Cadence, accounts can store their own data. What does this mean? Well, if I own an NFT (NonFungibleToken), that NFT gets stored in my account. **This is very different than other languages like Solidity.** In Solidity, your NFT gets stored in the smart contract. But how do we access the data in an account? We can do that with the `AuthAccount` type. Every time a user (like you and me) sends a transaction, you "sign" it. All that means is you clicked a button saying "hey, I want to approve this transaction." When you sign it, the transaction takes in your `AuthAccount` and can completely control your account. So be careful."*

## What Lives in an Account?

<img src="/courses/beginner-cadence/accountstorage1.PNG" />

Using the above diagram, let's talk about what lives in an account:

1. Contract Code - contracts get deployed to an account, and live inside the account. Multiple contracts can live inside an account.
2. Account Storage - all your data gets stored inside account storage

### Account Storage

You can think of account storage as a "container" of data that lives at a specific path: `/storage/`. In a Flow account, there are 3 paths to get to certain data:

1. `/storage/` - only the account owner can access this (thank goodness, or someone could steal all of your data). ALL of your data lives here.
2. `/public/` - available to everybody
3. `/private/` - only available to the account owner and the people that the account owner gives access to

You may be wondering: "well, how do I access my `/storage/`?" The answer is your `AuthAccount` type. If you remember, when you sign a transaction, the signer's `AuthAccount` gets placed as a parameter in the `prepare` phase, like so:

```cadence
transaction() {
  prepare(signer: AuthAccount) {
    // We can access the signer's /storage/ path here!
  }

  execute {}
}
```

As you can see above, we can access the signer's `/storage/` in the `prepare` phase. This means we can do anything we want with their account. That is why it's so scary to think of accidentally signing a transaction! Be careful folks.

## Save and Load Functions

Let's practice storing something in an account. First, let's bring back our Pokemon contract from Chapter 3 Lesson 1:

```cadence
pub contract Game {

    pub var totalPokemon: Int
    pub let storedPokemon: @{UInt64: Pokemon}

    pub struct PokemonDetails {
        pub let id: UInt64
        pub let name: String
        pub let dateCreated: UFix64
        pub let type: String

        init(id: UInt64, name: String, dateCreated: UFix64, type: String) {
            self.id = id
            self.name = name
            self.dateCreated = dateCreated
            self.type = type
        }
    }

    pub resource Pokemon {
        pub let details: PokemonDetails
        pub var xp: Int

        pub fun levelUp() {
            self.xp = self.xp + 1
        }

        init(name: String, type: String) {
            let currentTime: UFix64 = getCurrentBlock().timestamp
            self.details = PokemonDetails(
                id: self.uuid,
                name: name, 
                dateCreated: currentTime,
                type: type
            )
            self.xp = 0

            Game.totalPokemon = Game.totalPokemon + 1
        }

        destroy() {
            Game.totalPokemon = Game.totalPokemon - 1
        }
    }

    pub fun createPokemon(name: String, type: String): @Pokemon {
        let newPokemon <- create Pokemon(name: name, type: type)
        return <- newPokemon
    }

    pub fun storePokemon(pokemon: @Pokemon) {
        self.storedPokemon[pokemon.details.id] <-! pokemon
    }

    pub fun getIDs(): [UInt64] {
        return self.storedPokemon.keys
    }

    pub fun getPokemonDetails(id: UInt64): PokemonDetails? {
        return self.storedPokemon[id]?.details
    }

    pub fun battle(pokemonId1: UInt64, pokemonId2: UInt64) {
        let randomNumber: UInt64 = self.getRandom(min: 1, max: 2)
        let winnerPokemonId = randomNumber == 1 ? pokemonId1 : pokemonId2
        
        let pokemonRef: &Pokemon = (&self.storedPokemon[winnerPokemonId] as &Pokemon?) 
                        ?? panic("Pokemon does not exist.")
        pokemonRef.levelUp()
    }

    pub fun getRandom(min: UInt64, max: UInt64): UInt64 {
        let randomNumber: UInt64 = revertibleRandom()
        return (randomNumber % (max + 1 - min)) + min
    }

    init() {
        self.totalPokemon = 0
        self.storedPokemon <- {}
    }
}
```

Let's use the `createPokemon` function to get a new `Pokemon` resource in the transaction, and then save it to the signer's storage:

```cadence
import Game from 0x01

transaction(name: String, type: String) {
  prepare(signer: AuthAccount) {
    let newPokemon <- Game.createPokemon(name: name, type: type)
    // saves `newPokemon` to my account storage at this path:
    // /storage/MyPokemon
    signer.save(<- newPokemon, to: /storage/MyPokemon)
  }

  execute {}
}
```

`.save()` takes two parameters:

1. The actual data to save
2. `to` - the path we should save it to (it must be a `/storage/` path)

In the example above, I saved `newPokemon` (note the `<-` syntax since it's a resource) to the path `/storage/MyPokemon`. Now, anytime we want to get it, we can go to that path. Let's do that below.

```cadence
import Game from 0x01

transaction() {
  prepare(signer: AuthAccount) {
    // takes `myPokemon` out of my account storage
    let myPokemon <- signer.load<@Game.Pokemon>(from: /storage/MyPokemon)
    // destroys it
    destroy myPokemon
  }

  execute {}
}
```

In the example above, we use the `.load()` function to take data OUT of our account storage.

You'll notice that we have to do this weird thing: `<@Game.Pokemon>`. What is that? Well, when you're interacting with account storage, you have to specify the type you're looking at. Cadence has no idea that a `@Game.Pokemon` is stored at that storage path. But as the coder, we know that is what's stored there, so we have to put `<@Game.Pokemon>` to say "we expect a `@Game.Pokemon` to come out of that storage path."

`.load()` takes one parameter:

1. `from` - the path we should take it from (it must be a `/storage/` path)

One more important thing is that when you `load` data from storage, it returns an optional. `myPokemon` actually has type `@Game.Pokemon?`. The reason for this is because Cadence has no idea that you are telling the truth and something actually lives there, or that it's even the right type. So if you were wrong, it will return `nil`. Let's look at an example:

```cadence
import Game from 0x01

transaction() {
  prepare(signer: AuthAccount) {
    let myPokemon <- signer.load<@Game.Pokemon>(from: /storage/MyPokemon)
    log(myPokemon.xp) // ERROR: "value of type `Game.Pokemon?` has no member `xp`."
    destroy myPokemon
  }

  execute {}
}
```

See? It is an optional. To fix this, we have to unwrap the optional:

```cadence
import Game from 0x01

transaction() {
  prepare(signer: AuthAccount) {
    let myPokemon <- signer.load<@Game.Pokemon>(from: /storage/MyPokemon)
                        ?? panic("A Pokemon does not live here.")
    log(myPokemon.xp) // 0
    destroy myPokemon
  }

  execute {}
}
```

## Borrow Function

Previously, we saved and loaded from our account. But what if we just want to look at something in an account and don't want to move it out of storage to read it? That's where references and the `.borrow()` function comes in.

```cadence
import Game from 0x01

transaction() {
  prepare(signer: AuthAccount) {
    let myPokemonRef <- signer.borrow<&Game.Pokemon>(from: /storage/MyPokemon)
                          ?? panic("A Pokemon does not live here.")
    log(myPokemonRef.xp) // ERROR: "value of type `Game.Pokemon?` has no member `xp`."
  }

  execute {}
}
```

You can see that we used the `.borrow()` function to get a reference to the resource in our storage, not the resource itself. That is why the type we use is `<&Game.Pokemon>` instead of `<@Game.Pokemon>`.

`.borrow()` takes one parameter (same as `.load()`):

1. `from` - the path we should take it from

## Reading this Data in a Script

You may be wondering... if we are storing our Pokemon in our account storage, and we need an `AuthAccount` to access this data... how will we get this inside of a script?!

It turns out it's very easy. Scripts allow you to get the `AuthAccount` of any account:

```cadence
pub fun main(address: Address) {
  // getAuthAccount is a built-in function to Cadence
  let authAccount: AuthAccount = getAuthAccount(address)
}
```

Using this function, we can easily get data about our Pokemon inside of our account:

```cadence
import Game from 0x01

pub fun main(address: Address): PokemonResult {
  let authAccount: AuthAccount = getAuthAccount(address)
  let myPokemonRef = authAccount.borrow<&Game.Pokemon>(from: /storage/MyPokemon)
                    ?? panic("A Pokemon does not live here.")
    
  return PokemonResult(myPokemonRef.details, myPokemonRef.xp)
}

pub struct PokemonResult {
  pub let details: Game.PokemonDetails
  pub let xp: Int

  init(_ details: Game.PokemonDetails, _ xp: Int) {
    self.details = details
    self.xp = xp
  }
}
```

In this script, we:
1. Used the `authAccount` to borrow a reference to our Pokemon
2. Defined our own `PokemonResult` struct inside of the script to better organize our result data
3. Returned a `PokemonResult`

## Conclusion

Let's take a look at this diagram again:

<img src="/courses/beginner-cadence/accountstorage1.PNG" />

As of now, you should understand what `/storage/` is. In the intermediate course, you will learn `/public/` and `/private/`.