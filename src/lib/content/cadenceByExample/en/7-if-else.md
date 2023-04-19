---
title: If-Else
language: en
layout: examples
---

# If / Else

Cadence supports conditional statements `if`, `else if` and `else`.

```cadence
pub fun main(x: Int): Int {
   if (x < 10) {
      return 0;
   } else if (x < 20) {
      return 1;
   } else {
      return 2;
   }
}
```
