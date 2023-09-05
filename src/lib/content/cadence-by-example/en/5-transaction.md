---
title: Transactions
language: en
layout: examples
---

# Transactions

In order to change data in a contract, you need to send a transaction.

In Cadence, transactions (and scripts) are separate from the contract layer, and are written in different files.

Transactions always look like:
```cadence
transaction() {
   prepare(signer: AuthAccount) {

   }
   execute {

   }
}
```

Transactions have 2 main stages:

1. **prepare** - to access/manipulate data inside the `signer`'s account (allowed by the `AuthAccount` type)
2. **execute** - to execute actions

# Example Contract & Transaction

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
// Transaction file: increment.cdc
import Counter from 0x01

transaction() {

   prepare(signer: AuthAccount) {
      // we don't need to do anything 
      // with the signer's data
   }

   execute {
      Counter.increment()
   }
}
```
