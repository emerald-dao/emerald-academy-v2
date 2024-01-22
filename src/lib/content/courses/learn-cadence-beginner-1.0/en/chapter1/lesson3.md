---
title: Types
lesson: 3
language: en
---

# Chapter 1 Lesson 3 - Types

Whatsup! Today, we will be learning some of the most important types that you will use in nearly every contract you write.

## Types

To start playing around with types, let's create a new file called `test.cdc`. We're not going to write any smart contracts today :)

In Cadence, the code you write can often infer what type something is. For example, if you write:

```cadence
var jacob = "isCool"
```

Cadence will automatically realize you have initialized a String. However, if we want to be more explicit about our types, we can include the type in the declaration, like so:

```cadence
var jacob: String = "isCool"
```

It's often helpful to include the type of something so we can reason about where we went wrong in our programs. Cadence will also tell you straight up that you've made a mistake if you intended a variable to be of different type. For example, try typing:

```cadence
var jacob: String = 3
```

Cadence will say "Hey! These types don't match." Or something like that. But the point is we can include types to help us understand where we went wrong.

## Common Types

```cadence
var number: Int = 2
var address: Address = 0x01
var text: String = "Hey!"
```

## Arrays

An array is a list of elements. Let's look at a very basic array in Cadence:

```cadence
var people: [String] = ["Jacob", "Alice", "Damian"]
```

This is a list of Strings. We declare an array type like so: `[Type]`. Let's do another example. If we wanted a list of addresses, well, it's very similar:

```cadence
var addresses: [Address] = [0x1, 0x2, 0x3]
```

We can also index into arrays to see what the elements are. This is exactly like Javascript or similar languages.

```cadence
var addresses: [Address] = [0x1, 0x2, 0x3]
log(addresses[0]) // 0x1
log(addresses[1]) // 0x2
log(addresses[2]) // 0x3
```

### Helpful Array Functions that I Use All the Time

The things we looked at above are all fixed arrays. We can also do some cool things with arrays, and I'll list some of them here.

**append(\_ element: Type)**

