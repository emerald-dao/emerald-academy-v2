---
title: Dictionaries
language: en
layout: examples
---

# Dictionaries

When retrieving a value from a dictionary, an optional type is returned. More on that next.

```cadence
pub contract Dictionaries {
   pub let map: {Address: Int}

   pub fun add(address: Address, number: Int) {
      self.map[address] = number
   }

   pub fun remove(address: Address) {
      self.map.remove(key: address)
   }

   pub fun get(address: Int): String? {
      return self.map[address]
   }

   init() {
      self.map = {
         0x01: 1,
         0x02: 2,
         0x03: 3
      }
   }
}
```