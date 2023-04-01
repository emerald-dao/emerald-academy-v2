---
title: Scripts
language: en
layout: examples
---

```cadence
// Contract file: Counter.cdc
// Deployed to 0x01
pub contract Counter {
   pub var count: Int

   pub fun increment() {
      self.count = self.count + 1
   }

   pub fun decrement() {
      self.count = self.count - 1
   }

   pub fun get(): Int {
      return self.count
   }
}
```

```cadence
// Script file: get_count.cdc
import Counter from 0x01

pub fun main(): Int {
   return Counter.count
}
```

# Scripts

In order to read data from a contract, you need to execute a script.

Like transactions, scripts are separate from the contract layer, and are written in different files.
