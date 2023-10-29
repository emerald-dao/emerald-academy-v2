---
title: Storing Resources
language: pt
layout: examples
---

# Armazenando Recursos

Assim como qualquer outro tipo de dado, podemos armazenar recursos em arrays e dicionários.

```cadence
pub contract TestDictionaries {

   // The `@` is placed before the entire type.
   // INCORRECT: {Address: @NFT}
   pub let nfts: @{UInt64: NFT}

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

   // two ways to add to a dictionary
   // 1. force move operator `<-!`
   // 2. "old out; new in"

   // 1. because resources cannot be overwritten,
   // this tells Cadence to force move the operator
   // into the dictionary. If a value already exists,
   // panic and abort the program.
   pub fun addNFT1(nft: @NFT) {
      self.nfts[nft.id] <-! nft
      // `nft` no longer exists here, since
      // it has been moved into the dictionary
   }

   // 2. this method first moves out a value that already
   // exists at the specified key, and then moves in the
   // new value. This method allows you to handle the
   // case where a value/resource already exists at the key.
   pub fun addNFT2(nft: @NFT) {
      let oldNFT <- self.nfts[nft.address] <- nft
      destroy oldNFT
      // `nft` and `oldNFT` no longer exist here
   }

   pub fun createNFT(rarity: String, name: String): @NFT {
      return <- create NFT(rarity: rarity, name: name)
   }

   init() {
      self.nfts <- {}
   }
}
```

```cadence
pub contract TestArrays {

   // The `@` is placed before the entire type.
   // INCORRECT: [@NFT]
   pub let nfts: @[NFT]

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

   pub fun addNFT(nft: @NFT) {
      self.nfts.append(<- nft)
   }

   pub fun createNFT(rarity: String, name: String): @NFT {
      return <- create NFT(rarity: rarity, name: name)
   }

   init() {
      self.nfts <- []
   }
}
```