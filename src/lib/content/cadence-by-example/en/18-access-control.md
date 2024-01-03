---
title: Access Control
language: en
layout: examples
---

# Access Control

We use "access modifiers" to determine who can read/write variables or call functions.

We will cover Entitlements in the next lesson.

<img src="/tutorials/access-control.png" />

```cadence
access(all) contract SomeContract {

   access(all) struct SomeStruct {

      //
      // 4 Variables
      //

      access(all) var a: String

      access(account) var b: String

      access(contract) var c: String

      access(self) var d: String

      //
      // 3 Functions
      //

      access(all) fun publicFunc() {}

      access(account) fun accountFunc() {}

      access(contract) fun contractFunc() {}

      access(self) fun privateFunc() {}


      access(all) fun structFunc() {
         /**************/
         /*** AREA 1 ***/
         /**************/

         // Readable: a, b, c, d
         // Writable: a, b, c, d
         // Callable: publicFunc, accountFunc, contractFunc, privateFunc
      }

      init() {
         self.a = "a"
         self.b = "b"
         self.c = "c"
         self.d = "d"
      }
   }

   access(all) resource SomeResource {
      access(all) var e: Int

      access(all) fun resourceFunc() {
         /**************/
         /*** AREA 2 ***/
         /**************/

         // Readable: a, b, c
         // Writable: None
         // Callable: publicFunc, accountFunc, contractFunc
      }

      init() {
         self.e = 17
      }
   }

   access(all) fun questsAreFun() {
      /**************/
      /*** AREA 3 ***/
      /**************/

      // Readable: a, b, c
      // Writable: None
      // Callable: publicFunc, accountFunc, contractFunc
   }

   init() {
      self.testStruct = SomeStruct()
   }
}
```

This is a script that imports the contract above:

```cadence
import SomeContract from 0x01

access(all) fun main() {
  /**************/
  /*** AREA 4 ***/
  /**************/

  // Readable: a
  // Writable: None
  // Callable: publicFunc
}
```

This is a contract deployed to the same account as `SomeContract` (0x01):

```cadence
import SomeContract from 0x01
access(all) contract AnotherContract {
   /**************/
   /*** AREA 5 ***/
   /**************/

   // Readable: a, b
   // Writable: None
   // Callable: publicFunc, accountFunc
}
```