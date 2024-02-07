---
title: Random
language: en
layout: examples
---

# Random

While Cadence has a built-in random function, beware that users can always abort their own transactions if the result is not favorable.

```cadence
// gets a number [min, max]
access(all) fun getRandom(min: UInt64, max: UInt64): UInt64 {
    // revertibleRandom is a built-in random function to Cadence!
    let randomNumber: UInt64 = revertibleRandom(modulo: (max + 1 - min))
    return randomNumber + min
}
```