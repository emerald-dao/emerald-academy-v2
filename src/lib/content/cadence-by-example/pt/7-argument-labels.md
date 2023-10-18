---
title: Argument Labels
language: pt
layout: examples
---

# Argument Labels

Parâmetros de função devem ter um nome e um tipo.

Ao chamar funções, você deve fornecer "rótulos de argumentos" a menos que o parâmetro da função seja definido com um _ na frente dele.

```cadence
// Contract file: Test.cdc
// Deployed to 0x01
pub contract Test {
   
  pub fun add1(x: Int, y: Int): Int {
    return x + y
  }

  pub fun add2(_ x: Int, y: Int): Int {
    return x + y
  }

  pub fun add3(_ x: Int, _ y: Int): Int {
    return x + y
  }

}
```

```cadence
// Script file: add.cdc
import Test from 0x01

pub fun main() {
  // must provide x and y argument labels
  let test1 = Test.add1(x: 10, y: 5)

  // only the y argument label is needed
  let test2 = Test.add2(10, y: 5)

  let test3 = Test.add3(10, 5)
}
```