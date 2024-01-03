---
title: Admin Access
language: en
layout: examples
---

# Admin Access

Sometimes we only want an Admin to be able to execute certain actions, like minting an NFT.

We can simply make a resource that gets saved to the contract's account upon deployment, and isn't able to be created otherwise.

```cadence
// Contract file: Test.cdc
// Deployed to 0x01
access(all) contract Test {

   access(all) resource NFT {
      access(all) let id: UInt64
      access(all) let rarity: String
      
      init(rarity: String) {
         self.id = self.uuid
         self.rarity = rarity
      }
   }

   access(all) resource Admin {
      access(all) fun createNFT(rarity: String): @NFT {
         let nft <- create NFT(rarity: rarity)
         return <- nft
      }
   }

   init() {
      // like the `prepare` phase of a transaction where we can 
      // get authorized references on an account, we can access 
      // an authorized reference on the contract's account 
      // by using `self.account` in the contract's init function.
      self.account.storage.save(<- create Admin(), to: /storage/TestAdmin)
   }

}
```

```cadence
// Transaction file: mint_nft.cdc
import Test from 0x01

transaction(rarity: String) {

   let Admin: &Test.Admin

   // the signer is the account with the Admin resource
   prepare(signer: auth(BorrowValue) &Account) {
      self.Admin = signer.storage.borrow<&Test.Admin>(from: /storage/TestAdmin) 
                           ?? panic("This signer is not an Admin.")
   }

   execute {
      let nft <- self.Admin.createNFT(rarity: rarity)

      // do something with nft here...
      destroy nft
   }
}
```
