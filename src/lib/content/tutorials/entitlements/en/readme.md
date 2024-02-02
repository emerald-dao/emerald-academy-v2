---
layout: examples
---

<script>
  import Notice from '$lib/components/atoms/Notice.svelte';  
</script>

The old way of determining access control based on an object's type is going away.

This tutorial will walk through the new mechanism: **Entitlements**.

# Example Overview

In order to showcase the new Entitlements system, let's create an example contract so we can compare how you would access an object's fields & functions in the old vs. new way side by side. We will have to define 2 different contracts - one in old Cadence, and one using Cadence 1.0 to properly show examples.

Old Cadence Contract:
```cadence
pub contract HelloWorld {

    pub resource interface IGreeting {
        pub var greeting: String
    }

    pub resource Greeting: IGreeting {
        pub var greeting: String

        pub fun changeGreeting(newGreeting: String) {
            self.greeting = newGreeting
        }

        init(greeting: String) {
            self.greeting = greeting
        }
    }

    pub fun createGreeting(greeting: String): @Greeting {
        return <- create Greeting(greeting: greeting)
    }

}
```

Cadence 1.0 Contract:
```cadence
access(all) contract HelloWorld {

    access(all) entitlement ChangeGreeting

    access(all) resource Greeting {
        access(all) var greeting: String

        access(ChangeGreeting) fun changeGreeting(newGreeting: String) {
            self.greeting = newGreeting
        }

        init(greeting: String) {
            self.greeting = greeting
        }
    }

    access(all) fun createGreeting(greeting: String): @Greeting {
        return <- create Greeting(greeting: greeting)
    }

}
```

In each case, the idea is that we have a `Greeting` resource. We want the public to be able to read the `greeting` variable, but only the owner of the resource should be able to call the `changeGreeting` function.

## Old vs. New: Restricting Access

In the old way of determining access control, you would limit an object's access by restricting it with an interface.

Here is how you would have done that:
```cadence
import HelloWorld from 0x01

access(all) fun main(greeting: String) {
   let g: @HelloWorld.Greeting <- HelloWorld.createGreeting(greeting: greeting)

   // full access
   let gRef: &HelloWorld.Greeting = &g as &HelloWorld.Greeting
   log(gRef.greeting) // ok
   gRef.changeGreeting(newGreeting: "Test") // ok

   // restricted access based on the `IGreeting` interface
   let restrictedRef: &HelloWorld.Greeting{HelloWorld.IGreeting} = &g as &HelloWorld.Greeting{HelloWorld.IGreeting}
   log(restrictedRef.greeting) // ok
   /*
        ERROR: `changeGreeting` not accessible

        restrictedRef.changeGreeting(newGreeting: "Test")
   */

   destroy g
}
```

In the new way of determining access control, **access is not determined by the type. It is determined by its entitlement.**

Here is the new way of doing the above (using the new Cadence 1.0 contract):
```cadence
import HelloWorld from 0x01

access(all) fun main(greeting: String) {
   let g: @HelloWorld.Greeting <- HelloWorld.createGreeting(greeting: greeting)

   // full access
   let gRef: auth(HelloWorld.ChangeGreeting) &HelloWorld.Greeting = &g
   log(gRef.greeting) // ok
   gRef.changeGreeting(newGreeting: "Test") // ok

   // restricted access based on not having the `ChangeGreeting` entitlement
   let restrictedRef: &HelloWorld.Greeting = &g
   log(restrictedRef.greeting) // ok
   /*
        ERROR: `changeGreeting` not accessible

        restrictedRef.changeGreeting(newGreeting: "Test")
   */

   destroy g
}
```

<Notice type="note">
    We don't need the `as` cast anymore for references if we specify the type.
</Notice>

As you can see, instead of declaring an interface and restricting a type to the fields/functions available in the interface, you have to create a new entitlement and declare that entitlement as the access for a field/function, which will only be accessible if you have that specific entitled ("authorized") reference to it.

## Conclusion

There are other new features included in the new Entitlements system, but I wanted to make it easy to digest. I will continually update this tutorial with more complicated features. I hope this helped!

Also, if you'd like to view the official changes for Entitlements, go <a href="https://forum.flow.com/t/update-on-cadence-1-0/5197#entitlements-and-safe-down-casting-40">here</a>.

Till next time ~ Jacob Tucker