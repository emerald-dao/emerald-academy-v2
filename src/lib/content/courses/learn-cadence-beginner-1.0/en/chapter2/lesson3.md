---
title: Contract State
lesson: 3
language: en
---

# Chapter 2 Lesson 3 - Contract State

Now that we have learned what a resource is, we are going to add some extra data to our smart contract to spice things up.

## Pokemon Contract

Let's go back to the Pokemon contract we used in Chapter 2 Lesson 2:

```cadence
access(all) contract Game {

    // PokemonDetails
    // Description: Holds all of the static details
    // of the Pokemon. Useful as an easy container.
    access(all) struct PokemonDetails {
        access(all) let name: String
        access(all) let dateCreated: UFix64
        access(all) let type: String

        init(name: String, dateCreated: UFix64, type: String) {
            self.name = name
            self.dateCreated = dateCreated
            self.type = type
        }
    }

    // Pokemon
    // Description: The actual Pokemon asset that will
    // get stored by the user and upgraded over time.
    access(all) resource Pokemon {
        access(all) let details: PokemonDetails
        access(all) var xp: Int

        init(name: String, type: String) {
            // gets the timestamp of the current block (in unix seconds)
            let currentTime: UFix64 = getCurrentBlock().timestamp
            self.details = PokemonDetails(
                name: name, 
                dateCreated: currentTime,
                type: type
            )
            self.xp = 0
        }
    }

    // createPokemon
    // Description: Creates a new Pokemon using a name and type and returns
    // it back to the caller.
    // Returns: A new Pokemon resource.
    access(all) fun createPokemon(name: String, type: String): @Pokemon {
        let newPokemon <- create Pokemon(name: name, type: type)
        return <- newPokemon
    }
}
```

### Adding Contract State

Wouldn't it be cool if we added a tracker to see how many Pokemon were created? To do this, lets add a new contract state variable called `totalPokemonCreated`. 

```cadence
access(all) contract Game {

    // will track how many Pokemon
    // have been created
    access(all) var totalPokemonCreated: Int

    access(all) struct PokemonDetails {
        access(all) let name: String
        access(all) let dateCreated: UFix64
        access(all) let type: String

        init(name: String, dateCreated: UFix64, type: String) {
            self.name = name
            self.dateCreated = dateCreated
            self.type = type
        }
    }

    access(all) resource Pokemon {
        access(all) let details: PokemonDetails
        access(all) var xp: Int

        init(name: String, type: String) {
            let currentTime: UFix64 = getCurrentBlock().timestamp
            self.details = PokemonDetails(
                name: name, 
                dateCreated: currentTime,
                type: type
            )
            self.xp = 0

            // increment the totalPokemonCreated by 1
            // every time a new resource is created
            Game.totalPokemonCreated = Game.totalPokemonCreated + 1
        }
    }

    access(all) fun createPokemon(name: String, type: String): @Pokemon {
        let newPokemon <- create Pokemon(name: name, type: type)
        return <- newPokemon
    }

    // don't forget to initialize
    // our variable!
    init() {
        self.totalPokemonCreated = 0
    }
}
```

We changed a few things:
1. We added a new `totalPokemonCreated` contract state variable and initialized it to 0 in our contract `init` function
2. Incremented `totalPokemonCreated` everytime a new `Pokemon` resource is created

### Resource Unique Identifiers

Every resource in Cadence also has a built-in unique identifier that is unique to that resource only, and **will never be repeated again.** Even if the resource is destroyed.

This makes for a perfect 'id' system. Let's give our `PokemonDetails` an `id` using the built in `uuid` field to every resource:

```cadence
access(all) contract Game {

    access(all) var totalPokemonCreated: Int

    access(all) struct PokemonDetails {
        // add a new id field
        access(all) let id: Int
        access(all) let name: String
        access(all) let dateCreated: UFix64
        access(all) let type: String

        init(id: Int, name: String, dateCreated: UFix64, type: String) {
            self.id = id
            self.name = name
            self.dateCreated = dateCreated
            self.type = type
        }
    }

    access(all) resource Pokemon {
        access(all) let details: PokemonDetails
        access(all) var xp: Int

        init(name: String, type: String) {
            let currentTime: UFix64 = getCurrentBlock().timestamp
            self.details = PokemonDetails(
                id: self.uuid, // set the id using the built-in uuid field
                name: name, 
                dateCreated: currentTime,
                type: type
            )
            self.xp = 0

            Game.totalPokemonCreated = Game.totalPokemonCreated + 1
        }
    }

    access(all) fun createPokemon(name: String, type: String): @Pokemon {
        let newPokemon <- create Pokemon(name: name, type: type)
        return <- newPokemon
    }

    init() {
        self.totalPokemonCreated = 0
    }
}
```

## Saving Pokemon in our Contract

