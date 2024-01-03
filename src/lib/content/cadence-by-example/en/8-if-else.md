---
title: If-Else
language: en
layout: examples
---

# If / Else

Cadence supports conditional statements `if`, `else if` and `else`.

```cadence
access(all) fun main(x: Int): String {
   if (x > 0) {
      return "This is a positive integer."
   } else if (x == 0) {
      return "This is zero."
   } else {
      return "This is a negative integer."
   }
}
```
