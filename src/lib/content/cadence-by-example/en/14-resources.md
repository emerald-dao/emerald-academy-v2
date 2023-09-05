---
title: Resources
language: en
layout: examples
---

# Resources

Resources are much like structs in that they have data and functions inside of them. However, they cannot be copied and must be explicity destroyed or stored somewhere.

Here are some facts about resources:
- They can only ever be created in the contract using the `create` keyword.
- They are moved around using the `<-` operator.
- Their type is prefixed with a `@`
- They can define `destroy` functions that will run when they are destroyed.
- They cannot be copied or lost

```cadence
// Contract file: Test.cdc
// Deployed to 0x01
pub contract Test {

   pub var totalSupply: UInt64

   pub resource NFT {
      pub let id: UInt64
      pub let rarity: String
      pub var name: String

      pub fun changeName(newName: String) {
         self.name = newName
      }
      
      // Will get run when the resource is created
      init(rarity: String, name: String) {
         // every resource has a unique `uuid` field 
         // that will never be the same, even after the resource is destroyed
         self.id = self.uuid
         self.rarity = rarity
         self.name = name

         Test.totalSupply = Test.totalSupply + 1
      }

      // Will get run when the resource is destroyed
      destroy() {
         Test.totalSupply = Test.totalSupply - 1
      }
   }

   // resource types have a `@` in front
   pub fun mintNFT(rarity: String, name: String): @NFT {
      let nft <- create NFT(rarity: rarity, name: name)
      return <-nft
   }

   init() {
      self.totalSupply = 0
   }
}
```

```cadence
// Transaction file: mint_and_destroy_nft.cdc
import Test from 0x01

transaction(rarity: String, name: String) {

   prepare(signer: AuthAccount) {
      
   }

   execute {
     let nft: @Test.NFT <- Test.mintNFT(rarity: rarity, name: name)

     log(Test.totalSupply) // 1

     // we must destroy the resource or store it somewhere, 
     // or we will get a `loss of resource` error
     destroy nft

     log(Test.totalSupply) // 0

     /*
      ERROR: `nft` no longer exists here
     
      log(nft.name)
     */
   }
}
```