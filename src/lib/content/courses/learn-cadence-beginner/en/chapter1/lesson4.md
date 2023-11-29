---
title: Basic Structs
lesson: 4
language: en
lessonVideoUrl: https://www.youtube.com/embed/LAUN7hqlL0w
lessonVideoDescription: Watch this video from 12:10-The End.
---

<script>
  import LessonVideo from '$lib/components/atoms/LessonVideo.svelte';   
</script>

# Chapter 2 Lesson 4 - Basic Structs

Hello peoples. Today is your lesson to learn Structs! The good news is structs are pretty simple to learn, so today won't be too long. Woooohoooo! Let's get into it.

<LessonVideo {lessonVideoUrl} {lessonVideoDescription}/>

## Structs

What are structs? Structs are containers of other types. Let's look at an example:

```cadence
pub struct Profile {
    pub let firstName: String
    pub let lastName: String
    pub let birthday: String
    pub let address: Address

    // `init()` gets called when this Struct is created...
    // You have to pass in 4 arguments when creating this Struct.
    init(firstName: String, lastName: String, birthday: String, address: Address) {
        self.firstName = firstName
        self.lastName = lastName
        self.birthday = birthday
        self.address = address
    }
}
```

Okay, there's a lot going on there. What happened? Basically, we defined a new Type named `Profile`. It is a Struct. As you can see, it contains 4 pieces of data:

1. a first name (`firstName`)
2. a last name (`lastName`)
3. a birthday (`birthday`)
4. an account address (`account`)

It is really helpful to make a Struct when we want information to be gathered together in a container.

Notice that Structs have the `init()` function that gets called when the Struct gets created, much like the `init()` function that gets called when the contract is deployed.

## Real Example

Let's start off by deploying a new smart contract:

```cadence
pub contract Authentication {

    pub var profiles: {Address: Profile}

    pub struct Profile {
        pub let firstName: String
        pub let lastName: String
        pub let birthday: String
        pub let address: Address

        // You have to pass in 4 arguments when creating this Struct.
        init(firstName: String, lastName: String, birthday: String, address: Address) {
            self.firstName = firstName
            self.lastName = lastName
            self.birthday = birthday
            self.address = address
        }
    }

    pub fun addProfile(firstName: String, lastName: String, birthday: String, address: Address) {
        let newProfile = Profile(firstName: firstName, lastName: lastName, birthday: birthday, address: address)
        self.profiles[address] = newProfile
    }

    init() {
        self.profiles = {}
    }

}
```

I threw a lot at you here. But you actually know all of it now! We can break it down:

1. We defined a new contract named `Authentication`
2. We defined a dictionary named `profiles` that maps an `Address` type to a `Profile` type
3. We defined a new Struct called `Profile` that contains 4 fields
4. We defined a new function named `addProfile` that takes in 4 arguments and creates a new `Profile` with them. It then creates a new mapping from `account` -> the `Profile` associated with that account

If you can understand these things, you've made significant progress. If you're struggling with this a bit, no worries! I would maybe review some of the concepts from the past few lessons.

### Add a new Profile

Now that we've defined a new Struct, let's see why it can be helpful.

Let's open a new transaction and copy and paste this boilerplate transaction code:

```cadence
import Authentication from 0x01

transaction() {

    prepare(signer: AuthAccount) {}

    execute {
        log("We're done.")
    }
}
```

Cool! Now, we want to add a new profile to the `profiles` dictionary in the `Authentication` contract. How can we do this? Well, let's call the `addProfile` function with all the arguments we need like so: 

```cadence
Authentication.addProfile(firstName: firstName, lastName: lastName, birthday: birthday, address: address)
```

But wait, we need to get these arguments from somewhere first! We can do that by passing them into the transaction as arguments, like so:

```cadence
import Authentication from 0x01

transaction(firstName: String, lastName: String, birthday: String, address: Address) {

    prepare(signer: AuthAccount) {}

    execute {
        Authentication.addProfile(firstName: firstName, lastName: lastName, birthday: birthday, address: address)
        log("We're done.")
    }
}
```

Bam! Let's run this transaction with any account and pass in some example data like so:

<img src="/courses/beginner-cadence/txstuff.png" alt="drawing" size="400" />

### Read our Profile

To read our new Profile, let's open up a script and copy and paste the boilerplate script code:

```cadence
import Authentication from 0x01

pub fun main() {

}
```

Now, let's try to read our profile. We can do this by passing in an `Address` that represents an account, since we mapped accounts -> profiles in our `profiles` dictionary in the contract. We can then return the `Profile` type we get from that dictionary, like so:

```cadence
import Authentication from 0x01

pub fun main(account: Address): Authentication.Profile? {
    return Authentication.profiles[account]
}
```

Note the return type here: `Authentication.Profile?`. Types are always based on the contract they are defined in. And, it's an optional because we are accessing a dictionary.

Boom! That's it. Now, whoever called this script can have all the profile information they need. Sweet, Structs are awesome!

## Quests

1. Deploy a new contract that has a Struct of your choosing inside of it (must be different than `Profile`).

2. Create a dictionary or array that contains the Struct you defined.

3. Create a function to add to that array/dictionary.

4. Add a transaction to call that function in step 3.

5. Add a script to read the Struct you defined.

That's all! See you tomorrow folks ;)