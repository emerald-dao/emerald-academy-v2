---
title: Entitlements
language: en
layout: examples
---

# Entitlements

Entitlements are how we handle access control.

By creating an "authorized reference" (looks like `auth(...)`), you can specify certain variables/functions are only accessible if you have a certain entitlement.

You can only create authorizied references if you own the resource (have the resource itself).

```cadence
// Contract file: Test.cdc
// Deployed to 0x01
access(all) contract Test {

   access(all) entitlement NameChange

   access(all) resource NFT {
      access(all) let id: UInt64
      access(all) var name: String

      access(NameChange) fun changeName(newName: String) {
         self.name = newName
      }
      
      init(name: String) {
         self.id = self.uuid
         self.name = name
      }
   }

   access(all) fun test(name: String) {
      let nft: @NFT <- create NFT(name: name)
      
      let publicRef = &nft as &NFT
      log(publicRef.name) // good
      /*
         compile-error: cannot access `changeName`: function requires `NameChange` authorization, but reference is unauthorized.

         publicRef.changeName(newName: "Bob")
      */

      let entitledRef = &nft as auth(NameChange) &NFT
      log(entitledRef.name) // good
      entitledRef.changeName(newName: "Bob") // good because we have the NameChange entitlement
   }

}
```