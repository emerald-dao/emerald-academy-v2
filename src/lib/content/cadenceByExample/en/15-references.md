---
title: References
language: en
layout: examples
---

# References

References help us get access to types.

They are most helpful for resources, since we do not want to move a resource out of its stored location just to read or mutate its data.

Reference types are prefixed with `&`.

When creating a reference, you must follow it with a casting expression.

```cadence
// Contract file: Test.cdc
// Deployed to 0x01
pub contract Test {

   // The `@` is placed before the entire type.
   // INCORRECT: {Address: @NFT}
   pub let nfts: @{UInt64: NFT}

   pub resource NFT {
      pub let id: UInt64
      pub let rarity: String
      pub var name: String

      pub fun changeName(newName: String) {
         self.name = newName
      }
      
      init(rarity: String, name: String) {
         self.id = self.uuid
         self.rarity = rarity
         self.name = name
      }
   }

   pub fun createNFT(rarity: String, name: String): @NFT {
      let nft <- create NFT(rarity: rarity, name: name)
      self.nfts[nft.id] <-! nft
   }

   pub fun getNFTRef(id: UInt64): &NFT? {
      // Here we add the `as &NFT?` casting expression.
      // The reference is an optional because it is coming from
      // a dictionary.
      return &self.nfts[id] as &NFT?
   }

   init() {
      self.nfts <- {}
   }
}
```

```cadence
// Transaction file: change_nft_name.cdc
import Test from 0x01

transaction(id: UInt64, newName: String) {

   prepare(signer: AuthAccount) {

   }

   execute {
      let nftRef: &Test.NFT = Test.getNFTRef(id: id) 
               ?? panic("This NFT does not exist.") // unwrap the optional with a `panic`
      nftRef.changeName(newName: newName)
   }
}
```

```cadence
// Script file: read_nft.cdc
import Test from 0x01

pub fun main(id: UInt64): NFTData {
   let nftRef: &Test.NFT = Test.getNFTRef(id: id) 
               ?? panic("This NFT does not exist.") // unwrap the optional with a `panic`
   return NFTData(id: nftRef.id, rarity: nftRef.rarity, name: nftRef.name)
}

pub struct NFTData {
   pub let id: UInt64
   pub let rarity: String
   pub let name: String

   init(id: UInt64, rarity: String, name: String) {
      self.id = id
      self.rarity = rarity
      self.name = name
   }
}
```