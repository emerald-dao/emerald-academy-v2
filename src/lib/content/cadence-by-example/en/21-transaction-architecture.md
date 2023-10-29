---
title: Transaction Architecture
language: en
layout: examples
---

# Transaction Architecture

Transactions have 2 main stages:

1. **prepare** - to access/manipulate data inside the `signer`'s account (allowed by the `AuthAccount` type)
2. **execute** - to execute actions

You should use local variables, set during the prepare phase, to then do things in the execute phase.

```cadence
// Transaction file: mint_nft.cdc
import Test from 0x01

transaction(rarity: String, name: String) {

   // create a local variable
   let Collection: &Test.Collection

   prepare(signer: AuthAccount) {
      // access account storage and set the local variable in prepare phase
      self.Collection = signer.borrow<&Test.Collection>(from: /storage/MyCollection) 
                           ?? panic("Signer does not have a Collection set up.")
   }

   execute {
      // perform all other actions in the execute phase,
      // including minting and then storing the NFT
      let nft <- Test.createNFT(rarity: rarity, name: name)
      self.Collection.deposit(token: <- nft)
   }
}
```