---
title: Account Storage
lesson: 2
language: en
---

<script>
  import Notice from "$lib/components/atoms/Notice.svelte"
</script>

# Chapter 3 Lesson 2 - Account Storage

So far, we have been storing all of our data inside the smart contract. Today, we will learn how we can store a Pokemon directly in our own account and catch it just like the real show!

<img src="https://i.imgur.com/QnB7MW0.png" />

## Accounts on Flow

In Cadence, users can store & own their data. This is *very different* from other languages like Solidity on Ethereum, where your NFT gets stored in the smart contract. In Cadence, if I own an NFT, it gets stored in my account.

You can manage your account (like storing and deleting things) in a transaction. Every time a user sends a transaction, they "sign" it. All that means is you clicked a button (or provided a private key) saying "hey, I want to approve this transaction." When you sign it, the transaction takes in your `&Account` - a type that lets you manage it based on the "entitlements" granted. More on this below.

## Account Storage

You can think of account storage as a container inside your account that stores all your data that lives at different storage paths. Think of it like your own computer where you store files ("data") in different folders ("storage paths").

In order to store data somewhere, you must save it to a certain storage path. Let's see an example using our `Game` contract from the last lesson:

```cadence
import Game from 0x01

transaction(name: String, type: String) {
  prepare(signer: &Account) {
    // create a new pokemon resource
    let newPokemon: @Game.Pokemon <- Game.createPokemon(name: name, type: type)
    // attempt to store it in your account
    signer.storage.save(<- newPokemon, to: /storage/MyPokemon)
  }

  execute {}
}
```

This transaction looks perfect, and in fact it almost is... but if you try to run it, it will fail! This is because in order to perform certain actions on your `&Account` (like `save`), you need certain "entitlements" that unlock different actions. We will learn a few built-in entitlements for managing accounts below.

<Notice type="note">We will learn a lot about entitlements in the intermediate course. For now, we will learn just a few built-in entitlements that are used for managing accounts.</Notice>

### Save and Load Functions

Let's see how to properly save and remove data from our account.

```cadence
import Game from 0x01

transaction(name: String, type: String) {
  // notice the `SaveValue` entitlement - this allows
  // us to call the `save` function
  prepare(signer: auth(SaveValue) &Account) {
    // create a new pokemon
    let newPokemon: @Game.Pokemon <- Game.createPokemon(name: name, type: type)
    // saves `newPokemon` to my account storage at this path:
    // /storage/MyPokemon
    signer.storage.save(<- newPokemon, to: /storage/MyPokemon)
  }

  execute {}
}
```

In the example above, I saved `newPokemon` (note the `<-` syntax since it's a resource) to the path `/storage/MyPokemon`. Notice also that we had to provide the `SaveValue` entitlement on the `&Account` type to enable saving to the account.

Now anytime we want to access the new pokemon, we can go to that path. Let's do that below.

```cadence
import Game from 0x01

transaction() {
  // notice the `LoadValue` entitlement - this allows
  // us to call the `load` function
  prepare(signer: auth(LoadValue) &Account) {
    // takes `myPokemon` out of my account storage
    let myPokemon: @Game.Pokemon? <- signer.storage.load<@Game.Pokemon>(from: /storage/MyPokemon)
                        ?? panic("A Pokemon does not live here.")
    // destroys it
    destroy myPokemon
  }

  execute {}
}
```

In the example above, we use the `.load()` function to take data OUT of our account storage.

You'll notice that we have to do this weird thing: `<@Game.Pokemon>`. What is that? Well, when you're interacting with account storage, you have to specify the type you're looking at. Cadence has no idea that a `@Game.Pokemon` is stored at that storage path. But as the coder, we know that is what's stored there, so we have to put `<@Game.Pokemon>` to say "we expect a `@Game.Pokemon` to come out of that storage path."

One more important thing is that when you `load` data from storage, it returns an optional. `myPokemon` actually has type `@Game.Pokemon?`. The reason for this is because Cadence has no idea that you are telling the truth and something actually lives there, or that it's even the right type. So if you were wrong, it will return `nil`.

### Borrow Function

Previously, we saved and loaded from our account. But what if we just want to look at something in an account and don't want to move it out of storage to read it? That's where references and the `.borrow()` function comes in.

```cadence
import Game from 0x01

transaction() {
  // notice the `BorrowValue` entitlement - this allows
  // us to call the `load` function
  prepare(signer: auth(BorrowValue) &Account) {
    let myPokemonRef <- signer.storage.borrow<&Game.Pokemon>(from: /storage/MyPokemon)
                          ?? panic("A Pokemon does not live here.")
    log(myPokemonRef.xp)
  }

  execute {}
}
```

You can see that we used the `.borrow()` function to get a reference to the resource in our storage, not the resource itself. That is why the type we use is `<&Game.Pokemon>` instead of `<@Game.Pokemon>`.

## Reading this Data in a Script

You may be wondering... if we are storing our Pokemon in our account storage, and we need an authorized reference (like `auth(BorrowValue) &Account`) to access this data... how will we get this inside of a script?!

It turns out it's very easy. Scripts allow you to get authorized references to accounts using the `getAuthAccount` function:

```cadence
access(all) fun main(address: Address) {
  // `getAuthAccount` is a built-in function to Cadence
  //
  // `Storage` is an entitlement that enables save,
  // load, and borrow all in one.
  let authAccount = getAuthAccount<auth(Storage) &Account>(address)
}
```

Using this function, we can easily get data about our Pokemon inside of our account:

```cadence
import Game from 0x01

access(all) fun main(address: Address): PokemonResult {
  let authAccount = getAuthAccount<auth(Storage) &Account>(address)
  let myPokemonRef = authAccount.storage.borrow<&Game.Pokemon>(from: /storage/MyPokemon)
                    ?? panic("A Pokemon does not live here.")
    
  return PokemonResult(myPokemonRef.details, myPokemonRef.xp)
}

access(all) struct PokemonResult {
  access(all) let details: Game.PokemonDetails
  access(all) let xp: Int

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