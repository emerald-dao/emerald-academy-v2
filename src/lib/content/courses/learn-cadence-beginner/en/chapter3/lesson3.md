---
title: Access Modifiers
lesson: 3
language: en
---

# Chapter 3 Lesson 3 - Access Modifiers

In today's lesson, we will briefly discuss a more difficult topic: Access Modifiers. It is important to get introduced to it, but it is a more intermediate-level concept and will be left for the next course.

## The Problem

Let's take a look at our Pokemon contract from Chapter 3 Lesson 1:

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

In Lesson 2, I showed you how to create a Pokemon inside of a transaction and save it to account storage. You may be thinking: "What is preventing me from leveling up my own Pokemon's xp?"

Let's see an example of the problem right now:

```cadence
import Game from 0x01

transaction(name: String, type: String) {
  prepare(signer: AuthAccount) {
    let newPokemon <- Game.createPokemon(name: name, type: type)

    newPokemon.levelUp()
    newPokemon.levelUp()
    newPokemon.levelUp()
    newPokemon.levelUp()
    newPokemon.levelUp()

    signer.save(<- newPokemon, to: /storage/MyPokemon)
  }

  execute {

  }
}
```

Is... this okay? Right now, anyone can create their own Pokemon, level it up as much as they want, and then save it to their account.

They can even continue to level it up later:

```cadence
import Game from 0x01

transaction(name: String, type: String) {
  prepare(signer: AuthAccount) {
    let myPokemon = signer.borrow<&Game.Pokemon>(from: /storage/MyPokemon)
                      ?? panic("A Pokemon does not live here.")

    myPokemon.levelUp()
    myPokemon.levelUp()
    myPokemon.levelUp()
    myPokemon.levelUp()
    myPokemon.levelUp()
  }

  execute {

  }
}
```

How can we make it so that only the `battle` function inside the smart contract is allowed to call this function?

## The Solution: `access(contract)`

Well, it's actually very simple. Just change:

```cadence
pub fun levelUp() {
  self.xp = self.xp + 1
}
```

to...

```cadence
access(contract) fun levelUp() {
  self.xp = self.xp + 1
}
```

Now this function can only ever be called in the smart contract. Or more specifically, it can only ever be called inside the `battle` function.

## Further Reading

This topic is intermediate-level, so I will leave it to the next course. But here is a really nice diagram outlining all of the different access modifiers and their associated read/write permissions:

<img src="/courses/beginner-cadence/access_modifiers.png" />

## Conclusion

Well... WOW! I am so proud of you. You completed the **Learn Cadence: Beginner** course!

Please reach out to Jacob Tucker in the [💎 Emerald City Discord](https://discord.gg/emerald-city-906264258189332541) for your official certificate!

Stay tuned for the **Learn Cadence: Intermediate** course where we will dive into capabilities.