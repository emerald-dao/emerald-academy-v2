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
access(all) fun main() {
   let test_one: Int? = 3 // valid
   
   let test_two: Int? = nil // valid

   /*
    compile error: a string is not an integer or nil
   
    let test_three: Int? = "gg"
   */

   /*
    compile error: nil is not an integer

    let test_four: Int = nil
   */
}
```

# Optionals with Dictionaries

When indexing into dictionaries, we get optional types back.

To get rid of the optional type ("unwrap it"), we can use the force-unwrap operator `!`, or `panic` (recommended) if we want to provide an explanation for why the value is `nil`.

```cadence
access(all) fun main() {
   let map: {Address: Int} = {
      0x01: 1,
      0x02: 2
   }

   let test_one: Int? = map[0x01] // 1
   
   let test_two: Int? = map[0x05] // nil (because nothing was there)

   /*
    compile error: we get an optional back, but trying to cast to Int
   
    let test_three: Int = map[0x01]
   */

   // use the force-unwrap operator `!` to get rid of the optional
   let test_four: Int = map[0x01]! // 1

   /*
    run-time error: cannot cast nil to Int
   
    let test_five: Int = map[0x05]!
   */

   let test_six: Int = map[0x01] ?? panic("Address 0x01 does not exist in the dictionary.")

   /*
    run-time error: Address 0x05 does not exist in the dictionary.
    
    let test_seven: Int = map[0x05] ?? panic("Address 0x05 does not exist in the dictionary.")
   */
}
```