In Chapter 3, we will learn how to choose our own Pokemon and save it directly to our own accounts. Before then, let's make a dictionary in the contract that stores `Pokemon` by their `id`.

```cadence
access(all) contract Game {

    access(all) var totalPokemonCreated: Int
    // create a new dictionary that stores
    // Pokemon in the contract
    access(all) let storedPokemon: @{UInt64: Pokemon}

    access(all) struct PokemonDetails {
        access(all) let id: UInt64
        access(all) let name: String
        access(all) let dateCreated: UFix64
        access(all) let type: String

        init(id: UInt64, name: String, dateCreated: UFix64, type: String) {
            self.id = id
            self.name = name
            self.dateCreated = dateCreated
            self.type = type
        }
    }

    access(all) resource Pokemon {
        access(all) let details: PokemonDetails
        access(all) var xp: Int

        init(name: String, type: String) {
            let currentTime: UFix64 = getCurrentBlock().timestamp
            self.details = PokemonDetails(
                id: self.uuid,
                name: name, 
                dateCreated: currentTime,
                type: type
            )
            self.xp = 0

            Game.totalPokemonCreated = Game.totalPokemonCreated + 1
        }
    }

    access(all) fun createPokemon(name: String, type: String): @Pokemon {
        let newPokemon <- create Pokemon(name: name, type: type)
        return <- newPokemon
    }

    // storePokemon
    // Description: Pass in a Pokemon resource and
    // save it to the contract, mapped by its 'id'
    access(all) fun storePokemon(pokemon: @Pokemon) {
        self.storedPokemon[pokemon.details.id] <-! pokemon
    }

    // getIDs
    // Returns: An array of all the
    // Pokemon 'id's stored in the contract
    access(all) fun getIDs(): [UInt64] {
        return self.storedPokemon.keys
    }

    // getPokemonDetails
    // Returns: The details of the Pokemon with
    // 'id' == id. Returns nil if none found.
    access(all) fun getPokemonDetails(id: UInt64): PokemonDetails? {
        return self.storedPokemon[id]?.details
    }

    init() {
        self.totalPokemonCreated = 0
        self.storedPokemon <- {}
    }
}
```

Few things to note here:
- Even though `storedPokemon` isn't a resource itself, it is a dictionary that stores resources and thus must be treated like one. That is why we must use `<-` on this line: `self.storedPokemon <- {}`
- When defining a dictionary that contains resources, the `@` symbol must be out front. Ex. `@{UInt64: Pokemon}` ... NOT `{UInt64: @Pokemon}`
- Inside the `storePokemon` function, we use this operator: `<-!`. This is called the "force-move operator". Cadence requires us to use this with dictionaries because it will abort the program if a Pokemon at the specific `id` already exists. This is protecting us from accidentally overwriting a Pokemon in the dictionary.

If you want to handle the case where there is an existing Pokemon, an alternative way to write `storePokemon` would be:

```cadence
access(all) fun storePokemon(pokemon: @Pokemon) {
    // move any existing Pokemon (`oldPokemon`) out of the dictionary first, then move `pokemon` in
    let oldPokemon <- self.storedPokemon[pokemon.details.id] <- pokemon
    // handle the oldPokemon somehow
    destroy oldPokemon
}
```

## Testing it Out

Let's write some fun transactions and scripts to actually use our new contract! Make sure to re-deploy your `Game` contract first.

### Create & Store a Pokemon

Here is a transaction to create & save a Pokemon to the contract. Run this one in the playground:

```cadence
import Game from 0x01

transaction(name: String, type: String) {
    prepare(signer: &Account) {

    }

    execute {
        let newPokemon <- Game.createPokemon(name: name, type: type)
        log(newPokemon.details)
        Game.storePokemon(pokemon: <- newPokemon)
    }
}
```

### Read Total # of Pokemon

Next, let's check to see that our Pokemon actually got created. The `totalPokemonCreated` count should have gone up:

```cadence
import Game from 0x01

access(all) fun main(): Int {
    return Game.totalPokemonCreated
}
```

### Read Pokemon IDs

Next, let's get all of the Pokemon ids that exist in the contract:

```cadence
import Game from 0x01

access(all) fun main(): [UInt64] {
    return Game.getIDs()
}
```

### Read Pokemon Details

Lastly, take one of the ids that you saw in the previous step and pass that into the following script:

```cadence
import Game from 0x01

access(all) fun main(id: UInt64): Game.PokemonDetails? {
    return Game.getPokemonDetails(id: id)
}
```

Try to also pass in an 'id' that you know doesn't exist, and make sure it returns `nil`.

## Conclusion

In today's lesson, we learned a lot. We expanded our Pokemon contract to store Pokemon directly inside the smart contract. And some getter functions to read all the data stored in our contract, as well as how to execute scripts to return data using those functions.