---
title: Primitive Types
language: en
layout: examples
---

# Primitive Types

Some of the basic types in Cadence.

```cadence
pub contract Variables {
   pub let number: Int
   pub let name: String
   pub let address: Address
   pub let switch: Bool
   pub let listOfNumbers: [Int]
   pub let profiles: {String: Address}

   init() {
      self.number = 1
      self.name = "Emerald Academy"
      self.address = 0x5643fd47a29770e7
      self.switch = true
      self.listOfNumbers = [1, 100, 13]
      self.profiles = {
         "Jacob": 0x01,
         "Angela": 0x03
      }
   }
}
```
