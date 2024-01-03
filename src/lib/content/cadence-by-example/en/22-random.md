---
title: Random
language: en
layout: examples
---

# Random

While Cadence has a built-in random function, beware that users can always abort their own transactions if the result is not favorable.

```cadence
// gets a number between min & max
access(all) fun main(min: UInt64, max: UInt64): UInt64 {
   // use the built-in `revertibleRandom()` function
   let randomNumber: UInt64 = revertibleRandom()
   return (randomNumber % (max + 1 - min)) + min
}
```