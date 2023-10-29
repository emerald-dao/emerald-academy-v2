---
title: Interfaces
language: pt
layout: examples
---

# Interfaces de Struct/Recurso

Podemos definir e implementar interfaces em structs ou recursos.

Se um tipo é restrito por uma interface, você só pode acessar as variáveis/funções especificadas por essa interface.

```cadence
pub contract Test {

   pub resource interface INFT {
      pub var name: String
      pub fun updateNumber(newNumber: Int)
   }

   // implement the interface with `: INFT`
   pub resource NFT: INFT {
      pub var name: String
      pub var number: Int

      pub fun updateNumber(newNumber: Int) {
         self.number = newNumber
      }

      init() {
         self.name = "Spongebob"
         self.number = 1
      }
   }

   pub fun noInterface() {
      let nft: @NFT <- create NFT()
      nft.updateNumber(newNumber: 5)
      log(nft.number) // 5

      destroy nft
   }

   pub fun yesInterface() {
      let nft: @NFT{INFT} <- create NFT()
      nft.updateNumber(newNumber: 5)

      /*
       ERROR - NOT ALLOWED: `number` does not belong to the interface type
       
       log(nft.number)
      */

      destroy nft
   }
}
```

