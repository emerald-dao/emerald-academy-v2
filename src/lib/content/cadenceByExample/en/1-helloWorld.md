---
title: Hello World
language: en
layout: examples
---

# Hello World

Declare a contract called `HelloWorld`.

Initialize a `greet` variable to "Hello, World!"

Variables must always be initialized in the `init` function.

```cadence
pub contract HelloWorld {
   pub let greet: String

   init() {
      self.greet = "Hello World!"
   }
}
```
