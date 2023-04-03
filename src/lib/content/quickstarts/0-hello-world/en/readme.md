---
layout: examples
---

# 💎 Emerald Academy

## 🚩 Challenge 0: Hello World

🎫 Deploy a simple HelloWorld contract to learn the basics of the Flow blockchain and Cadence. You'll use:

- The local Flow emulator to deploy smart contracts.
- The local Flow dev wallet to log into test accounts.
- A template Next.js app with sample scripts and transactions to interact with your contract.

🌟 The final deliverable is a DApp that lets users read and change a greeting field on Flow testnet.

💬 Meet other builders working on this challenge and get help in the [Emerald City Discord](https://discord.gg/emeraldcity)!

---

# Video Walkthrough

Want a video walkthrough? Check out Jacob Tucker's walkthrough here: [![Challenge #0 (Hello World) Walkthrough](https://i.imgur.com/mlDKsL6.jpg)](https://www.youtube.com/watch?v=4HiXSGES8_o 'Emerald Academy - Challenge #0 (Hello World) Walkthrough')

---

# 📦 Checkpoint 0: Install

Required:

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/dist/latest-v16.x/) (🧨 Use Node v16 or a previous version as v17 may cause errors 🧨). You know you have installed it if you type `node -v` in your terminal and it prints a version.
- [Flow CLI](https://docs.onflow.org/flow-cli/install/) (🧨 Make sure to install the correct link for your system 🧨). You know you have installed it if you type `flow version` in your terminal and it prints a version.

```sh
git clone https://github.com/emerald-dao/0-hello-world.git
```

> in a terminal window, 📱 install the dependencies start your frontend:

```sh
cd 0-hello-world
npm install
npm run dev
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

📱 Open http://localhost:3000 to see the app

---

# 👛 Checkpoint 1: Wallets

We'll be using **the local Flow dev wallet**.

> Click the "Log In" button and notice a window appears with different accounts to select, each with their own Flow Token balance. Select the first account to log in to it.

---

# 📘 Checkpoint 2: Reading the Greeting

> 👀 Click the `Get Greeting` button to see your greeting:

<img src="https://i.imgur.com/PsK32ap.png" alt="get greeting" />

---

# ✏️ Checkpoint 3: Changing the Greeting

> ✏️ Change the greeting! Type a new greeting into the input and click the `Change Greeting` button. You should see a transaction pop up:

<img src="https://i.imgur.com/XByQNZ3.png" alt="transaction popup" />

> 👀 Click "APPROVE" and then click the `Get Greeting` button again. You should now see your new greeting:

<img src="https://i.imgur.com/cOW1PXB.png" alt="new greeting" />

---

# 💾 Checkpoint 4: Deploy it to testnet!

📔 Ready to deploy to a public testnet?!?

> 🔐 Generate a **deployer address** by typing `flow keys generate --network=testnet` into a terminal. Make sure to save your public key and private key somewhere, you will need them soon.

<img src="https://i.imgur.com/HbF4C73.png" alt="generate key pair" />

> 👛 Create your **deployer account** by going to https://testnet-faucet.onflow.org/, pasting in your public key from above, and clicking `CREATE ACCOUNT`:

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

> Lastly, configure your .env file to point to Flow TestNet so we can interact with your new contract.

In your .env file, change the following:

1. `NEXT_PUBLIC_CONTRACT_ADDRESS` to your generated testnet address
2. `NEXT_PUBLIC_ACCESS_NODE` to `https://rest-testnet.onflow.org`
3. `NEXT_PUBLIC_WALLET` to `https://fcl-discovery.onflow.org/testnet/authn`

You can now terminate all your terminals since we no longer need to run our own local blockchain or wallet. Everything lives on testnet!

> Run `npm run dev` to start your application in a terminal, and have a blast with your DApp!

---

# 📝 Make Edits!

🔏 You can also check out your smart contract `HelloWorld.cdc` in `flow/cadence/HelloWorld.cdc`.

💼 Take a quick look at how your contract get deployed in `flow.json`.

📝 If you want to make frontend edits, open `index.js` in `pages/index.js`.

# ⚔️ Side Quests

> 🏃 Head to your next challenge [here](https://academy.ecdao.org/challenges/non-fungible-token).

> 💬 Meet other builders working on this challenge and get help in the [💎 Emerald City Discord](https://discord.gg/emeraldcity)!

> 👉 Problems, questions, comments on the stack? Post them to the [💎 Emerald City Discord](https://discord.gg/emeraldcity).
