---
title: Arrays
language: pt
layout: examples
---

```cadence
pub contract Arrays {
   pub let names: [String]

   pub fun add(name: String) {
      self.names.append(name)
   }

   pub fun remove(index: Int) {
      self.names.remove(at: index)
   }

   pub fun get(index: Int): String {
      return self.names[index]
   }

   init() {
      self.names = ["Jacob", "Sarah"]
   }
}
```

# **Arrays**

Os arrays em Cadence são listas ordenadas de elementos de um tipo específico. No exemplo acima, temos um array de strings chamado **`names`**. Através das funções **`add`**, **`remove`** e **`get`**, é possível adicionar, remover e acessar elementos do array, respectivamente.