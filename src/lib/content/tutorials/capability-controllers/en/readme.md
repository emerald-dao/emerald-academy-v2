---
layout: examples
---

The old Cadence capability system is being deprecated. Namely, `link` and `getCapability` are not what you should use anymore to create capabilities.

This tutorial will walk through the new mechanism: **Capability Controllers** ("Cap Cons").

# Example Overview

In order to showcase the new Capability Controllers system, let's create an example contract so we can compare how you would create, manage, and get the old vs. new capabilities side by side. We will have to define 2 different contracts - one in old Cadence, and one using Cadence 1.0 to properly show examples.

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

## Old vs. New: Creating a Public Capability

First we want to save the greeting resource in a user's storage, and then allow the public to read the greeting variable.

Here is the old way of doing that:
```cadence
import HelloWorld from 0x01

transaction(greeting: String) {
    prepare(signer: AuthAccount) {
        // save the resource
        signer.save(<- HelloWorld.createGreeting(greeting: greeting), to: /storage/MyGreeting)
        // create a public capability restricted to `IGreeting` that is linked to a storage path
        signer.link<&HelloWorld.Greeting{HelloWorld.IGreeting}>(/public/MyGreeting, target: /storage/MyGreeting)
    }
}
```

Here is the new way of doing that:
```cadence
import HelloWorld from 0x01

transaction(greeting: String) {
    prepare(signer: auth(Storage, Capabilities) &Account) {
        // save the resource
        signer.storage.save(<- HelloWorld.createGreeting(greeting: greeting), to: /storage/MyGreeting)
        // create a storage capability, previously known as a "private capability"
        let cap = signer.capabilities.storage.issue<&HelloWorld.Greeting>(/storage/MyGreeting)
        // publish the storage ("private") capability to a public path
        signer.capabilities.publish(cap, at: /public/MyGreeting)
    }
}
```

As you can see, instead of just linking a certain type to the public from a storage path, it is now broken up into 2 steps:
1. Create a new storage capability (previously known as a "private capability") first
2. Issue that storage capability to a public path

## Old vs. New: Getting a Public Capability

Now let's walk through how you would actually get the capability from a user's account.

Here is the old way of doing that:
```cadence
import HelloWorld from 0x01

pub fun main(user: Address): String {
    let greetingCap: Capability<&HelloWorld.Greeting{HelloWorld.IGreeting}> = getAccount(user).getCapability<&HelloWorld.Greeting{HelloWorld.IGreeting}>(/public/MyGreeting)
    let greetingRef: &HelloWorld.Greeting{HelloWorld.IGreeting} = greetingCap.borrow() ?? panic("This public capability does not exist.")

    return greetingRef.greeting
}
```

Here is the new way of doing that:
```cadence
import HelloWorld from 0x01

access(all) fun main(user: Address): String {
    // Note how the get function returns an optional now.
    let greetingCap: Capability<&HelloWorld.Greeting> = 
        getAccount(user).capabilities.get<&HelloWorld.Greeting>(/public/MyGreeting)
        ?? panic("This public capability does not exist.")
    let greetingRef: &HelloWorld.Greeting = greetingCap.borrow()!

    return greetingRef.greeting
}
```

OR, you can use a more simplified version using the new `borrow` conveniance function:
```cadence
import HelloWorld from 0x01

access(all) fun main(user: Address): String {
    let greetingRef: &HelloWorld.Greeting = 
        getAccount(user).capabilities.borrow<&HelloWorld.Greeting>(/public/MyGreeting)
        ?? panic("This public capability does not exist.")

    return greetingRef.greeting
}
```

## Old vs. New: Removing a Public Capability

Here is the old way of doing that:
```cadence
import HelloWorld from 0x01

transaction(greeting: String) {
    prepare(signer: AuthAccount) {
        signer.unlink(/public/MyGreeting)
    }
}
```

Here is the new way of doing that:
```cadence
import HelloWorld from 0x01

transaction(greeting: String) {
    prepare(signer: auth(Capabilities) &Account) {
        signer.capabilities.unpublish(/public/MyGreeting)
    }
}
```

## Old vs. New: Creating & Getting a Storage ("Private") Capability

As you've seen above, public capabilities are pretty similar. It is just different syntax.

However, private capabilities are very different now. 

Here is the old way of creating a private capability:
```cadence
import HelloWorld from 0x01

transaction(greeting: String) {
    prepare(signer: AuthAccount) {
        // save the resource
        signer.save(<- HelloWorld.createGreeting(greeting: greeting), to: /storage/MyGreeting)
        // create a private capability that is linked to a storage path
        signer.link<&HelloWorld.Greeting>(/private/MyGreeting, target: /storage/MyGreeting)


        // then, at a later point (potentially in a different transaction), you would borrow it and distribute it like this:
        let privateCap: Capability<&HelloWorld.Greeting> = signer.getCapability<&HelloWorld.Greeting>(/private/MyGreeting)
        // ... and you would then move it around as you please
    }
}
```

Here is the new way of creating a private capability:
```cadence
import HelloWorld from 0x01

transaction(greeting: String) {
    prepare(signer: auth(Storage, Capabilities) &Account) {
        // save the resource
        signer.storage.save(<- HelloWorld.createGreeting(greeting: greeting), to: /storage/MyGreeting)
        // create a storage capability, previously known as a "private capability"
        let storageCap = signer.capabilities.storage.issue<auth(HelloWorld.ChangeGreeting) &HelloWorld.Greeting>(/storage/MyGreeting)
        // ... and you would then move it around as you please
    }
}
```

Note that private paths do not exist anymore. You are instead just issuing storage capabilities on a certain storage path. Because of this, you need a way to view all the capabilities you've created for a certain storage path so you can individually manage them. 

