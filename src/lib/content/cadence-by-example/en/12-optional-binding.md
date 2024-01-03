---
title: Optional Binding
language: en
layout: examples
---

# Optional Binding

You can use `if let` to automatically unwrap an optional type.

If the optional contains a value, the `if` branch is executed and a temporary constant or variable is set to the value contained in the optional; otherwise, the `else` branch (not required) is executed.

```cadence
access(all) fun main(profileAddress: Address) {

   let profiles: {Address: String} = {
      0x01: "Jacob",
      0x03: "Sarah"
   }

   if let profile: String = profiles[profileAddress] {
      // profile is now able to be used as a 
      // variable and it has `String` type
   } else {
      // the profile with `profileAddress`
      // did not exist, because `profiles[profileAddress]` was nil
   }
}
```

