---
title: Resources
lesson: 2
language: en
---

# Chapter 2 Lesson 2 - Resources

Uh oh. We're on the most important topic in all of Cadence: Resources. Seriously, this is the most important thing you'll learn from me. Let's get into it!

## Pokemon

I'm going to be using [Pokemon](https://sg.portal-pokemon.com/about/) in the lesson today. 

If you don't know what that is (we can't be friends if you don't), it's basically a video game where you catch & collect little creatures and make them your friends. You can fight with them as well and level them up to make them stronger.

We're going to be making our own pokemon and leveling them up for fun to demonstrate resources!

## Resources

What is a resource? It's always helpful to look at code, so let's do that first:

```cadence
pub resource Pokemon {
    pub let name: String

    init() {
        self.name = "Pikachu"
    }
}
```

Doesn't this look very similar to a Struct? In code, they do actually look pretty similar. Here, the resource `Pokemon` is a container that stores a name, which is a `String` type. But there are many, many differences behind the scenes.

### Resources vs. Structs

In Cadence, structs are merely containers of data. You can copy them, overwrite them, and create them whenever you want. All of these things are completely false for resources. Here are some important facts that define resources:

1. They cannot be copied
2. They cannot be lost (or overwritten)
3. They cannot be created whenever you want
4. You must be extremely explicit about how you handle a resource (for example, moving them)

Let's look at some code below to figure out resources:

```cadence
pub contract Game {

    // PokemonDetails
    // Description: Holds all of the static details
    // of the Pokemon. Useful as an easy container.
    pub struct PokemonDetails {
        pub let name: String
        pub let dateCreated: UFix64
        pub let type: String

        init(name: String, dateCreated: UFix64, type: String) {
            self.name = name
            self.dateCreated = dateCreated
            self.type = type
        }
    }

    // Pokemon
    // Description: The actual Pokemon asset that will
    // get stored by the user and upgraded over time.
    pub resource Pokemon {
        pub let details: PokemonDetails
        pub var xp: Int

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
    // Description: Creates a new pokemon using a name and type and returns
    // it back to the caller.
    // Returns: A new pokemon resource.
    pub fun createPokemon(name: String, type: String): @Pokemon {
        let newPokemon <- create Pokemon(name: name, type: type)
        return <- newPokemon
    }
}
```

Couple of important things to note:
- Resources in Cadence use the `@` symbol in front of their type to say, "this is a resource." For example: `@Pokemon`.
- You can only make a new resource with the `create` keyword. The `create` keyword can only ever be used inside the contract. This means you, as the developer, can control when they are made. This is not true for structs, since structs can be created outside the contract in structs and transactions.
- To move resources around you must use the `<-` "move" operator. In Cadence, you cannot simply use the `=` to put a resource somewhere. You MUST use the `<-` "move operator" to explicity "move" the resource around.
- You use the `destroy` keyword to destroy a resource (we will see this later)

**In short, structs should merely be used as containers of data, while resources are more secure digital assets or objects.** You will soon see why this is the case as we continue with this example throughout the course.

## Creating a new Pokemon

Now that we have a super cool smart contract, we should write a transaction to actually create a new Pokemon!

Make sure to deploy the Game contract to an account and properly import it from that address before running this transaction.

```cadence
import Game from 0x01

transaction(name: String, type: String) {
    prepare(signer: AuthAccount) {

    }

    execute {
        let newPokemon <- Game.createPokemon(name: name, type: type)
        log(newPokemon.details)
        destroy newPokemon // destroys the resource
    }
}
```

If you run this in the Flow playground, you should see that it logs the pokemons details.

## Conclusion

Hey, you made it! That wasn't so bad right? I think you're all gonna do just fine. Let's end things there for today, and tomorrow, I'll make it impossible for you. Just kiddin' ;)

## Quests

As always, feel free to answer in the language of your choice.

1. In words, list 3 reasons why structs are different from resources.

2. Describe a situation where a resource might be better to use than a struct.

3. What is the keyword to make a new resource?

4. Can a resource be created in a script or transaction (assuming there isn't a public function to create one)?

5. What is the type of the resource below?

```cadence
pub resource Jacob {

}
```

6. Let's play the "I Spy" game from when we were kids. I Spy 4 things wrong with this code. Please fix them.

```cadence
pub contract Test {

    // Hint: There's nothing wrong here ;)
    pub resource Jacob {
        pub let rocks: Bool
        init() {
            self.rocks = true
        }
    }

    pub fun createJacob(): Jacob { // there is 1 here
        let myJacob = Jacob() // there are 2 here
        return myJacob // there is 1 here
    }
}
```