Here is how you'd do that:
```cadence
import HelloWorld from 0x01

access(all) fun main(user: Address, storagePath: StoragePath): [&StorageCapabilityController] {
    let authAccount = getAuthAccount<auth(Capabilities) &Account>(user)
    return authAccount.capabilities.storage.getControllers(forPath: storagePath)
}
```

Here is what the `&StorageCapabilityController` type looks like:

```cadence
access(all) struct StorageCapabilityController {

    /// An arbitrary "tag" for the controller.
    /// For example, it could be used to describe the purpose of the capability.
    /// Empty by default.
    access(all) var tag: String

    /// The type of the controlled capability, i.e. the T in `Capability<T>`.
    access(all) let borrowType: Type

    /// The identifier of the controlled capability.
    /// All copies of a capability have the same ID.
    access(all) let capabilityID: UInt64

    /// The controlled capability
    access(all) let capability: Capability

    /// Delete this capability controller,
    /// and disable the controlled capability and its copies.
    ///
    /// The controller will be deleted from storage,
    /// but the controlled capability and its copies remain.
    ///
    /// Once this function returns, the controller is no longer usable,
    /// all further operations on the controller will panic.
    ///
    /// Borrowing from the controlled capability or its copies will return nil.
    ///
    access(all) fun delete()

    /// Returns the targeted storage path of the controlled capability.
    access(all) fun target(): StoragePath

    /// Retarget the controlled capability to the given storage path.
    /// The path may be different or the same as the current path.
    access(all) fun retarget(_ target: StoragePath)
}
```

The most important thing to note here is the `capabilityID`. Each capability now has an ID that you need to know to manage it.

## Old vs. New: Getting an Exsiting Storage ("Private") Capability

Here is the old way of getting a private capability:
```cadence
import HelloWorld from 0x01

transaction() {
    prepare(signer: AuthAccount) {
        let privateCap: Capability<&HelloWorld.Greeting> = signer.getCapability<&HelloWorld.Greeting>(/private/MyGreeting)
        // ... and you would then move it around as you please
    }
}
```

To get a private capability in the new way, it is a bit trickier. There is no such thing as a private path anymore, and your storage capabilities are not able to be fetched directly after they are created. You would either have to create a new one, or do some complicated looping like this:
```cadence
import HelloWorld from 0x01

transaction() {
    prepare(signer: auth(Capabilities) &Account) {
        let capId: UInt64? = nil
        let refSubtype = Type<auth(HelloWorld.ChangeGreeting) &HelloWorld.Greeting>()
        var caps = signer.capabilities.storage.forEachController(forPath: /storage/MyGreeting, fun(c: &StorageCapabilityController): Bool {
            if refSubtype.isSubtype(of: c.borrowType) {
                capId = c.capabilityID
                return false
            }
            return true   
        })

        assert(capId != nil, message: "There was no found capability with the necessary type.")

        let storageCap: Capability<auth(HelloWorld.ChangeGreeting) &HelloWorld.Greeting> = 
            signer.capabilities.storage.getController(byCapabilityID: capId!)!
            .capability as! Capability<auth(HelloWorld.ChangeGreeting) &HelloWorld.Greeting>
        // ... and you would then move it around as you please
    }
}
```

Instead, it is much easier to simply save your storage capability at a storage path when it is created, and fetch it back that way. Here is an example:
```cadence
import HelloWorld from 0x01

transaction(greeting: String) {
    prepare(signer: auth(Storage, Capabilities) &Account) {
        // save the resource
        signer.storage.save(<- HelloWorld.createGreeting(greeting: greeting), to: /storage/MyGreeting)
        // create a storage capability, previously known as a "private capability"
        let storageCap = signer.capabilities.storage.issue<auth(HelloWorld.ChangeGreeting) &HelloWorld.Greeting>(/storage/MyGreeting)
        signer.storage.save(storageCap, to: /storage/MyGreetingStorageCap)
    }
}
```

Now at a later point, we can easily access that storage capability like so:
```cadence
import HelloWorld from 0x01

transaction(greeting: String) {
    prepare(signer: auth(Storage, Capabilities) &Account) {
        let storageCap = 
            signer
            .storage
            .load<Capability<auth(HelloWorld.ChangeGreeting) &HelloWorld.Greeting>>(from: /storage/MyGreetingStorageCap)
            ?? panic("A capability does not exist here.")
        // do something with it
    }
}
```

## Old vs. New: Removing a Storage ("Private") Capability

Here is the old way of doing that:
```cadence
import HelloWorld from 0x01

transaction(greeting: String) {
    prepare(signer: AuthAccount) {
        signer.unlink(/private/MyGreeting)
    }
}
```

Here is the new way of doing that:
```cadence
import HelloWorld from 0x01

transaction(greeting: String, capabilityID: UInt64) {
    prepare(signer: auth(Capabilities) &Account) {
        let capController: &StorageCapabilityController = 
            signer.capabilities.storage.getController(byCapabilityID: capabilityID)
            ?? panic("This Cap Con does not exist.")
        capController.delete()
    }
}
```

In the new way, you must know the `capabilityID`. Unfortunately this means that you as the developer will have to keep track of which ID belongs to which people to know how which one to unlink. Remember, you can also view all the capability IDs using the code in the above section.

## Conclusion

There are other new features included in the new CapCon system, but I wanted this to outline the exact differences between the old Capabilities and new CapCon api. I hope this helped!

Also, if you'd like to view the official changes for Cap Cons by the Cadence team, go <a href="https://forum.flow.com/t/update-on-cadence-1-0/5197#capability-controller-api-replaced-existing-linking-based-capability-api-82">here</a>.

Till next time ~ Jacob Tucker