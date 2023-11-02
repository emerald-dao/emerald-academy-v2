---
layout: examples
---

```cadence
import PRNG from 0x93615d25d14fa337

pub fun main(min: UInt256, max: UInt256): UInt256 {
  // creates a rng seeded from blockheight salted with hash of a resource uuid (or any UInt64 value)
  // can be used to define traits based on a future block height etc.  
  let generator <- PRNG.createFrom(blockHeight: getCurrentBlock().height, uuid: 100)

  // call the range function to give you an integer between min and max
  let answer: UInt256 = generator.range(min, max)

  // destroy the generator resource
  destroy generator

  // return your answer
  return answer
}
```