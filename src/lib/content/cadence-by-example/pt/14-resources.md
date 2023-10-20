---
title: Resources
language: pt
layout: examples
---

# Recursos

Recursos são muito parecidos com estruturas, pois possuem dados e funções dentro deles. No entanto, eles não podem ser copiados e devem ser explicitamente destruídos ou armazenados em algum lugar.

Aqui estão alguns fatos sobre recursos:
- Eles só podem ser criados no contrato usando a palavra-chave `create`.
- Eles são movidos usando o operador `<-`.
- Seu tipo é prefixado com um `@`.
- Eles podem definir funções `destroy` que serão executadas quando forem destruídos.
- Eles não podem ser copiados ou perdidos.

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