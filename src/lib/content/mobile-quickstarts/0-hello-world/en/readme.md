---
layout: examples
---

## 🚩 Challenge 0: Hello World - iOS/iPadOS

> 🧨 🧨 **The FCL-Swift SDK currently does not work with the Flow dev wallet, this tutorial will only deploy to testnet until that is resolved**

🎫 Deploy a simple HelloWorld contract to learn the basics of the Flow blockchain and Cadence. You'll use:

- The Flow CLI & testnet to deploy smart contracts.
- A Blocto testnet wallet to log in. (🧨 WalletConnect has not been configured so `DapperSC` and `Lilico` wallets will crash the application)
- A template Swift iOS/iPadOS app with sample scripts and transactions to interact with your contract.

🌟 The final deliverable is a Mobile DApp that lets users read and change a greeting field on Flow testnet.

💬 Meet other builders working on this challenge and get help in the [Emerald City Discord](https://discord.gg/emeraldcity)!

---

## Video Walkthrough

Coming Soon!...hopefully..

---

## 📦 Checkpoint 0: Install && Deploy

Required:

- [Git](https://git-scm.com/downloads)
- [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
- [Flow CLI](https://docs.onflow.org/flow-cli/install/) (🧨 Make sure to install the correct link for your system 🧨). You know you have installed it if you type `flow version` in your terminal and it prints a version.

> First open a terminal 📱, clone this repository, and switch to the newly created directory.

```sh
git clone https://github.com/BoiseITGuru/0-hello-world-ios.git
cd 0-hello-world-ios
```

> Now 🔐 Generate a **deployer address** by typing `flow keys generate --network=testnet` into a terminal. Make sure to save your public key and private key somewhere, you will need them soon.

<img src="https://i.imgur.com/HbF4C73.png" alt="generate key pair" />

> 👛 Create your **deployer account** by going to <https://testnet-faucet.onflow.org/>, pasting in your public key from above, and clicking `CREATE ACCOUNT`:

<img src="https://i.imgur.com/73OjT3K.png" alt="configure testnet account on the website" width="400" />

> After it finishes, click `COPY ADDRESS` and make sure to save that address somewhere. You will need it!

> Next we need to copy or rename `flow.json.example` to `flow.json`.

```sh
cp flow.json.example flow.json
```

> ⛽️ Add your new testnet account to your `flow.json` by modifying the following lines of code. Paste your address you copied above to where it says "YOUR GENERATED ADDRESS", and paste your private key where it says "YOUR PRIVATE KEY".

```json
"accounts": {
  "emulator-account": {
    "address": "f8d6e0586b0a20c7",
    "key": "5112883de06b9576af62b9aafa7ead685fb7fb46c495039b1a83649d61bff97c"
  },
  "testnet-account": {
    "address": "YOUR GENERATED ADDRESS",
    "key": {
      "type": "hex",
      "index": 0,
      "signatureAlgorithm": "ECDSA_P256",
      "hashAlgorithm": "SHA3_256",
      "privateKey": "YOUR PRIVATE KEY"
    }
  }
},
"deployments": {
  "emulator": {
    "emulator-account": [
      "HelloWorld"
    ]
  },
  "testnet": {
    "testnet-account": [
      "HelloWorld"
    ]
  }
}
```

> 🚀 Deploy your HelloWorld smart contract:

```sh
flow project deploy --network=testnet
```

<img src="https://i.imgur.com/GBFs2Uz.png" alt="deploy contract to testnet" />

> You can use `flow project deploy --update` to deploy a new contract any time.

📱 Open `Hello World.xcodeproj` in Xcode and update line 13 of `Hello World > Flow > FlowManager.swift with the newly created Testnet account so we can interact with your new contract.

```swift
import UIKit

let testAccount = "YOUR TESTNET ACCOUNT"

class FlowManager: ObservableObject {
  ...
}
```

Lastly, run the app in the simulator or on your iOS/iPadOS Device.

---

## 👛 Checkpoint 1: Wallets

We'll be using the **Blocto** testnet wallet for testing.

> Click the "Log In" button and notice a pop up asking you to connect a wallet. Select `Blocto` then wait for the authentication page to load. Once loaded, enter your email address to create or log in to your Blocto account. A 6 digit code will be emailed to you to complete the login process.

<img src="https://i.imgur.com/JXYnJzRl.png" alt="login page" /> <img src="https://i.imgur.com/lpMH54Rl.png" alt="wallet-select" /> <img src="https://i.imgur.com/xnApI5nl.png" alt="blocto-email" /> <img src="https://i.imgur.com/u7DJ37cl.png" alt="blocto-pin" /> <img src="https://i.imgur.com/EArH7vO.png" alt="blocto email" />

---

## 📘 Checkpoint 2: Reading the Greeting

> 👀 Press the `Get Greeting` button to see your greeting:

<img src="https://i.imgur.com/aAGlL8jl.png" alt="no-greeting" />
<img src="https://i.imgur.com/8KCZKNnl.png" alt="get-greeting" />

---

## ✏️ Checkpoint 3: Changing the Greeting

> ✏️ Change the greeting! Type a new greeting into the input and press the `Change Greeting` button or the `Send` button on the keyboard. You should see a transaction pop up:

<img src="https://i.imgur.com/WCMdbsZl.png" alt="change-greeting" />

> 👀 Click "APPROVE" and then wait a moment before clicking the `Get Greeting` button again to allow the transaction to finalize. You should now see your new greeting:

<img src="https://i.imgur.com/oBQvZFIl.png" alt="transaction-approval" /> <img src="https://i.imgur.com/W7g170yl.png" alt="new-greeting" />

---

## 📝 Make Edits

🔏 You can also check out your smart contract `HelloWorld.cdc` in `cadence/HelloWorld.cdc`.

💼 Take a quick look at how your contract gets deployed in `flow.json`.

📝 The app is written in SwiftUI, most changes to the design/frontend can be made in the `Views` directory.

## ⚔️ Side Quests

🏃 Head to your next challenge [here](https://github.com/EurekaDAO/1-non-fungible-token-ios).

💬 Meet other builders working on this challenge and get help in the [💎 Emerald City Discord](https://discord.gg/emeraldcity)!

👉 Problems, questions, comments on the stack? Post them to the [💎 Emerald City Discord](https://discord.gg/emeraldcity).
