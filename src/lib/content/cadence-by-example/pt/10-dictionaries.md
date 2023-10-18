---
title: Dictionaries
language: pt
layout: examples
---

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

# **Dicionários**

Ao recuperar um valor de um dicionário, é retornado um tipo opcional. Mais informações sobre isso a seguir.