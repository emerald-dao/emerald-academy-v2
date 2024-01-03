---
title: Storing Resources
language: en
layout: examples
---

# Storing Resources

Like any other data type, we can store resources in arrays and dictionaries.

```cadence
access(all) contract TestDictionaries {

   // The `@` is placed before the entire type.
   // INCORRECT: {Address: @NFT}
   access(all) let nfts: @{UInt64: NFT}

   access(all) resource NFT {
      access(all) let id: UInt64
      access(all) let rarity: String
      
      init(rarity: String) {
         self.id = self.uuid
         self.rarity = rarity
      }
   }

   // two ways to add to a dictionary
   // 1. force move operator `<-!`
   // 2. "old out; new in"

   // 1. because resources cannot be overwritten,
   // this tells Cadence to force move the resource
   // into the dictionary. If a value already exists,
   // panic and abort the program.
   access(all) fun addNFT1(nft: @NFT) {
      self.nfts[nft.id] <-! nft
      // `nft` no longer exists here, since
      // it has been moved into the dictionary
   }

   // 2. this method first moves out a value that already
   // exists at the specified key, and then moves in the
   // new value. This method allows you to handle the
   // case where a value/resource already exists at the key.
   access(all) fun addNFT2(nft: @NFT) {
      let oldNFT <- self.nfts[nft.id] <- nft
      destroy oldNFT
      // `nft` and `oldNFT` no longer exist here
   }

   access(all) fun createNFT(rarity: String): @NFT {
      return <- create NFT(rarity: rarity)
   }

   init() {
      self.nfts <- {}
   }
}
```

```cadence
access(all) contract TestArrays {

   // The `@` is placed before the entire type.
   // INCORRECT: [@NFT]
   access(all) let nfts: @[NFT]

   access(all) resource NFT {
      access(all) let id: UInt64
      access(all) let rarity: String
      
      init(rarity: String) {
         self.id = self.uuid
         self.rarity = rarity
      }
   }

   access(all) fun addNFT(nft: @NFT) {
      self.nfts.append(<- nft)
   }

   access(all) fun createNFT(rarity: String): @NFT {
      return <- create NFT(rarity: rarity)
   }

   init() {
      self.nfts <- []
   }
}
```