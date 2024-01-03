---
title: Transaction Architecture
language: en
layout: examples
---

# Transaction Architecture

Transactions have 2 main stages:

1. **prepare** - to access/manipulate data inside the `signer`'s account
2. **execute** - to execute actions

To be proper, you should use the `prepare` phase to play with storage and capabilities, and leave all other actions to `execute`.

```cadence
// Transaction file: change_nft_name.cdc
import Test from 0x01

transaction(newName: String) {

   // create a local variable
   let nft: &Test.NFT

   prepare(signer: auth(BorrowValue) &Account) {
      // access account storage and set the local variable in prepare phase
      self.nft = signer.storage.borrow<&Test.NFT>(from: /storage/MyNFT) 
                           ?? panic("Signer does not have an NFT.")
   }

   execute {
      // perform all other actions in the execute phase,
      self.nft.changeName(newName: newName)
   }
}
```