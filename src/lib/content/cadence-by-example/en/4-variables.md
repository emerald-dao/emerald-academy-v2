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
      self.num1 = 1
      self.num1 = 2 // good

      self.num2 = 1

      /*
       ERROR: not allowed
       
       self.numr2 = 2
      */
   }
}
```
