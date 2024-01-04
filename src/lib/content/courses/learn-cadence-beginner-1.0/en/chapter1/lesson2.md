---
title: Transactions and Scripts
lesson: 2
language: en
---

# Chapter 1 Lesson 2 - Transactions and Scripts

Hey there you crazy Cadence people! We are back for another lesson of content, and in this lesson, we will be going more in-depth on transactions and scripts.

## Transactions & Scripts

Transactions and scripts are both essential to any blockchain application. Without them, we wouldn't be able to interact with the blockchain at all. On Flow, they are even more special because *they are both separate from the contract.* 

### Differences with Ethereum/Solidity

If you have coded in Solidity before, you know that transactions are just functions you call inside the contract itself. However, in Cadence transactions and scripts act as a sort of "middleman" between the account interacting with the blockchain and the smart contracts. It looks something like this:

<img src="/courses/beginner-cadence/sctsworkflow.png" alt="transactions and script picture" size="400" />

## Transactions vs. Scripts

The biggest difference between the two is that transactions **modify the data** on the blockchain and scripts **view the data** on the blockchain. Here is a helpful diagram to understand the differences:

<img src="/courses/beginner-cadence/transactionvscript.png" alt="difference between transactions and scripts" size="400" />

As you can see, scripts do not cost any money. Transactions on the other hand cost gas (money), which is a form of payment needed to change the data on the blockchain. It is **super** cheap on Flow though.

## Scripts

During the last lesson, we actually implemented our first script on the Flow playground. Let's revisit that example:

Load up the [Flow playground](https://play.flow.com) and deploy this contract:

```cadence
access(all) contract HelloWorld {

    access(all) let greeting: String

    init() {
        self.greeting = "Hello, World!"
    }
}
```

Then go to the Scripts tab on the left hand side and bring back our script from yesterday:

```cadence
import HelloWorld from 0x01

access(all) fun main(): String {
    return HelloWorld.greeting
}
```

**Remember to change `0x01` to the address you deployed the contract to.**

If you click "Execute," you should see "Hello, World!" in the Log tab. Great! What you just did is run a script. Notice there was no payment needed and we **viewed** the data in our smart contract.

## Transactions

Now, let's do an example of a transaction. On the left hand side, under Transactions, go ahead and delete everything in that tab.

Okay cool. Now we want to modify the data on the blockchain. In order to do that, let's set up our transaction. We can do that by pasting this code:

```cadence
transaction() {
    prepare(signer: &Account) {

    }

    execute {

    }
}
```

Boom! This is an empty transaction that doesn't do anything. 

There are 2 stages of a transaction in which we write code: `prepare` and `execute`. You will learn more on this later. For now, just know that `prepare` is where we deal with user accounts and `execute` is where we do everything else. So we'll stick with `execute` until we cover accounts.

### Changing our Greeting

Alright, so we want to change our `greeting` field to be something other than "Hello, World!" But there's a problem: we never added a way to modify our data in the smart contract! So we have to add a function in the contract to do that.

Go back to your contract and add the following function:

```cadence
access(all) fun changeGreeting(newGreeting: String) {
  self.greeting = newGreeting
}
```

We just added a new function that:
- takes in a `newGreeting` parameter. It is a `String` type
- sets our `greeting` variable equal to `newGreeting`
- does not return anything, hence the missing return type

But wait! There's an error in the contract. It says "cannot assign to constant member: `greeting`." Why is it saying that? Remember, we made our greeting be `let`. `let` means it's a constant, so if we want to change our `greeting`, we must change it to `var`. Make sure to hit "Deploy" again. Your code should now look like this:

```cadence
access(all) contract HelloWorld {

    access(all) var greeting: String

    access(all) fun changeGreeting(newGreeting: String) {
        self.greeting = newGreeting
    }

    init() {
        self.greeting = "Hello, World!"
    }
}
```

### Sending Our Transaction

Go back to the Transactions tab and add the following code:

```cadence
import HelloWorld from 0x01

transaction(myNewGreeting: String) {

  prepare(signer: &Account) {}

  execute {
    HelloWorld.changeGreeting(newGreeting: myNewGreeting)
  }
}
```

**Remember to change `0x01` to the address you deployed the contract to.**

Now, on the right side, you'll see a prompt pop up. We can type in our new greeting into the little box! Let's type "Hey there, Jacob!":

Notice also that we can sign this transaction from any account. We aren't accessing data in an account, so it doesn't matter which one you pick. Feel free to choose any account you wish. This is just for testing purposes.

After you click "Send", go back to your script and click "Execute". You should now see "Hey there, Jacob!" printed in the console. Boom, you just successfully implemented your first transaction.

## Conclusion

Today we learned how to send a transaction in Cadence. This is for modifying data.

We also learned how to execute a script in Cadence. This is for reading data.