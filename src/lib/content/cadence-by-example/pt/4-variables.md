---
title: Variables
language: pt
layout: examples
---

```cadence
pub contract Variables {
   pub var num1: Int
   pub let num2: Int

   init() {
      self.number1 = 1
      self.number1 = 2 // good

      self.number2 = 1
      self.number2 = 2 // not allowed
   }
}
```

# **Variáveis**

Existem 2 tipos de variáveis em Cadence:

1. **var** - pode ser alterada
2. **let** - uma constante