---
title: Account Storage
language: en
layout: examples
---

# Account Storage

In Cadence, accounts (which each have an address) can store and own their own data. In nearly all cases, you store resources to your account.

To do so, you need access to an `AuthAccount`, a type that is only available in the `prepare` stage of a transaction. 

Data is stored at "storage paths". You use the `save` function to store data, `load` to bring it out of storage, and `borrow` to get a reference to it.

```cadence
// Contract file: Test.cdc
// Deployed to 0x01
pub contract Test {

   pub resource NFT {
      pub let id: UInt64
      pub let rarity: String
      pub var name: String
      
      init(rarity: String, name: String) {
         self.id = self.uuid
         self.rarity = rarity
         self.name = name
      }
   }

   pub fun createNFT(rarity: String, name: String): @NFT {
      let nft <- create NFT(rarity: rarity, name: name)
      return <- nft
   }

}
```

```cadence
// Transaction file: store_nft.cdc
import Test from 0x01

transaction(rarity: String, name: String) {

   prepare(signer: AuthAccount) {
      let nft <- Test.createNFT(rarity: rarity, name: name)
      // moves the NFT resource into storage at `/storage/MyNFT`
      signer.save(<- nft, to: /storage/MyNFT)

      /*
       trying to store an asset there again would cause an error,
       because only one thing can be stored at a path at a time

       let nft2 <- Test.createNFT(rarity: rarity, name: name)
       signer.save(<- nft2, to: /storage/MyNFT)
      */
   }

   execute {
      
   }
}
```

```cadence
// Transaction file: borrow_nft.cdc
import Test from 0x01

transaction() {

   prepare(signer: AuthAccount) {
      let nft: &Test.NFT? = signer.borrow<&Test.NFT>(from: /storage/MyNFT)
      log(nft!.name)
   }

   execute {
      
   }
}
```

```cadence
// Transaction file: destroy_nft.cdc
import Test from 0x01

transaction() {

   prepare(signer: AuthAccount) {
      let nft <- signer.load<@Test.NFT>(from: /storage/MyNFT)
      destroy nft
   }

   execute {
      
   }
}
```