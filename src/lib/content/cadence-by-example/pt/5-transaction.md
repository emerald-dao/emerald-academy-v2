---
title: Transactions
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
// Transaction file: increment.cdc
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
# **Transações**

Para alterar dados em um contrato, você precisa enviar uma transação.

Em Cadence, as transações (e scripts) são separadas da camada do contrato e são escritas em arquivos diferentes.

As transações têm 2 etapas principais:

1. **prepare** - para acessar dados/informações dentro da conta do **`signatário`** (permitido pelo tipo **`AuthAccount`**)
2. **execute** - para executar ações
