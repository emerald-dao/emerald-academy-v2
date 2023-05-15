---
title: Interfaces
language: en
layout: examples
---

# Struct/Resource Interfaces

We can define and implement interfaces on structs or resources.

If a type is restricted by an interface, you can only access the variables/functions specified by that interface.

```cadence
pub contract Test {

   pub resource interface INFT {
      pub var name: String
      pub fun updateNumber(newNumber: Int): Int
   }

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

