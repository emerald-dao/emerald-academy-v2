---
title: Access Modifiers
lesson: 3
language: en
---

# Chapter 3 Lesson 3 - Access Modifiers

In today's lesson, we will briefly discuss a more difficult topic: Access Modifiers. It is important to get introduced to it, but it is a more intermediate-level concept and will be left for the next course.

## The Problem

In Lesson 2, I showed you how to create a Pokemon inside of a transaction and save it to account storage. You may be thinking: "What is preventing me from leveling up my own Pokemon's xp?"

Let's see an example of the problem right now:

```cadence
import Game from "./Game.cdc"

transaction(name: String, type: String) {
  prepare(signer: auth(SaveValue) &Account) {
    let newPokemon: @Game.Pokemon <- Game.createPokemon(name: name, type: type)

    newPokemon.levelUp()
    newPokemon.levelUp()
    newPokemon.levelUp()
    newPokemon.levelUp()
    newPokemon.levelUp()

    signer.storage.save(<- newPokemon, to: /storage/MyPokemon)
  }

  execute {

  }
}
```

Is... this okay? Right now, anyone can create their own Pokemon, level it up as much as they want, and then save it to their account.

They can even continue to level it up later:

```cadence
import Game from "./Game.cdc"

transaction() {

  let Pokemon: &Game.Pokemon

  prepare(signer: auth(BorrowValue) &Account) {
    self.Pokemon = signer.storage.borrow<&Game.Pokemon>(from: /storage/MyPokemon)
                      ?? panic("A Pokemon does not live here.")
  }

  execute {
    self.Pokemon.levelUp()
    self.Pokemon.levelUp()
    self.Pokemon.levelUp()
    self.Pokemon.levelUp()
    self.Pokemon.levelUp()
  }
}
```

How can we make it so that only the `battle` function inside the smart contract is allowed to call this function?

## The Solution: `access(contract)`

Well, it's actually very simple. Just change:

```cadence
access(all) fun levelUp() {
  self.xp = self.xp + 1
}
```

to...

```cadence
access(contract) fun levelUp() {
  self.xp = self.xp + 1
}
```

Now this function can only ever be called in the smart contract. Or more specifically, it will only be called inside the `battle` function.

Your final contract should look like this:

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

        access(contract) fun levelUp() {
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
        let randomNumber: UInt64 = revertibleRandom<UInt64>()
        return (randomNumber % (max + 1 - min)) + min
    }

    init() {
        self.totalPokemonCreated = 0
        self.storedPokemon <- {}
    }
}
```

## Further Reading

This topic is intermediate-level, so I will leave it to the next course. But here is a really nice diagram outlining all of the different access modifiers and their associated read/write permissions:

<img src="/tutorials/access-control.png" />

## Conclusion

Well... WOW! I am so proud of you. You completed the **Learn Cadence: Beginner** course!

Please reach out to Jacob Tucker in the [💎 Emerald City Discord](https://discord.gg/emerald-city-906264258189332541) for your official certificate!

Stay tuned for the **Learn Cadence: Intermediate** course where we will dive into capabilities.
