---
title: Variables
language: en
layout: false
---

```js
pub contract Variables {
   pub let num1: Int
   pub var num2: Int

   init() {
      self.number1 = 1
      self.number1 = 2 // good

      self.number2 = 1
      self.number2 = 2 // not allowed
   }
}
```

# Variables

There are 2 types of variables in Cadence:
1. **var** - can be changed
2. **let** - a constant