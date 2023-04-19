---
title: Variables
language: en
layout: examples
---

# Variables

There are 2 types of variables in Cadence:

1. **var** - can be changed
2. **let** - a constant

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
