---
title: Understanding Blockchain Concepts
lesson: 1
language: en
excerpt: basic blockchain concepts
---

# Chapter 1 Lesson 1 - Understanding Blockchain Concepts

Welcome to the first lesson of this comprehensive course on building iOS Mobile DApps for the Flow Blockchain. I am BoiseITGuru, your instructor for this journey. In this lesson, we start with exploring the fundamental concepts of blockchain technology.

## What is a Blockchain?

<img src="/courses/beginner-dapp-ios/blockchain.jpg" alt="drawing" width="600"/>

If you already have a good grasp of blockchain technology, feel free to skip this section. Otherwise, let's delve into the basics.

A Blockchain is an open, decentralized, and shared database that enables public storage of information. Its key features are:

1. **Open**: Anyone can interact with the blockchain without restrictions.
2. **Decentralized**: It operates without a central authority, making it free from centralized control.
3. **Database**: Information can be stored securely on the blockchain.
4. **Public**: Data on the blockchain is accessible to anyone.

The blockchain allows various interactions, and we will primarily focus on coding smart contracts and building decentralized applications (DApps) using this technology. It's essential to note that there are multiple blockchains available, and for this course, we will be focusing on the Flow Blockchain.

## Smart Contracts - Powerful Code on the Blockchain

<img src="/courses/beginner-dapp/smart contract.png" alt="drawing" width="600"/>

Smart contracts are programs or "rulebooks" designed by developers to define specific functionalities for users to interact with. For instance, you could create a smart contract that allows users to store their favorite fruit on the blockchain, and this data would be permanently stored unless explicitly removed.

Benefits of smart contracts include:

1. **Speed, Efficiency, and Accuracy**: Smart contracts are fast and remove the need for intermediaries, reducing paperwork and approval processes.
2. **Trust and Transparency**: Smart contracts enhance security and transparency, ensuring that actions permitted by the contract are the only ones possible.

However, there are some downsides to consider:

1. **Complexity**: Developing smart contracts requires expertise to ensure security, cost-effectiveness, and desired functionality.
2. **Security Concerns**: A poorly designed smart contract can be exploited maliciously, resulting in loss of funds or data.
3. **Immutable**: Once a smart contract is deployed, its actions cannot be undone unless specific functions are built for that purpose.

## Transactions & Scripts - Interacting with Smart Contracts

<img src="/courses/beginner-dapp/transaction.jpeg" alt="drawing" width="600"/>

A transaction is essentially a paid function call that changes data on the blockchain. It is the primary method for altering blockchain data. Transactions involve costs, known as gas fees, which can vary depending on the blockchain. For instance, Flow's gas fees are extremely low compared to other blockchains like Ethereum.

In contrast, scripts are used to view data on the blockchain without altering it. They are free and do not incur any costs.

The standard workflow for interacting with a smart contract is:

1. Deploying a smart contract to the blockchain.
2. Executing a transaction with the required payment of gas fees to call functions within the smart contract.
3. The smart contract updates its data according to the executed function.

## "MainNet" vs. "TestNet" Environments

<img src="/courses/beginner-dapp/tvm.PNG" alt="drawing" width="600"/>

When developing blockchain applications, developers often use two different environments:

**TestNet** is a testing environment where developers can experiment and identify issues before deploying their applications to the public. It offers the following advantages:

- Simulated environment with fake data and no actual money involved.
- Transactions and interactions cost simulated or fake money.
- Safer space for testing smart contracts and applications.

**MainNet** is the live environment where real transactions and interactions take place. Applications are deployed on MainNet for public use. Key aspects of MainNet include:

- Real transactions with actual money involved.
- High risk, so applications must be thoroughly tested before deployment.
- Provides the actual user experience.

## Decentralized Applications (DApps) - Empowering Traditional Apps

<img src="/courses/beginner-dapp/dapps.jpeg" alt="drawing" width="300"/>

DApps are regular applications (ie. Swift, Kotlin, Javascript) that incorporate a blockchain and smart contracts. The inclusion of blockchain technology gives users transparency and trust in the application they are using. For example, a social media app like Instagram traditionally is not a "DApp" because the core application does not involve any blockchain code. However, they could technically be classified as a DApp due to Flow's recent announcement of NFT integration into the platform.

Throughout this course, we will build a DApp that utilizes smart contracts on the Flow Blockchain.

## Conclusion

Blockchain technology and smart contracts may sound complex, but with practical examples, they become clearer. In the upcoming lessons, we will explore real-world use cases and hands-on coding to help solidify your understanding.

## Quests

Feel free to answer the following questions in your preferred language:

1. Explain the concept of blockchain in your own words. You may refer to external sources for assistance.

2. Define a smart contract in your own words. You can use external resources for guidance.

3. Differentiate between a script and a transaction on the blockchain.

4. Describe the differences between TestNet and MainNet environments and when to use each for development.
