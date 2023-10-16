---
title: Optionals
language: pt
layout: examples
---

```cadence
pub fun main() {
   let test_one: Int? = 3 // valid
   
   let test_two: Int? = nil // valid

   let test_three: Int? = "gg" // compile error: a string is not an integer or nil

   let test_four: Int = nil // compile error: nil is not an integer
}
```

# **Opcionais**

Um tipo opcional significa: "Este valor é o tipo, ou **`nil`**."

Por exemplo, **`Int?`** significa: "Este valor é **`Int`**, ou **`nil`**."

**`nil`** simplesmente significa nada ou **`null`** em outras linguagens.

```cadence
pub fun main() {
   let map: {Address: Int} = {
      0x01: 1,
      0x02: 2
   }

   let test_one: Int? = map[0x01] // 1
   
   let test_two: Int? = map[0x05] // nil (because nothing was there)

   let test_three: Int = map[0x01] // compile error: we get an optional back, but trying to cast to Int

   // use the force-unwrap operator `!` to get rid of the optional
   let test_four: Int = map[0x01]! // 1

   let test_five: Int = map[0x05]! // compiles, but run time error: cannot cast nil to Int
}
```

# **Opcionais com Dicionários**

Ao indexar dicionários, recebemos tipos opcionais de volta.

Para nos livrarmos do tipo opcional, podemos usar o operador de desempacotamento forçado **`!`** para eliminar o opcional.