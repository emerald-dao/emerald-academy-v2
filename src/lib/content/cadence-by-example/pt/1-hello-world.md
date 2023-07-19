---
title: Hello World
language: pt
layout: examples
---

```cadence
pub contract HelloWorld {
   pub let greet: String

   init() {
      self.greet = "Hello World!"
   }
}
```

# Hello World

Declare um contrato chamado **`HelloWorld`**.

Inicialize uma variável **`greet`** com "Olá, Mundo!"