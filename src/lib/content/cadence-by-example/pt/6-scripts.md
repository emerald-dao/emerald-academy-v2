---
title: Scripts
language: pt
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

# **Scripts**

Para ler dados de um contrato, você precisa executar um script.

Assim como as transações, os scripts são separados da camada do contrato e são escritos em arquivos diferentes.