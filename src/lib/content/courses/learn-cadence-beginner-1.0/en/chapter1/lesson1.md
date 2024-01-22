---
title: Our First Smart Contract
lesson: 1
language: en
---

# Chapter 1 Lesson 1 - Our First Smart Contract

Hello and welcome to the first lesson of the Learn Cadence (Beginner) course. Jacob here 👋. Let's just dive right into this because introductions are so boring.

## Quick Note

Cadence is a smart contract language.

Put simply, smart contracts are:
- programs that you **deploy** (put) onto this weird thing called the "blockchain"
- they contain data and functions to modify that data
- you can execute **transactions** to call the functions that modify data or make something happen. Transactions are executed when some sort of account signs it (*so smart contracts require someone/something to send a transaction for anything to happen*)
- you can execute **scripts** to read data on the blockchain

## Our First Smart Contract

In order to start making our first smart contract, we need to figure out a place to actually put it! 

### Install Flow CLI 

First install the Flow CLI by copying one of the below commands into the terminal on your computer:

Linux/macOS:
`sudo sh -ci "$(curl -fsSL https://raw.githubusercontent.com/onflow/flow-cli/master/install.sh)" -- v1.9.2-stable-cadence.1`

Windows (in PowerShell):
`iex "& { $(irm 'https://raw.githubusercontent.com/onflow/flow-cli/master/install.ps1') } v1.9.2-stable-cadence.1"`

After you do that, type `flow version` in your terminal and make sure a version appears. 

### Install VSCode

Next, you will need a code editor so you can start writing code. I highly recommend installing <a href="https://code.visualstudio.com/Download">Visual Studio Code</a>. Once you install VSCode, create a folder on your computer and open it up in VSCode. On the left side, click the "Extensions" button and search "Cadence". Install the one that looks like this:

<img href="https://i.imgur.com/BthLlAu.png" alt="vscode cadence extension" />

### Setting Up our Project

In your terminal, navigate to your project directory and type `flow init`. You should see this creates `flow.json` file in your project.

Lastly, create a new file called `HelloWorld.cdc` in your project

Soon, we will be "deploying" a contract we make in this file to an address. But what is an address?

### What's an Address?

An address is something that looks like `0xe5a8b7f23e8b548f`.

An address represents an account. Accounts are used to store data (your NFTs, tokens, etc), send transactions, and more. Wallets like Blocto, Metamask (a common wallet on Ethereum), and Dapper create accounts for you and provide a simple interface for you to interact with your account and do things with it.

### Where do Smart Contracts Live?

Smart contracts are deployed to accounts. More specifically, an account will sign a transaction to deploy a contract to itself.

When you want to interact with a contract, you would have to know both the name of the contract and the address where it lives. We'll see this more in-depth when we import stuff later on.

### Back to our Example

Let's make our contract now. In our `HelloWorld.cdc` file, type the following:

```cadence
access(all) contract HelloWorld {

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
access(all) contract HelloWorld {

    access(all) let greeting: String

    init() {
        self.greeting = "Hello, World!"
    }
}
```

The greeting variable:
- has a `access(all)` access modifier, which means anyone can read this variable.
- has `let`, which means it's a constant (cannot be changed)
- is a `String` type, so it contains some sort of text (in this case "Hello World")

In the `init` function we put `self.greeting = "Hello, World!"`. Remember, the `init()` function is called when the contract is deployed, which only happens once. *Note that we must set a value for `greeting`, and really any variable, in the `init` function or else there will be an error.*

`self.greeting` is referring to the `greeting` variable we declared right above it, and we set it equal to "Hello, World!".

## Deploying our Contract

To deploy this contract, change your `flow.json` to the following code:

```json
{
	"networks": {
		"emulator": "127.0.0.1:3569",
		"mainnet": "access.mainnet.nodes.onflow.org:9000",
		"testing": "127.0.0.1:3569",
		"testnet": "access.devnet.nodes.onflow.org:9000"
	},
	"contracts": {
		"HelloWorld": "./HelloWorld.cdc"
	},
	"accounts": {
		"emulator-account": {
			"address": "f8d6e0586b0a20c7",
			"key": "d1cee73eb866a5f8293943abb7dcbc210d5d9a3c0337042dcb3d9ec1cb90f534"
		}
	},
	"deployments": {
		"emulator": {
			"emulator-account": [
				"HelloWorld"
			]
		}
	}
}
```

Then, go to your terminal and:
1. in one terminal, run `flow emulator start -v`. This runs a local version of the Flow blockchain on our computer, otherwise known as an "emulator".
2. in a separate terminal, run `flow project deploy`. This will deploy your contract to the emulator, specifically to the "emulator-account" that is automatically created for you and has address `0xf8d6e0586b0a20c7`. 

## Reading our Greeting

Let's make sure that our `greeting` variable actually got set to "Hello, World!".

Create another file called `read_greeting.cdc`. Next, write the following code:

```cadence
import HelloWorld from "./HelloWorld.cdc"

access(all) fun main(): String {
    return HelloWorld.greeting
}
```

Then, go to your terminal and run `flow scripts execute ./read_greeting.cdc`. Make sure it returns "Hello, World!".

So... what did we just do?! Well, we just executed a **script**. Scripts are used to **read** data from our smart contracts. This script does the following:

1. We imported our smart contract by doing `import HelloWorld from "./HelloWorld.cdc"`. In Cadence, you import a contract by doing `import [contract name] from [address of that contract]`. In this case, our `flow.json` file knows the address of our contract.
2. Next, we wrote a function called "main" that returns a `String`. Scripts always have a function named "main". 
3. We then accessed the `greeting` variable from the contract using `HelloWorld.greeting`.

## Conclusion

Today, we learned how to deploy our first contract, declare a variable, write a function, and execute a script. Wow! That's a lot. But it wasn't too bad, right?