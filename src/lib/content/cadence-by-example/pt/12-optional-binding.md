---
title: Optional Binding
language: pt
layout: examples
---

# Optional Binding

Você pode usar `if let` ara desembrulhar automaticamente um tipo opcional.

Se o opcional contiver um valor, o ramo `if` é executado e uma constante ou variável temporária é definida com o valor contido no opcional; caso contrário, o ramo `else` (não obrigatório) é executado.

```cadence
pub fun main(profileAddress: Address) {

   let profiles: {Address: String} = {
      0x01: "Jacob",
      0x03: "Sarah"
   }

   if let profile: String = profiles[profileAddress] {
      // profile is now able to be used as a 
      // variable and it has `String` type
   } else {
      // the profile with `profileAddress`
      // did not exist, and `profile` was nil
   }
}
```

