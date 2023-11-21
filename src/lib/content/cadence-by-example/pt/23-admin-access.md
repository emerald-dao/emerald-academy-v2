---
title: Admin Access
language: pt
layout: examples
---

# Acesso de administrador

Às vezes, queremos apenas que um administrador seja capaz de executar determinadas ações, como cunhar um NFT.

Podemos simplesmente criar um recurso que seja salvo na conta do contrato no momento da implantação e que não possa ser criado de outra forma.

```cadence
// Contract file: Test.cdc
// Deployed to 0x01
pub contract Test {

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

   pub resource Admin {
      pub fun createNFT(rarity: String, name: String): @NFT {
         let nft <- create NFT(rarity: rarity, name: name)
         return <- nft
      }
   }

   init() {
      // like the `prepare` phase of a transction where we can save data to an AuthAccount,
      // we can access the contract account's AuthAccount using `self.account` in the contract's 
      // init function.
      self.account.save(<- create Admin(), target: /storage/TestAdmin)
   }

}
```

```cadence
// Transaction file: mint_nft.cdc
import Test from 0x01

transaction(rarity: String, name: String) {

   let Admin: &Test.Admin

   // the signer is the account with the Admin resource
   prepare(signer: AuthAccount) {
      self.Admin = signer.borrow<&Test.Admin>(from: /storage/TestAdmin) 
                           ?? panic("This signer is not an Admin.")
   }

   execute {
      let nft <- self.Admin.createNFT(rarity: rarity, name: name)

      // do something with nft here...
      destroy nft
   }
}
```
