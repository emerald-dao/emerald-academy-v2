---
layout: examples
---

## 🚩 Challenge 3: NFT Minting

🎫 Setup your own NFT collection and minting site while learning the basics of the Flow blockchain and Cadence. You'll use:

- The local Flow emulator to deploy smart contracts.
- The local Flow dev wallet to log into test accounts.
- A template Next.js app with sample scripts and transactions to interact with your contract.

🌟 The final deliverable is a DApp that lets an admin create an NFT Collection and display available NFTs for purchase on a minting site. Users will be able to see their purchased NFTs as well.

💬 Meet other builders working on this challenge and get help in the [Emerald City Discord](https://discord.gg/emeraldcity)!

## 📦 Checkpoint 0: Install

Required:

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/dist/latest-v16.x/) (🧨 Use Node v16 or a previous version as v17 may cause errors 🧨). You know you have installed it if you type `node -v` in your terminal and it prints a version.
- [Flow CLI](https://docs.onflow.org/flow-cli/install/) (🧨 Make sure to install the correct link for your system 🧨). You know you have installed it if you type `flow version` in your terminal and it prints a version.

```sh
git clone https://github.com/emerald-dao/3-nft-minting.git
```

> in a terminal window, 📱 install the dependencies start your frontend:

```sh
cd 3-nft-minting
npm install
npm run dev
```

> in a second terminal window, start your 👷‍ local emulator:

```bash
cd 3-nft-minting
flow emulator start -v
```

_Note: the `-v` flag means to print transaction and script output to your local emulator_

> in a third terminal window, 💾 deploy your contract and 💸 start your local wallet:

```bash
cd 3-nft-minting
flow project deploy
flow dev-wallet
```

> You can `flow project deploy --update` to deploy a new contract any time.

📱 Open http://localhost:3000 to see the app

## 👛 Checkpoint 1: Wallets

We'll be using **the local Flow dev wallet**.

> Click the "Connect" button and notice a window appears with different accounts to select, each with their own Flow Token balance. Select the first account to log in to it.

## ✏️ Checkpoint 2: Minting some NFT’s

Before we allow users to purchase NFTs, we have to mint them first!

> In a terminal, run `npm run mint`

<img src="https://i.imgur.com/zhxWHyY.png" alt="mint NFTs transaction" />

This will mint 3 NFTs and store them in the contract. They will be ready for purchasing.

> Go back to your application and refresh the page. You will now see some NFTs available for purchase!

<img src="https://i.imgur.com/s5uAUMW.png" alt="NFTs now appear on the frontend" />

## 📘 Checkpoint 3: Purchase NFTs

Now that there are NFTs available for purchase, we can go ahead and buy some NFTs.

> Make sure you log in to the Service Account, since that account already has a lot of Flow Tokens to buy with.

> Click Purchase on any of the available NFTs.

<img src="https://i.imgur.com/rOsj53Y.png" alt="purchase nft tx" width="400" />

If you click approve, you will see that the NFT successfully gets taken off the market and put under the "Purchased NFTs" category:

<img src="https://i.imgur.com/aMv2KOI.png" alt="nft is now purchased" />

## 💾 Checkpoint 4: Fund an Account

Before we try to purchase with another account, we have to make sure they have enough Flow Tokens to buy with.

> Log out if you are already logged in, click "Connect", and click "Manage" next to Account A:

<img src="https://i.imgur.com/7qb3yVZ.png" alt="manage button" />

> Click "Fund" a few times, and then press "Save"

<img src="https://i.imgur.com/9Elc5W5.png" alt="fund account" />

Now you will have enough Flow to purchase with Account A. Try to buy an NFT!

After buying an NFT, you should notice the balance of the account decrease.

## 💾 Checkpoint 5: Deploy it to testnet!

📔 Ready to deploy to a public testnet?!?

> 🔐 Generate a **deployer address** by typing `flow keys generate --network=testnet` into a terminal. Make sure to save your public key and private key somewhere, you will need them soon.

<img src="https://i.imgur.com/Rf0f1ox.png" alt="generate key pair" />

> 👛 Create your **deployer account** by going to https://testnet-faucet.onflow.org/, pasting in your public key from above, and clicking `CREATE ACCOUNT`:

<img src="https://i.imgur.com/mkNCf1o.png" alt="configure testnet account on the website" width="400" />

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
      "NonFungibleToken",
		  "MetadataViews",
		  "ExampleNFT"
	  ]
  },
  "testnet": {
    "testnet-account": [
      "ExampleNFT"
    ]
  }
}
```

Notice that we do not want to re-deploy NonFungibleToken or MetadataViews. That is because they are already deploy and live on Flow testnet!

> 🚀 Deploy your ExampleNFT smart contract:

```sh
flow project deploy --network=testnet
```

<img src="https://i.imgur.com/9rfZNhr.png" alt="deploy contract to testnet" />

> Lastly, configure your .env file to point to Flow TestNet so we can interact with your new contract.

In your .env file, change the following:

1. `NEXT_PUBLIC_CONTRACT_ADDRESS` to your generated testnet address
2. `NEXT_PUBLIC_NFT_STANDARD_ADDRESS` to `0x631e88ae7f1d7c20`
3. `NEXT_PUBLIC_TOKEN_STANDARD_ADDRESS` to `0x9a0766d93b6608b7`
4. `NEXT_PUBLIC_FLOW_TOKEN_ADDRESS` to `0x7e60df042a9c0868`
5. `PRIVATE_KEY` to your private key
6. `NEXT_PUBLIC_ACCESS_NODE` to `https://rest-testnet.onflow.org`
7. `NEXT_PUBLIC_WALLET` to `https://fcl-discovery.onflow.org/testnet/authn`

You can now terminate all your terminals since we no longer need to run our own local blockchain or wallet. Everything lives on testnet!

Let's try out our DApp on testnet:

1. Run `npm run dev` to start your application in a terminal.

2. On `http://localhost:3000/`, click "connect" and log in to your Blocto or Lilico wallet, making sure to copy the address you log in with.

<img src="https://i.imgur.com/dvYO2aU.png" alt="logging into discovery" />

3. In a terminal, run `npm run mint`
4. In your terminal, you should see a printed "Transaction Id". If you go to [Testnet Flowscan](https://testnet.flowscan.org/) and paste in that Transaction Id, you should see information about that minting transaction.
5. You should now see all the NFTs available for purchase!

\*Note: If you want to fund a testnet account with Flow Tokens to test your application, you can use the [Testnet Faucet](https://testnet-faucet.onflow.org/fund-account)

## 📝 Make Edits!

🔏 You can also check out your smart contract `ExampleNFT.cdc` in `flow/cadence/ExampleNFT.cdc`.

💼 Take a quick look at how your contract get deployed in `flow.json`.

📝 If you want to make frontend edits, open `index.js` in `pages/index.js`.

## ⚔️ Side Quests

> 🏃 Head to your next challenge [here](https://academy.ecdao.org/en/quickstarts/4-voting).

> 💬 Meet other builders working on this challenge and get help in the [💎 Emerald City Discord](https://discord.gg/emeraldcity)!

> 👉 Problems, questions, comments on the stack? Post them to the [💎 Emerald City Discord](https://discord.gg/emeraldcity).
