---
title: Structs
language: en
layout: examples
---

# Structs

You can define your own structs that have data and functions inside of them.

They are useful for grouping together related data.

Structs can be defined inside contracts or scripts. A struct defined in a contract can be created anywhere.

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