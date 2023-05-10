---
title: First App
language: en
layout: examples
---

# First Application

Here is a simple contract with a count that has a default value of 0.

You can increment, decrement, and get the count.

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

   init() {
      self.count = 0
   }
}
```
