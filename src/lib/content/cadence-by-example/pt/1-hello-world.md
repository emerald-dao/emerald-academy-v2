---
title: Hello World
language: pt
layout: examples
---

# Olá Mundo

Declare um contrato chamado **`HelloWorld`**.

Inicialize uma variável **`greet`** com "Hello, World!

As variáveis devem sempre ser inicializadas na função init.

```cadence
pub contract HelloWorld {
   pub let greet: String

   init() {
      self.greet = "Hello World!"
   }
}
```
