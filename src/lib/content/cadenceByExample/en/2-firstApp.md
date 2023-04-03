---
title: First App
language: en
layout: examples
---

```cadence
pub contract Counter {
   pub var count: Int

   pub fun increment() {
      self.count = self.count + 1
   }

   pub fun decrement() {
      self.count = self.count - 1
   }

   pub fun get(): Int {
      return self.count
   }
}
```

# First Application

Here is a simple contract that you can get, increment and decrement the count store in this contract.
