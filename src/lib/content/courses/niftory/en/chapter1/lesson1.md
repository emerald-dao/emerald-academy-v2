---
title: Why Niftory? 
lesson: 1
language: en
excerpt: why niftory
---

# Chapter 1 Lesson 1 - Niftory and it's advantages

Hello! It's your friendly Niftory team, here to tell you about the fastest way to bring your NFT ideas to market.  

We'll use this first lesson to go over some of Niftory's key capabilities and why you would begin using it instead of writing a Distributed Application (AKA DApp) yourself. 

At Niftory, our mission is to 

> Empower developers, brands and businesses to embrace web3

While that may sound like a pie in the sky idea, we've really built something to help people do just that. One of the main reasons developers shy away from developing DApps is the level of complexity managing both web3 infrastructure (like wallets and on-chain transactions) as well as web2 infrastructure for basic database calls and authentication. The Niftory API distills everything you need to integrate web3 concepts like NFTs in your application into a platform that any developer can use.
Whether you are trying to build your own digital marketplace, or experimenting with completely new web3 use-cases we haven't even dreamt of, Niftory will work for you!

## What problem does Niftory solve? 

The API and platform is designed to be used by all developers, especially those who just want to integrate web3 content into their applications without the overhead of becoming blockchain engineers.
We don’t require you to deploy your own smart contracts, and our API is a normal GraphQL endpoint—you can be a complete beginner in web3 and still launch a digital marketplace in minutes. 

These are our core set of Capabilities and during this course, we'll go over each of them to see how they will help you build the DApp of your dreams: 

1. **Data management**. Off-chain and on-chain data managed through a single API. We combine the reliability and persistence of the Flow blockchain with the speed and cost of traditional web2 data management.
2. **User authentication**. Using OAuth 2.0, as well as wallet management and verification.
3. **GraphQL API**. Easy way of querying, minting and transferring NFTs. 
4. **Scalable**. All of this is built on scalable micro-service architecture and industrial grade data storage.

## Same functionality, different tools

To see Niftory in action, it's useful to see it compared to the code you'd have to write if you were to develop your app exclusively on top of Flow (using the Cadence programming language). Here, we're going to show 

Present sample code with and without Niftory to highlight the difference and simplicity that Niftory brings.

### Using Cadence and FLow directly

