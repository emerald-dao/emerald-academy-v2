---
layout: examples
---

Note that while the `revertibleRandom` function is secure & unpredictable (you can read more about it [here](https://developers.flow.com/cadence/language/built-in-functions#revertiblerandom)), you must be cautious about how you use this.

Users who authorize/sign transactions can always abort transactions if they do not like the outcome. For example, a coin flip game where a user signs a transaction to flip a coin and win $. They can simply abort the transaction if the end result is a loss.

Thus, this function should be used where aborting a transaction is not a concern (ex. an Admin running an on-chain raffle).

```cadence
// gets a number between min & max
access(all) fun main(min: UInt64, max: UInt64): UInt64 {
  let randomNumber: UInt64 = revertibleRandom<UInt64>()
  return (randomNumber % (max + 1 - min)) + min
}
```
