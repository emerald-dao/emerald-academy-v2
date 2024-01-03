---
title: Dictionaries
language: en
layout: examples
---

# Dictionaries

When retrieving a value from a dictionary, an optional type is returned. More on that next.

```cadence
access(all) contract Dictionaries {
   access(all) let map: {Address: Int}

   access(all) fun add(address: Address, number: Int) {
      self.map[address] = number
   }

   access(all) fun remove(address: Address) {
      self.map.remove(key: address)
   }

   access(all) fun get(address: Address): Int? {
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