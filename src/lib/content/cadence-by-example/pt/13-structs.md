---
title: Structs
language: pt
layout: examples
---

# Structs

Você pode definir suas próprias estruturas que contêm dados e funções. 
Eles são úteis para agrupar dados relacionados. 
As estruturas podem ser definidas dentro de contratos ou scripts. Uma estrutura definida em um contrato pode ser criada em qualquer lugar.

```cadence
// Contract file: Test.cdc
// Deployed to 0x01
pub contract Test {

   pub let profiles: {Address: Profile}

   pub struct Profile {
      pub let name: String
      pub let address: Address
      pub let favNumber: Int

      pub fun getIntroduction(): String {
         return("Hi! I am ".concat(self.name)
                    .concat(" and my favorite number is: ")
                    .concat(self.favNumber.toString()))
      }
      
      // Like contracts, structs (and later - resources) 
      // must have an `init` function to initialzie their variables.
      init(name: String, address: Address, favNumber: Int) {
         self.name = name
         self.address = address
         self.favNumber = favNumber
      }
   }

   // Notice that this is not secure at all.
   // Someone could pass in a Profile struct with 
   // someone else's address in it and set their
   // profile for them.
   pub fun addProfile(profile: Profile) {
      self.profiles[profile.address] = profile
   }

   pub fun getProfile(address: Address): Profile? {
      return self.profiles[address]
   }

   init() {
      self.profiles = {}
   }
}
```

```cadence
// Transaction file: create_profile.cdc
import Test from 0x01

transaction(name: String, favNumber: Int) {

   // We just use the transaction signer's
   // address for the new profile.
   let SignerAddress: Address

   prepare(signer: AuthAccount) {
      self.SignerAddress = signer.address
   }

   execute {
      // the type is `Test.Profile`
      let newProfile: Test.Profile = Test.Profile(name: name, address: self.SignerAddress, favNumber: favNumber)
      Test.addProfile(profile: newProfile)
   }
}
```

```cadence
// Script file: read_profile.cdc
import Test from 0x01

pub fun main(address: Address): String {
   let profile: Test.Profile? = Test.getProfile(address: address)
   return profile!.getIntroduction()
}
```