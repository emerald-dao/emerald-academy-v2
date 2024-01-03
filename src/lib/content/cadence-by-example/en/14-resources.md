---
title: Resources
language: en
layout: examples
---

# Resources

Resources are much like structs in that they have data and functions inside of them. However, they differ in the following ways:
- They can only ever be created in the contract using the `create` keyword
- They are moved around using the `<-` operator
- Their type is prefixed with a `@`
- They cannot be copied or lost, and must be explicity stored somewhere or destroyed

```cadence
// Contract file: Test.cdc
// Deployed to 0x01
access(all) contract Test {

   access(all) resource NFT {
      access(all) let id: UInt64
      access(all) var name: String

      access(all) fun changeName(newName: String) {
         self.name = newName
      }
      
      // Will get run when the resource is created
      init(name: String) {
         // every resource has a unique `uuid` field 
         // that will never be the same, even after the resource is destroyed
         self.id = self.uuid
         self.name = name
      }
   }

   // resource types have a `@` in front
   access(all) fun mintNFT(name: String): @NFT {
      let nft <- create NFT(name: name)
      return <- nft
   }

   init() {
      self.totalSupply = 0
   }
}
```

```cadence
// Transaction file: mint_and_destroy_nft.cdc
import Test from 0x01

transaction(name: String) {

   prepare(signer: &Account) {}

   execute {
     let nft: @Test.NFT <- Test.mintNFT(name: name)

     // we must destroy the resource or store it somewhere, 
     // or we will get a `loss of resource` error
     destroy nft

     /*
      ERROR: `nft` no longer exists here
     
      log(nft.name)
     */
   }
}
```