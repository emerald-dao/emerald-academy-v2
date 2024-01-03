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
access(all) contract Variables {
   access(all) var num1: Int
   access(all) let num2: Int

   init() {
      self.num1 = 1
      self.num1 = 2 // good

      self.num2 = 1
      /*
       ERROR: not allowed
       
       self.num2 = 2
      */
   }
}
```
