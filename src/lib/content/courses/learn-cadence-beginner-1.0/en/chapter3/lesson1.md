---
title: References
lesson: 1
language: en
---

# Chapter 3 Lesson 1 - References

Hey there Flow people. Today, we'll be talking about references, another important part of the Cadence programming language.

## What is a Reference?

In simplest terms, a reference is a way for you to interact with a piece of data without actually having to have that piece of data. Right off the bat, you can imagine how helpful this will be for resources. Imagine a world where you don't have to move a resource 1,000 times just to look at or update its fields. Ahh, that world does exist! References are here to save us.

## Pokemon Contract

Let's take a look at our contract from Chapter 2:

```cadence
access(all) contract Game {

    access(all) var totalPokemonCreated: Int
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

    access(all) fun storePokemon(pokemon: @Pokemon) {
        self.storedPokemon[pokemon.details.id] <-! pokemon
    }

    access(all) fun getIDs(): [UInt64] {
        return self.storedPokemon.keys
    }

    access(all) fun getPokemonDetails(id: UInt64): PokemonDetails? {
        return self.storedPokemon[id]?.details
    }

    init() {
        self.totalPokemonCreated = 0
        self.storedPokemon <- {}
    }
}
```

### Add Battling

To spice things up, lets add a `levelUp` function to our `Pokemon` resource that adds some `xp`:

```cadence
access(all) resource Pokemon {
    access(all) let details: PokemonDetails
    access(all) var xp: Int

    access(all) fun levelUp() {
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

        Game.totalPokemonCreated = Game.totalPokemonCreated + 1
    }
}
```

To make things fun, we should also add a function that makes two Pokemon battle. It will level up whoever the winner is, based on a random number:

```cadence
access(all) fun battle(pokemonId1: UInt64, pokemonId2: UInt64) {
    // equals either 1 or 2
    let randomNumber: UInt64 = self.getRandom(min: 1, max: 2)
    // if the random number is 1, use `pokemonId1`. Otherwise use `pokemonId2`
    let winnerPokemonId = randomNumber == 1 ? pokemonId1 : pokemonId2
    
    // move the Pokemon resource out of `storedPokemon`
    let pokemon <- self.storedPokemon.remove(at: winnerPokemonId) 
                    ?? panic("Pokemon does not exist.")
    // level it up
    pokemon.levelUp()
    // move the resource back into the dictionary
    self.storedPokemon[winnerPokemonId] <-! pokemon
}

// gets a number between min & max
access(all) fun getRandom(min: UInt64, max: UInt64): UInt64 {
    // revertibleRandom is a built-in random function to Cadence!
    let randomNumber: UInt64 = revertibleRandom()
    return (randomNumber % (max + 1 - min)) + min
}
```

You can see that in order to level up the winner of `battle`, we had to move the Pokemon resource out of storage first, level it up, and then move it back in. 

### References in Cadence

Instead, let's just use references to keep the Pokemon in `storedPokemon`, but be able to call `levelUp` anyway!

```cadence
access(all) fun battle(pokemonId1: UInt64, pokemonId2: UInt64) {
    let randomNumber: UInt64 = self.getRandom(min: 1, max: 2)
    let winnerPokemonId = randomNumber == 1 ? pokemonId1 : pokemonId2
    
    // get a reference to the Pokemon
    let pokemonRef: &Pokemon = (&self.storedPokemon[winnerPokemonId] as &Pokemon?) 
                    ?? panic("Pokemon does not exist.")
    // level it up
    pokemonRef.levelUp()
}

access(all) fun getRandom(min: UInt64, max: UInt64): UInt64 {
    let randomNumber: UInt64 = revertibleRandom()
    return (randomNumber % (max + 1 - min)) + min
}
```

Notice that if we had forgotten the `as &Pokemon?`, Cadence would yell at us and say "expected casting expression." This is because in Cadence, **you have to type cast when getting a reference**. Type casting is when you tell Cadence what type you're getting the reference as. It's saying "get this optional reference that is a &Pokemon reference."

### Running a Transaction to Test our Contract

Our final contract should look like this:

```cadence
access(all) contract Game {

    access(all) var totalPokemonCreated: Int
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

        access(all) fun levelUp() {
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

            Game.totalPokemonCreated = Game.totalPokemonCreated + 1
        }
    }

    access(all) fun createPokemon(name: String, type: String): @Pokemon {
        let newPokemon <- create Pokemon(name: name, type: type)
        return <- newPokemon
    }

    access(all) fun storePokemon(pokemon: @Pokemon) {
        self.storedPokemon[pokemon.details.id] <-! pokemon
    }

    access(all) fun getIDs(): [UInt64] {
        return self.storedPokemon.keys
    }

    access(all) fun getPokemonDetails(id: UInt64): PokemonDetails? {
        return self.storedPokemon[id]?.details
    }

    access(all) fun battle(pokemonId1: UInt64, pokemonId2: UInt64) {
        let randomNumber: UInt64 = self.getRandom(min: 1, max: 2)
        let winnerPokemonId = randomNumber == 1 ? pokemonId1 : pokemonId2
        
        let pokemonRef: &Pokemon = (&self.storedPokemon[winnerPokemonId] as &Pokemon?) 
                        ?? panic("Pokemon does not exist.")
        pokemonRef.levelUp()
    }

    access(all) fun getRandom(min: UInt64, max: UInt64): UInt64 {
        let randomNumber: UInt64 = revertibleRandom()
        return (randomNumber % (max + 1 - min)) + min
    }

    init() {
        self.totalPokemonCreated = 0
        self.storedPokemon <- {}
    }
}
```

This is the transaction we would use to actually make two Pokemon battle:

```cadence
import Game from 0x01

transaction(pokemonId1: UInt64, pokemonId2: UInt64) {
    prepare(signer: &Account) {}

    execute {
        Game.battle(pokemonId1: pokemonId1, pokemonId2: pokemonId2)
    }
}
```

Isn't that so simple? Easy peasy.

## Conclusion

References aren't so bad right? The main two points are:

1. You can use references to get information without moving resources around.
2. You MUST "type cast" a reference when getting it, or you'll receive an error.

References are not going to go away, though. They will be very important when we talk about account storage in the next chapter.