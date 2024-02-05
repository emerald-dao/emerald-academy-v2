---
title: Basic Structs
lesson: 1
language: en
lessonVideoUrl: https://www.youtube.com/embed/LAUN7hqlL0w
lessonVideoDescription: Watch this video from 12:10-The End.
---

<script>
  import LessonVideo from '$lib/components/atoms/LessonVideo.svelte';   
</script>

# Chapter 2 Lesson 1 - Basic Structs

Hello peoples. Today is your lesson to learn Structs! The good news is structs are pretty simple to learn, so today won't be too long. Woooohoooo! Let's get into it.

<LessonVideo {lessonVideoUrl} {lessonVideoDescription}/>

## Structs

What are structs? Structs are containers of other types. Let's look at an example:

```cadence
pub struct ArtPiece {
    pub let id: Int
    pub let name: String
    pub let artLink: String
    pub let hoursWorkedOn: Int

    // `init()` gets called when this Struct is created...
    // You have to pass in 4 arguments when creating this Struct.
    init(id: Int, name: String, artLink: String, hoursWorkedOn: Int) {
        self.name = name
        self.artLink = artLink
        self.description = description
        self.hoursWorkedOn = hoursWorkedOn
    }
}
```

Okay, there's a lot going on there. What happened? Basically, we defined a new Type named `ArtPiece`. It is a Struct. As you can see, it contains 4 pieces of data:

1. an 'id' (`id`)
2. a name (`name`)
3. a link to the art (`artLink`)
4. the amount of hours it took to make (`hoursWorkedOn`)

It is really helpful to make a Struct when we want information to be gathered together in a container.

Notice that Structs have the `init()` function that gets called when the Struct gets created, much like the `init()` function that gets called when the contract is deployed.

## Real Example

Let's start off by actually deploying a new smart contract:

```cadence
pub contract Art {

    // this will act as an 'id' for
    // new art pieces
    pub var totalArtPieces: Int
    pub var artPieces: {Int: ArtPiece}

    pub struct ArtPiece {
        pub let id: Int
        pub let name: String
        pub let artLink: String
        pub let hoursWorkedOn: Int

        init(id: Int, name: String, artLink: String, hoursWorkedOn: Int) {
            self.id = id
            self.name = name
            self.artLink = artLink
            self.hoursWorkedOn = hoursWorkedOn
        }
    }

    pub fun uploadArt(name: String, artLink: String, hoursWorkedOn: Int) {
        let id: Int = Art.totalArtPieces
        let newArtPiece = ArtPiece(id: id, name: name, artLink: artLink, hoursWorkedOn: hoursWorkedOn)
        // store the new art piece, mapped to its `id`
        self.artPieces[id] = newArtPiece
        // increment the amount of art pieces by one
        Art.totalArtPieces = Art.totalArtPieces + 1
    }

    init() {
        self.totalArtPieces = 0
        self.artPieces = {}
    }
}
```

I threw a lot at you here. But you actually know all of it now! We can break it down:

1. We defined a new contract named `Art`
2. We defined a dictionary named `artPieces` that maps an 'id' to an `ArtPiece` struct with that 'id'
3. We defined a new Struct called `ArtPiece` that contains 4 fields
4. We defined a new function named `uploadArt` that takes in 4 arguments and creates & stores a new `ArtPiece` with them. It then creates a new mapping from `id` -> the `ArtPiece` associated with that 'id'

If you can understand these things, you've made significant progress. If you're struggling with this a bit, no worries! I would maybe review some of the concepts from the past few lessons.

### Upload Art

Now that we've defined a new Struct, let's see why it can be helpful.

Let's open a new transaction and copy and paste this boilerplate transaction code:

```cadence
import Art from 0x01

transaction() {

    prepare(signer: AuthAccount) {}

    execute {
        log("We're done.")
    }
}
```

Cool! Now, we want to add a new art piece to the `artPieces` dictionary in the `Art` contract. How can we do this? Well, let's call the `uploadArt` function with all the arguments we need like so: 

```cadence
Art.uploadArt(name: name, artLink: artLink, hoursWorkedOn: hoursWorkedOn)
```

But wait, we need to get these arguments from somewhere first! We can do that by passing them into the transaction as arguments, like so:

```cadence
import Art from 0x01

transaction(name: String, artLink: String, hoursWorkedOn: Int) {

    prepare(signer: AuthAccount) {}

    execute {
        Art.uploadArt(name: name, artLink: artLink, hoursWorkedOn: hoursWorkedOn)
        log("We're done.")
    }
}
```

Bam! Let's run this transaction with any account and pass in some example data like so:

<img src="/courses/beginner-cadence/txstuff.png" alt="drawing" size="400" />

### Read our Art Piece

To read our new Art Piece, let's open up a script and copy and paste the boilerplate script code:

```cadence
import Art from 0x01

pub fun main() {

}
```

Now, let's try to read our stored art piece. We can do this by passing in an `id` since we mapped `id` -> `ArtPiece` in our `artPieces` dictionary in the contract. We can then return the `ArtPiece` type we get from that dictionary, like so:

```cadence
import Art from 0x01

pub fun main(id: Int): Art.ArtPiece? {
    return Art.artPieces[id]
}
```

Note the return type here: `Art.ArtPiece?`. Types are always based on the contract they are defined in. And, it's an optional because we are accessing a dictionary.

Boom! That's it. Now, whoever called this script can have all the art information they need. Sweet, Structs are awesome!

## Conclusion

In today's lesson, we learned how to make our own type by creating a struct. Structs are really useful for gathering data into one object.

That's all! See you tomorrow folks ;)