(note the argument label `element` has a `_ ` in front of it, which means it is implicit, so you don't have to put the argument label when you call the function. So instead of `.append(element: value)`, you can just do `.append(value)`)

Adds an element to the end of the array.

ex.

```cadence
var people: [String] = ["Jacob", "Alice", "Damian"]
people.append("Ochako Unaraka") // anyone watch My Hero Academia? :D
log(people) // ["Jacob", "Alice", "Damian", "Ochako Unaraka"]
```

**contains(_ element_: Type): Bool**

Checks to see if an array contains an element.

ex.

```cadence
var people: [String] = ["Jacob", "Alice", "Damian"]
log(people.contains("Jacob")) // true
log(people.contains("Poop")) // false
```

**remove(at: Int)**

Removes an element at the given index (index starts from 0, meaning the first element has index 0)

ex.

```cadence
var people: [String] = ["Jacob", "Alice", "Damian"]
people.remove(at: 1)
log(people) // ["Jacob", "Damian"]
```

**length**

Returns the length of the array.

ex.

```cadence
var people: [String] = ["Jacob", "Alice", "Damian"]
log(people.length) // 3
```

## Dictionaries

Nice! That's arrays for ya. Time for dictionaries. Well, what is this thing?! A dictionary is something that maps a `key` to a `value`. Let's look at a simple example below.

```cadence
var names: {String: String} = {"Jacob": "Tucker", "Bob": "Vance", "Ochako": "Unaraka"} // anyone watch The Office?
```

In the above example, we mapped `String`s to `String`s. More specifically, we mapped someone's first name to their last name. We did this with the dictionary type, which is `{Type: Type}`. We can use this dictionary to get peoples' last names like so:

```cadence
var names: {String: String} = {"Jacob": "Tucker", "Bob": "Vance", "Ochako": "Unaraka"}
log(names["Jacob"]) // "Tucker"
log(names["Bob"]) // "Vance"
log(names["Ochako"]) // "Unaraka"
```

Let's look at an example of mapping `String`s to `Int`s. We'll map someone's name to their favourite number.

```cadence
var favouriteNums: {String: Int} = {"Jacob": 13, "Bob": 0, "Ochako": 1000100103}
log(favouriteNums["Jacob"]) // 13
```

This is cool. But there's more. We will get into why dictionaries are more complicated in the Dictionaries and Optionals section at the bottom. For now, let's look at some helpful functions.

### Helpful Dictionary Functions that I Use All the Time

**insert(key: Type, \_ value: Type)**

(note the `value` argument label is implicit, but the `key` is not)

ex.

```cadence
var favouriteNums: {String: Int} = {"Jacob": 13, "Bob": 0, "Ochako": 1000100103}
favouriteNums.insert(key: "Justin Bieber", 1)
log(favouriteNums) // {"Jacob": 13, "Bob": 0, "Ochako": 1000100103, "Justin Bieber": 1}
```

**remove(key: Type): Type?**

Removes the `key` and the value associated with it, and returns that value.

ex.

```cadence
var favouriteNums: {String: Int} = {"Jacob": 13, "Bob": 0, "Ochako": 1000100103}
let removedNumber = favouriteNums.remove(key: "Jacob")
log(favouriteNums) // {"Bob": 0, "Ochako": 1000100103}
log(removedNumber) // 13
```

**keys: [Type]**

Returns an array of all the keys in the dictionary.

ex.

```cadence
var favouriteNums: {String: Int} = {"Jacob": 13, "Bob": 0, "Ochako": 1000100103}
log(favouriteNums.keys) // ["Jacob", "Bob", "Ochako"]
```

**values: [Type]**

Returns an array of all the values in the dictionary.

ex.

```cadence
var favouriteNums: {String: Int} = {"Jacob": 13, "Bob": 0, "Ochako": 1000100103}
log(favouriteNums.values) // [13, 0, 1000100103]
```

## Optionals

Okay, so now we're on optionals. Crap. Optionals are SO important, but can be tricky. You will probably encounter optionals in everything you do in Cadence. Most of the time, it will be because of dictionaries.

An `optional type` in Cadence is represented with a `?`. It means: "It is either the type it's saying, or `nil`". Let's take a look:

```cadence
var name: String? = "Jacob"
```

Notice the `?` after the `String`. That means: "the variable `name` is either a `String`, or it is `nil`." Obviously, we know it's a `String` because it's equal to "Jacob". But we can also have something like this:

```cadence
var name: String? = nil
```

This won't have any compile errors, because it's correct. A `String?` type can be `nil`.

Not too bad right? Man, I'm the best teacher ever. You're all so lucky to have me here.

### Force-Unwrap Operator

This gets us into the force-unwrap operator, `!`. This operator "unwraps" an optional type by saying: "If this thing is nil, PANIC! If it's not nil, we're fine, but get rid of the optional type." Well what the heck does THIS mean!? Let's look:

```cadence
var name1: String? = "Jacob"
var unwrappedName1: String = name1! // Notice it removes the optional type

var name2: String? = nil
var unwrappedName2: String = name2! // PANICS! The entire program will abort because it found a problem. It tried to unwrap a nil, which isn't allowed
```

## Optionals and Dictionaries

Alright so this is where we will combine everything we know to talk about Optionals and Dictionaries. Before, when I explained dictionaries, I left out a key (no pun intended) piece of information: When you access elements of a dictionary, it returns the value as an **optional**.

Let's make a new script that looks like this:

```cadence
access(all) fun main(): Int {
    let thing: {String: Int} = {"Hi": 1, "Bonjour": 2, "Hola": 3}
    return thing["Bonjour"] // ERROR: "Mismatched types. expected `Int`, got `Int?`"
}
```

This will give us an ERROR! The error says: "Mismatched types. expected `Int`, got `Int?`". Well, we know what `Int?` means now! It means it is an optional, so it may be `Int` or it may be `nil`. In order to fix this error, we have to use the force-unwrap operator `!` like so:

```cadence
access(all) fun main(): Int {
    let thing: {String: Int} = {"Hi": 1, "Bonjour": 2, "Hola": 3}
    return thing["Bonjour"]! // we added the force-unwrap operator
}
```

Now, there are no errors :D

### Returning Optionals vs. Unwrapping

You may be asking, "is there ever a case where I want to return an optional instead of force-unwrapping the optional? The answer is yes. In fact, most times, it is preferred to return an optional instead of unwrapping. For example, looking at this code:

```cadence
access(all) fun main(): Int {
    let thing: {String: Int} = {"Hi": 1, "Bonjour": 2, "Hola": 3}
    return thing["Bonjour"]! // we are force-unwrapping the optional
}
```

... this will `panic` and abort the program if there is no value at the "Bonjour" key. Instead, we can write the code like this:

```cadence
access(all) fun main(): Int? { // notice the return value is an optional type
    let thing: {String: Int} = {"Hi": 1, "Bonjour": 2, "Hola": 3}
    return thing["Bonjour"] // we leave the optional
}
```

This way, the client/caller can handle the case where the return value is `nil`, instead of having to worry about errors in the program. This same logic applies for other functions in your Cadence code as well.

## Conclusion

In today's lesson, we learned the basic types in Cadence. We will be using all of these throughout the next 2 chapters, so you will get quite familiar with them. Great work!