This code has been pulled from the [flow example](https://github.com/onflow/kitty-items/). 

It consists of three parts: 
1. Javascript Function to call the transfer
2. Transfer in Cadence. 
3. Flow Service (for signing, creating transactions, etc with FCL - Flow Client Library)

You will also have to update the Front-end to invoke a button that calls the transfer but we've skipped it for this example since that would be the same between Niftory and Cadence. 

1. Javascript To Call Transfer: 

```js
  transfer = async (recipient: string, itemID: number) => {
    const authorization = this.flowService.authorizeMinter()
    const transaction = fs
      .readFileSync(
        path.join(
          __dirname,
          `../../../cadence/transactions/kittyItems/transfer_kitty_item.cdc`
        ),
        "utf8"
      )
      .replace(
        nonFungibleTokenPath,
        fcl.withPrefix(this.nonFungibleTokenAddress)
      )
      .replace(kittyItemsPath, fcl.withPrefix(this.kittyItemsAddress))
    return this.flowService.sendTx({
      transaction,
      args: [fcl.arg(recipient, t.Address), fcl.arg(itemID, t.UInt64)],
      authorizations: [authorization],
      payer: authorization,
      proposer: authorization,
    })
  }

```

2. Cadence

```js

import NonFungibleToken from "../../contracts/NonFungibleToken.cdc"
import KittyItems from "../../contracts/KittyItems.cdc"

// This transaction transfers a Kitty Item from one account to another.
transaction(recipient: Address, withdrawID: UInt64) {
    prepare(signer: AuthAccount) {
        
        // get the recipients public account object
        let recipient = getAccount(recipient)
        // borrow a reference to the signer's NFT collection
        let collectionRef = signer.borrow<&KittyItems.Collection>(from: KittyItems.CollectionStoragePath)
            ?? panic("Could not borrow a reference to the owner's collection")
        // borrow a public reference to the receivers collection
        let depositRef = recipient.getCapability(KittyItems.CollectionPublicPath)!.borrow<&{NonFungibleToken.CollectionPublic}>()!
        // withdraw the NFT from the owner's collection
        let nft <- collectionRef.withdraw(withdrawID: withdrawID)
        // Deposit the NFT in the recipient's collection
        depositRef.deposit(token: <-nft)
    }
}
```

3. FlowService: 

```js
import * as fcl from "@onflow/fcl";
import { ec as EC } from "elliptic";
import { SHA3 } from "sha3";
const ec: EC = new EC("p256");
class FlowService {
  constructor(
    private readonly minterFlowAddress: string,
    private readonly minterPrivateKeyHex: string,
    private readonly minterAccountIndex: string | number
  ) {}
  authorizeMinter = () => {
    return async (account: any = {}) => {
      const user = await this.getAccount(this.minterFlowAddress);
      const key = user.keys[this.minterAccountIndex];
      const sign = this.signWithKey;
      const pk = this.minterPrivateKeyHex;
      return {
        ...account,
        tempId: `${user.address}-${key.index}`,
        addr: fcl.sansPrefix(user.address),
        keyId: Number(key.index),
        signingFunction: (signable) => {
          return {
            addr: fcl.withPrefix(user.address),
            keyId: Number(key.index),
            signature: sign(pk, signable.message),
          };
        },
      };
    };
  };
  getAccount = async (addr: string) => {
    const { account } = await fcl.send([fcl.getAccount(addr)]);
    return account;
  };
  private signWithKey = (privateKey: string, msg: string) => {
    const key = ec.keyFromPrivate(Buffer.from(privateKey, "hex"));
    const sig = key.sign(this.hashMsg(msg));
    const n = 32;
    const r = sig.r.toArrayLike(Buffer, "be", n);
    const s = sig.s.toArrayLike(Buffer, "be", n);
    return Buffer.concat([r, s]).toString("hex");
  };
  private hashMsg = (msg: string) => {
    const sha = new SHA3(256);
    sha.update(Buffer.from(msg, "hex"));
    return sha.digest();
  };
  sendTx = async ({
    transaction,
    args,
    proposer,
    authorizations,
    payer,
    skipSeal
  }: any): Promise<any> => {
    const response = await fcl.mutate(
      {
        cadence: transaction,
        args: (_arg, _t) => args,
        proposer,
        authorizations,
        payer,
        limit: 9999,
      },
    )
    if (skipSeal) return response;
    return await fcl.tx(response).onceSealed();
  };
  async executeScript<T>({ script, args }): Promise<T> {
    return await fcl.query(
      {
        cadence: script,
        args: (_arg, _t) => args,
      },
    );
  }
  async getLatestBlockHeight() {
    const block = await fcl.send([fcl.getBlock(true)]);
    const decoded = await fcl.decode(block);
    return decoded.height;
  }
}
export { FlowService };

```

Phew, that was a lot. Let's look at the corresponding code when we use Niftory's managed APIs. 
### Using Niftory

Doing the same transaction in Niftory, you need two parts: 
1. Create Niftory Client
2. Call Transfer

Here they are in code. 

1. Create Niftory Client

```js

import { EnvironmentName, NiftoryClient } from "@niftory/sdk"
let client: NiftoryClient

/**
 * Gets a NIFTORY client.
 * @returns A NiftorySdk client.
 */

export function getNiftoryClient() {
  client =
    client ||
    new NiftoryClient({
      environmentName: process.env.NEXT_PUBLIC_BLOCKCHAIN_ENV as EnvironmentName,
      appId: process.env.NEXT_PUBLIC_CLIENT_ID,
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      clientSecret: process.env.CLIENT_SECRET,
    })
  return client
}

```

2. Call Transfer

```js
const client = await getNiftoryClient()

const transferResponse = await client.transfer({
nftModelId: nftModelId as string,
userId: userToken.sub,
})
```

## Why do I care about all this?

If you want to build DApps quickly and you want them to be cost-effective in the long-run, it's super useful to learn how to build with tools to make your life easier. And that means Niftory if you want to build on Flow. 

## Conclusion

Niftory will solve all your problems and do your taxes... is NOT what we'd want you to conclude here. We've shown you a few use cases where Niftory will be helpful along with some code snippets that should show how much easier basic operation are when you use our managed API. Don't worry if things don't seem clear just yet. That's totally okay. Much will be clearer after we jump into some examples. We'll be doing that in the upcoming lessons.

## Quests

1. Why would a developer use Niftory rather than deploying and managing their own smart contracts? 

2. Who is Niftory designed for?