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
var num1: Int = 0
let num2: Int = 0

num1 = 1 // good
/*
   ERROR: not allowed to change a constant
   
   self.num2 = 2
*/
```
