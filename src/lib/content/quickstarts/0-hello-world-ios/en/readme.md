---
layout: examples
---

## 🚩 Quickstart 0: Hello World

🎫 Deploy a simple HelloWorld contract to learn the basics of the Flow blockchain and Cadence. You'll use:

- The Flow CLI & local Flow emulator to deploy smart contracts.
- The local Flow dev wallet to log into test accounts.
- A template Swift iOS/iPadOS app with sample scripts and transactions to interact with your contract.

🌟 The final deliverable is a Mobile DApp that lets users read and change a greeting field on Flow testnet. (🧨 WalletConnect has not been configured so `DapperSC` and `Lilico` wallets will crash the application)

💬 Meet other builders working on this challenge and get help in the [Emerald City Discord](https://discord.gg/emerald-city-906264258189332541)!

---

## Video Walkthrough

Coming Soon!...hopefully..

---

## 📦 Checkpoint 0: Install && Deploy

Required:

- [Git](https://git-scm.com/downloads)
- [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
- [Flow CLI](https://docs.onflow.org/flow-cli/install/) (🧨 Make sure to install the correct link for your system 🧨). You know you have installed it if you type `flow version` in your terminal and it prints a version.

> First open a terminal 📱 and clone this repository. After switching to the project directory open the project in Xcode.

```sh
git clone https://github.com/BoiseITGuru/0-hello-world-ios.git
cd 0-hello-world-ios
open Hello\ World.xcodeproj/
```

> Next we need to copy or rename `flow.json.example` to `flow.json`.

```sh
mv flow.json.example flow.json
```

> in a second terminal window, start your 👷‍ local emulator:

```bash
cd 0-hello-world
flow emulator start -v
```

_Note: the `-v` flag means to print transaction and script output to your local emulator_

> in a third terminal window, 💾 deploy your contract and 💸 start your local wallet:

```bash
cd 0-hello-world
flow project deploy
flow dev-wallet
```

> You can `flow project deploy --update` to deploy a new contract any time.

> Once the emulator and dev-wallet have been started, use Xcode to run your app on the iOS simulator. (🧨 FCL-Swift does not currently support using the dev-wallet on a physical iOS device.)

---

## 👛 Checkpoint 1: Wallets

We'll be using **the local Flow dev wallet**.

> Click the "Log In" button and notice a pop up asking you to connect a wallet. Select `Dev Wallet` then wait for the authentication page to load. Notice a window appears with one or more accounts to select, each with their own Flow Token balance. Select the first account to log in to it.

<div class="md-images">
  <img src="https://i.imgur.com/jUo8QDQl.png" alt="launch-screen" />
  <img src="https://i.imgur.com/HyGr40al.png" alt="login-page" />
  <img src="https://i.imgur.com/M3olOljl.png" alt="wallet-select" />
  <img src="https://i.imgur.com/iDDul6Il.png" alt="account-select" />
</div>

---

## 📘 Checkpoint 2: Reading the Greeting

> 👀 Press the `Get Greeting` button to see your greeting:

<div class="md-images">
  <img src="https://i.imgur.com/mGDpcdfl.png" alt="no-greeting" />
  <img src="https://i.imgur.com/G6Tubj4l.png" alt="get-greeting" />
</div>

---

## ✏️ Checkpoint 3: Changing the Greeting

> ✏️ Change the greeting! Type a new greeting into the input and press the `Change Greeting` button or the `Send` button on the keyboard. You should see a transaction pop up:

<div class="md-images">
  <img src="https://i.imgur.com/RRoAOgMl.png" alt="change-greeting" />
</div>

> 👀 Click "APPROVE" and then click the `Get Greeting` button to see your new greeting:

<div class="md-images">
  <img src="https://i.imgur.com/5ntNrS3l.png" alt="transaction-approval" />
  <img src="https://i.imgur.com/19YnQH1l.png" alt="new-greeting" />
</div>

---

## 💾 Checkpoint 4: Deploy it to testnet!?

> Now 🔐 Generate a **deployer address** by typing `flow keys generate --network=testnet` into a terminal. Make sure to save your public key and private key somewhere, you will need them soon.

<img src="https://i.imgur.com/HbF4C73.png" alt="generate key pair" />

> 👛 Create your **deployer account** by going to <https://testnet-faucet.onflow.org/>, pasting in your public key from above, and clicking `CREATE ACCOUNT`:

<img src="https://i.imgur.com/73OjT3K.png" alt="configure testnet account on the website" width="400" />

> After it finishes, click `COPY ADDRESS` and make sure to save that address somewhere. You will need it!

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

You will also need to change the first to lines of the `setup()` function inside FlowManager to switch over to the Flow testnet, as shown below. REMINDER: 🧨 WalletConnect has not been configured so `DapperSC` and `Lilico` wallets will crash the application.

```swift
class FlowManager: ObservableObject {
  ...
  func setup() {
      let defaultProvider: FCL.Provider = .blocto
      let defaultNetwork: Flow.ChainID = .testnet
      ...
  }
  ...
}
```

Lastly, run the app in the simulator or on your iOS/iPadOS Device.

---

## 📝 Make Edits

🔏 You can also check out your smart contract `HelloWorld.cdc` in `cadence/HelloWorld.cdc`.

💼 Take a quick look at how your contract gets deployed in `flow.json`.

📝 The app is written in SwiftUI, and implements a "No View Model" design. With the exception of the FlowManager service and a few UI helpers in the Misc directory, the design and direct functions can all be modified in the Views directory.

## ⚔️ Side Quests

> 🏃 Head to your next challenge [here](https://academy.ecdao.org/en/quickstarts/1-non-fungible-token-ios).

> 💬 Meet other builders working on this challenge and get help in the [💎 Emerald City Discord](https://discord.gg/emerald-city-906264258189332541)!

> 👉 Problems, questions, comments on the stack? Post them to the [💎 Emerald City Discord](https://discord.gg/emerald-city-906264258189332541).