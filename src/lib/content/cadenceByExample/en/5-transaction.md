---
title: Transactions
language: en
layout: false
---

```js
import Counter from 0x01

transaction() {

   let SignerAddress: Address

   prepare(signer: AuthAccount) {
      self.SignerAddress = signer.address
   }

   execute {
      Counter.increment()
      log(self.SignerAddress) // prints the signer's address
   }
}
```

# Transactions

In order to change data in a contract, you need to send a transaction.

In Cadence, transactions (and scripts) are separate from the contract layer, and are written in different files.

Transactions have 2 stages:

1. **prepare** - to access data/information inside the `signer`'s account (allowed by the `AuthAccount` type)
2. **execute** - to execute actions
