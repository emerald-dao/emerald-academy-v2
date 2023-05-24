---
title: Scripts
language: en
layout: examples
---

# Scripts

In order to read data from a contract, you need to execute a script.

Like transactions, scripts are separate from the contract layer, and are written in different files.

Scripts always look like:
```cadence
pub fun main() {
  
}
```

# Example Contract & Script

```cadence
// Contract file: Counter.cdc
// Deployed to 0x01
pub contract Counter {
   pub var count: Int

   pub fun increment() {
      self.count = self.count + 1
   }

   init() {
      self.count = 0
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
