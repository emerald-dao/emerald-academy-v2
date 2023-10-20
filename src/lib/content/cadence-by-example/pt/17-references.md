---
title: References
language: pt
layout: examples
---

# Referências

Referências nos ajudam a obter acesso a tipos.

Elas são mais úteis para recursos, já que não queremos mover um recurso de seu local de armazenamento apenas para ler ou alterar seus dados.

Tipos de referência são prefixados com `&`.

Ao criar uma referência, você deve segui-la com uma expressão de casting.

```cadence
// Contract file: Test.cdc
// Deployed to 0x01
pub contract Test {

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

   pub fun createNFT(rarity: String, name: String) {
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
   return NFTData(nftRef.id, nftRef.rarity, nftRef.name)
}

pub struct NFTData {
   pub let id: UInt64
   pub let rarity: String
   pub let name: String

   init(_ i: UInt64, _ r: String, _ n: String) {
      self.id = i
      self.rarity = r
      self.name = n
   }
}
```