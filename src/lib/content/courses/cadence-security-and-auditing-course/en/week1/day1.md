# Chapter 1 - Day 1 - Motivation

Hello. Yes, it is me, your favorite (and most attractive) developer in the world: Jacob Tucker. You have probably read my courses before in Emerald Academy, but if not, hi there! Nice to meet you. You may get sick of me quick, but hey it wouldn't be as fun without me :)

Before we dive into scary topics like **Smart Contract Security**, **Auditing**, and **Security Leaks**, we should first ask ourselves why we're here. You should be here if you:
- Want to become a better (and safer) Cadence developer to prevent bugs in your Smart Contracts
- Want to better understand *how* and *why* contracts often become vulnerable, and how to prevent it
- Want to ensure your own safety from a user perspective when interacting with the blockchain so you aren't being hacked yourself
- Want to become an auditor for programs like <a href="https://ecdao.org/shield">Emerald Shield</a>.

You **should not** be here if you don't have a solid understanding of Cadence, the smart contract language for the <a href="https://flow.com">Flow blockchain</a>. If you have completed our <a href="https://github.com/emerald-dao/beginner-cadence-course">Beginner Cadence Course</a>, you are good to go.

## Learning tech-y terms

Here is a helpful definition guide of some weird terms we'll be using in this course:

**Security**: This refers to the safety or your contracts. That is, how easy is it for someone to manipulate your code in a bad way? For example, stealing $FLOW tokens from somebody, or making behavior happen that shouldn't happen?

**Auditing**: This refers to someone looking at code and determing its safety. Auditing itself is actually an extremely lucrative business; you will find that some auditing firms potentially charge hundreds of thousands of dollars to give detailed reports of potential leaks, efficiency improvements, etc (more below).

**Leaks**: A "leak" usually refers to a piece of code that does something wrong. So a hacker is able to "leak" in and do something bad.

**Bug**: Similar to a leak, a "bug" is when a piece of code doesn't behave the way it's supposed to.

**Gas**: Put very simply, "gas" is the amount of $ it costs to run a certain transaction. The lower the gas, the better.

## What does Smart Contract Auditing *actually* mean?

<img src="../../images/blockchain.png" alt="drawing" width="600"/>

One of the most common misconceptions is that smart contract auditing simply refers to determining the safety of the contract. This is most certainly wrong. In reality, auditing includes a bunch of complicated understandings like:
1. How *readable* code actually is
2. How *understandable* it is to the user (ex. someone who doesn't even understand the computer language). After all, if code isn't understandable to the user, how can it possibly be safe? Isn't the point of this glorious Web3 to be open and transparent for all?
3. How *efficient* the code is
4. How much *gas* it costs to call a certain transaction
5. And of course, how *safe* the code is.

## Well, what is a Smart Contract?

<img src="../../images/smart contract.png" alt="drawing" width="600"/>

All of you should know this already. But I think it's helpful to put a detailed explanation in here so we can truly understand what this course is about.

Smart Contracts are very cool. Smart Contracts are programs, or "rulebooks" that developers make. Developers create them because it allows us to specify some functionality that users can interact with. For example, if I want to make an application that allows users to store their favourite fruit on the Blockchain, I need to make a Smart Contract that:

1. Has a function that anyone can call
2. Takes in a parameter (the person's favourite fruit)
3. Stores that parameter in some data
4. Sends the updated data to the Blockchain (happens automatically)

If I created this Smart Contract and "deployed" it to the Blockchain (deployed means we put the contract onto the Blockchain so people can interact with it), then anyone could put their favourite fruit on the Blockchain, and it would live there forever and ever! Unless we also had a function to remove that data. 

So, why do we use Smart Contracts?

1. **Speed, efficiency and accuracy**: Smart Contracts are fast, and there is no middleman. There is also no paperwork. If I want to update the data on the Blockchain by using a Smart Contract that allows me to call some function, I can just do it. I don't have to get approval from my parents or my bank.
2. **Trust and transparency**: The Blockchain, and thus Smart Contracts, are extremely secure if we make them that way. It is near impossible to hack or alter the state of the Blockchain, and while that's due to other reasons, it is largely because of Smart Contracts. If a Smart Contract doesn't let me do something, I simply can't do it. There's no way around it.

What are some downsides?
1. **Hard to get right**: While Smart Contracts are cool, they are NOT smart. They require sophisticated levels of expertise from the developer's side to make sure they have no security problems, they are cheap, and they do what we want them to do. We will learn all of this later.
2. **Can be malicious if the developer is mean**: If a developer wants to make a Smart Contract that steals your money, and then tricks you into calling a function that does that, your money will be stolen. In the world of the Blockchain, you must make sure you interact with Smart Contracts that you know are secure.
3. **Cannot undo something**: You can't just undo something. Unless you have a function that allows you to.

### So what's the point?

The point of that was to show you what smart contracts are supposed to be doing, and the values they must represent. They should be **fast, efficient, and accurate.** They should be **trustful and transparent.** If they are not, we have failed. This course will help us better achieve these goals by diving deep into advanced Cadence concepts.

## What about Transactions & Scripts?

<img src="../../images/transaction.jpeg" alt="drawing" width="600"/>

As we all know, Cadence (or rather, Flow as a whole) is architected quite differently as a language than things like Solidity. 

On Flow, the transaction layer lives separately to a Smart Contract. This means you can have a perfectly safe, efficient, and accurate Smart Contract, but if a user gets tricked into signing a malicious transaction, their entire account can be hacked. After all, the `AuthAccount`, which is what gives access to an entire account's storage, is accessible in a transaction. Failure to keep this safe can be devastating.

## Conclusion

Hopefully I have interested you enough in why we should actually explore Smart Contract Auditing, specifically in Cadence land. If I did, then hooray! If not, then get lost, I didn't want you anyway.

# Quests

You are free to answer these questions in your own language of choice. And no, I don't mean computer programming language, haha.

1. Explain why auditing a Smart Contract is important.

2. What are some characteristics of auditing a Smart Contract? What should we be looking for?

3. Is it safe enough to just audit the Smart Contract in Cadence? Why or why not?