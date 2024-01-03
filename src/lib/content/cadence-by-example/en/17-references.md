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
access(all) contract Test {

   access(all) let nfts: @{UInt64: NFT}

   access(all) resource NFT {
      access(all) let id: UInt64
      access(all) let rarity: String
      access(all) var name: String

      access(all) fun changeName(newName: String) {
         self.name = newName
      }
      
      init(rarity: String, name: String) {
         self.id = self.uuid
         self.rarity = rarity
         self.name = name
      }
   }

   access(all) fun createNFT(rarity: String, name: String) {
      let nft <- create NFT(rarity: rarity, name: name)
      self.nfts[nft.id] <-! nft
   }

   access(all) fun getNFTRef(id: UInt64): &NFT? {
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

   prepare(signer: &Account) {}

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

access(all) fun main(id: UInt64): NFTData {
   let nftRef: &Test.NFT = Test.getNFTRef(id: id) 
               ?? panic("This NFT does not exist.") // unwrap the optional with a `panic`
   return NFTData(nftRef.id, nftRef.rarity, nftRef.name)
}

access(all) struct NFTData {
   access(all) let id: UInt64
   access(all) let rarity: String
   access(all) let name: String

   init(_ i: UInt64, _ r: String, _ n: String) {
      self.id = i
      self.rarity = r
      self.name = n
   }
}
```