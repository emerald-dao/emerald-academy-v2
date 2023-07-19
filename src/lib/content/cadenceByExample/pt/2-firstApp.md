---
title: First App
language: en
layout: examples
---

```cadence
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

# **Primeira Aplicação**

Aqui está um contrato simples que você pode obter, incrementar e decrementar a contagem armazenada neste contrato.
