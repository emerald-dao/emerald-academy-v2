---
title: Our First Smart Contract
lesson: 1
language: en
lessonVideoUrl: https://www.youtube.com/embed/QbqNM4k76B0
lessonVideoDescription: Overview of smart contracts, accounts, and deploying our first contract
---

<script>
  import LessonVideo from '$lib/components/atoms/LessonVideo.svelte';   
</script>

# Chapter 1 Lesson 1 - Our First Smart Contract

Hello and welcome to the first lesson of the Learn Cadence (Beginner) course. Jacob here 👋. Let's just dive right into this because introductions are so boring.

<LessonVideo {lessonVideoUrl} {lessonVideoDescription}/>

## Quick Note

Cadence is a smart contract language.

Put simply, smart contracts are:
- programs that you **deploy** (put) onto this weird thing called the "blockchain"
- they contain data and functions to modify that data
- you can execute **transactions** to call the functions that modify data or make something happen. Transactions are executed when some sort of account signs it (*so smart contracts require someone/something to send a transaction for anything to happen*)
- you can execute **scripts** to read data on the blockchain

## Our First Smart Contract

In order to start making our first smart contract, we need to figure out a place to actually put it! To do that, launch a browser of your choice (I would recommend Google Chrome) and go to the [Flow playground](https://play.flow.com). After you do that, do the following:

1. On the left hand side, click the 'Hello World' tab
2. Delete everything in that page

It should look like this:
<img src="https://i.imgur.com/IhXh1Xl.png" alt="blank playground" size="400" />

Soon, we will be "deploying" a contract we make in this tab to an address. But what is an address?

### What's an Address?

An address is something that looks like `0xe5a8b7f23e8b548f`. On the Flow playground, you'll see much shorter addresses like `0x01`. That's just to make things simpler.

An address represents an account. Accounts are used to store data (your NFTs, tokens, etc), send transactions, and more. Wallets like Blocto, Metamask (a common wallet on Ethereum), and Dapper create accounts for you and provide a simple interface for you to interact with your account and do things with it.

### Where do Smart Contracts Live?

Smart contracts are deployed to accounts. More specifically, an account will sign a transaction to deploy a contract to itself. The Flow playground has automatically given us 5 accounts, namely `0x01`, `0x02`, and so on so we can easily deploy contracts.

In the real world, you would deploy your smart contract to your account, but because this is a fake-simulation world, we can choose any account we want.

When you want to interact with a contract, you would have to know both the name of the contract and the address where it lives. We'll see this more in-depth when we import stuff later on.

### Back to our Example

Let's make our contract now. In the empty space, type the following:

```cadence
pub contract HelloWorld {

    init() {

    }
}
```

Boom, we wrote our first contract. That... has nothing in it.

The `init()` function is a function that every single contract **must** have. It is run when the contract is initially deployed, which only ever happens 1 time. So we can initialize some stuff in it when we want to. We'll see this later on.

## Adding Data to our Contract

Let's make our contract store a `greeting` variable.

Modify your contract code so it looks like this:

```cadence
pub contract HelloWorld {

    pub let greeting: String

    init() {
        self.greeting = "Hello, World!"
    }
}
```

The greeting variable:
- has a `pub` access modifier, which means anyone can read this variable
- has `let`, which means it's a constant (cannot be changed)
- is a `String` type, so it contains some sort of text (in this case "Hello World")

In the `init` function we put `self.greeting = "Hello, World!"`. Remember, the `init()` function is called when the contract is deployed, which only happens once. *Note that we must set a value for `greeting`, and really any variable, in the `init` function or else there will be an error.*

`self.greeting` is referring to the `greeting` variable we declared right above it, and we set it equal to "Hello, World!".

To deploy this contract, select any account you want and click the green "Deploy" button. Your page should look like this:

<img src="https://i.imgur.com/AzlWGIX.png" alt="deployed hello world contract" size="400" />

I deployed my contract to the account with address `0x05`. You should see a similar success message in the Log tab.

## Reading our Greeting

Let's make sure that our `greeting` variable actually got set to "Hello, World!".

On the left hand side, under "Scripts", click on the tab that says "GetGreeting" and delete everything inside of it. Next, write the following code:

```cadence
import HelloWorld from 0x05

pub fun main(): String {
    return HelloWorld.greeting
}
```

**Make sure to replace the `0x05` with whatever address you deployed your contract to.**

Then, hit the blue "Execute" button and check your Log tab to make sure it returned "Hello, World!" *If you are facing an error, try refreshing the page or deploying the contract again.*

<img src="https://i.imgur.com/vKXqiex.png" alt="get greeting" size="400">

So... what did we just do?! Well, we just executed a **script**. Scripts are used to **read** data from our smart contracts. This script does the following:

1. We imported our smart contract by doing `import HelloWorld from 0x05`. In Cadence, you import a contract by doing `import [contract name] from [address of that contract]`. I deployed my contract to `0x05`.
2. Next, we wrote a function called "main" that returns a `String`. Scripts always have a function named "main". 
3. We then accessed the `greeting` variable from the contract using `HelloWorld.greeting`.

## Conclusion

Today, we learned how to deploy our first contract, declare a variable, write a function, and execute a script. Wow! That's a lot. But it wasn't too bad, right?