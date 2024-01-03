---
title: Argument Labels
language: en
layout: examples
---

# Argument Labels

Function parameters must have a name and a type.

When calling functions, you must provide "argument labels" unless the function parameter is defined with a `_ ` in front of it.

```cadence
// Contract file: Test.cdc
// Deployed to 0x01
access(all) contract Test {
   
  access(all) fun add1(x: Int, y: Int): Int {
    return x + y
  }

  access(all) fun add2(_ x: Int, y: Int): Int {
    return x + y
  }

  access(all) fun add3(_ x: Int, _ y: Int): Int {
    return x + y
  }

}
```

```cadence
// Script file: add.cdc
import Test from 0x01

access(all) fun main() {
  // must provide x and y argument labels
  let test1 = Test.add1(x: 10, y: 5)

  // only the y argument label is needed
  let test2 = Test.add2(10, y: 5)

  let test3 = Test.add3(10, 5)
}
```