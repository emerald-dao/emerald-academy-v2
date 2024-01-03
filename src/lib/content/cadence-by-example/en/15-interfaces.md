---
title: Interfaces
language: en
layout: examples
---

# Struct/Resource Interfaces

We can define and implement interfaces on structs or resources.

```cadence
access(all) contract Test {

   access(all) resource interface IWeapon {
      access(all) let rarity: String
      paccess(all)ub fun getStats(): String
   }

   // implement the interface with `: IWeapon`
   access(all) resource Sword: IWeapon {
      access(all) let rarity: String
      access(all) let sharpness: Int

      access(all) fun getStats(): String {
         return self.rarity
                  .concat(" sword with sharpness level ")
                  .concat(self.sharpness.toString())
      }

      init(rarity: String, sharpness: Int) {
         self.rarity = rarity
         self.sharpness = sharpness
      }
   }

   access(all) resource Bow: IWeapon {
      access(all) let rarity: String
      access(all) let power: Int

      access(all) fun getStats(): String {
         return self.rarity
                  .concat(" bow with power level ")
                  .concat(self.power.toString())
      }

      init(rarity: String, power: Int) {
         self.rarity = rarity
         self.power = power
      }
   }

   // notice how the interface types are written
   // (we add @ in front only because it's a resource)
   access(all) fun logAndDestroyWeapon(weapon: @{IWeapon}) {
      log(weapon.getStats())
      destroy weapon
   }

   // ... more stuff here
}
```

Contracts can also implement interfaces defined in other contracts.

```cadence
import Test from "./Test.cdc"

access(all) contract AddedTest {
   access(all) resource Shield: Test.IWeapon {
      access(all) let rarity: String
      access(all) let endurance: Int

      access(all) fun getStats(): String {
         return self.rarity
                  .concat(" shield with endurance level ")
                  .concat(self.endurance.toString())
      }

      init(rarity: String, endurance: Int) {
         self.rarity = rarity
         self.endurance = endurance
      }
   }

   // ... more stuff here
}
```