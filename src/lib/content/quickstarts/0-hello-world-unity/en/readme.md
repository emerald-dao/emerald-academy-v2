---
layout: examples
---

## 🚩 Quickstart 0: Hello Flow UnitySDK

Learn to deploy a simple Greetings contract to learn the basics of the Flow blockchain, Cadence and Flow Unity SDK. We’ll use:
- Flow CLI (Testnet)
- Unity
- Flow Unity SDK
- Editor of your choice (VS Code is preffered)

We will be making a Unity project that will allow us to create a new greeting, modify it and display it.

## 📦 Checkpoint 0: Install

```sh
git clone https://github.com/memxor/FlowGreetingsUnity.git
```

Next, open the project using Unity (recommended 2022.3.8f1) and run the project by clicking the play button in the Unity editor.

## 👛 Checkpoint 1: Log In

In order to log in with a wallet, you will have to scan the QR code.

![image](https://github.com/memxor/FlowGreetingsUnity/assets/48633453/a774d1c9-252f-4417-80a4-e50f94ca0fba)

## 📘 Checkpoint 2: Reading the Greeting

Next, lets read the greeting that is currently on Flow testnet. To do this, click the "Read Greeting" button.

![image](https://github.com/memxor/FlowGreetingsUnity/assets/48633453/7122d8e4-018a-4ef8-a489-0dc71ae5a83a)

## ✏️ Checkpoint 3: Changing the Greeting

Now lets run a transaction which will modify the data in our smart contract. In order to do this, input a new greeting where it says "Enter a New Greeting" and click "Submit". This will initialize a transaction that will take a few seconds.

![image](https://github.com/memxor/FlowGreetingsUnity/assets/48633453/6f3f3b02-f9d4-46c0-bea5-e5d0f9113e90)

## 📘 Checkpoint 4: Reading the Updated Greeting

Now that we have updated our greeting, click the "Read Greeting" button again and confirm that the greeting has actually been changed.

![image](https://github.com/memxor/FlowGreetingsUnity/assets/48633453/cb832301-d747-45fa-8f58-613a7c7e26f1)
