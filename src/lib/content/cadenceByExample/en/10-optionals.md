---
title: Optionals
language: en
layout: examples
---

# Optionals

An optional type means: "This value is either the type, or `nil`."

For example, `Int?` means: "This value is either `Int`, or `nil`."

`nil` simply means nothing, or `null` in other languages.

```cadence
pub fun main() {
   let test_one: Int? = 3 // valid
   
   let test_two: Int? = nil // valid

   let test_three: Int? = "gg" // compile error: a string is not an integer or nil

   let test_four: Int = nil // compile error: nil is not an integer
}
```

# Optionals with Dictionaries

When indexing into dictionaries, we get optional types back.

To get rid of the optional type, we can use the force-unwrap operator `!` to get rid of the optional.

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