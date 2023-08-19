---
title: Passing in Arguments to a Script
lesson: 4
language: en
excerpt: Passing in Arguments to a Script
---

# Chapter 4 Lesson 4 - Passing in Arguments to a Script

In the last lesson, we learned how to execute a script with FCL. Today, we're going to learn how to pass arguments to the script.

## Important Note

1. None of today's material will involve changing our Emerald DApp. This is a standalone lesson to help you understand arguments.
2. **Take Notes** - All of what you learn today is **the exact same for transactions**. We will be using transactions tomorrow ;)

## Quick Overview of Yesterday

Yesterday, we made executed a script using FCL like this:

```swift
func getGreeting() async {
    do {
        let result = try await fcl.query(script: """
            import HelloWorld from 0xDeployer

            pub fun main(): String {
              return HelloWorld.greeting
            }
        """).decode(String.self)

        await MainActor.run {
            greetingDisplay = result
        }
    } catch {
        print(error)
    }
}
```

But when typing in `fcl.query` in might have noticed Xcode's code completion showing an `arg` parameter.

<img src="https://i.imgur.com/ybGdnlS.png" />

Why didn't we use that one? Well, our Cadence code didn't take any arguments. If you look at the Cadence code...

```cadence
pub fun main(): String
```

...you'll see it doesn't take any arguments. But what if we had a Cadence script like this?

```cadence
pub fun main(a: Int, b: Int): Int {
  // Example:
  // a = 2
  // b = 3
  // result = 5
  return a + b
}
```

Or something like this?

```cadence
pub fun main(greeting: String, person: String): String {
  // Example:
  // greeting = "Hello"
  // person = "Jacob"
  // result = "Hello, Jacob!"
  return greeting.concat(", ").concat(person).concat("!")
}
```

Now we need to pass in arguments.

## Passing in Arguments Using FCL

Here is an example of passing in arguments, and then we will explain...

```swift
let result2 = try await fcl.query(script: """
    pub fun main(a: Int, b: Int): Int {
      // Example:
      // a = 2
      // b = 3
      // result = 5
      return a + b
    }
""", args: [.int(2), .int(3)])
```

Now, there are a few things we should talk about to help you understand:

1. The args parameter accepts an array of Cadence values, so naturally, all args go inside the `[]`.
2. To create a new argument type a `.` then select the proper type from the code completion drop down.
3. Place the value of the argument inside the parathesis.

### Different Types

Let's look at another example using tons of different types:

```javascript
async function executeScript() {
	const response = await fcl.query({
		cadence: `
    pub fun main(
      a: Int, 
      b: String, 
      c: UFix64, 
      d: Address, 
      e: Bool,
      f: String?,
      g: [Int],
      h: {String: Address}
    ) {
      // Example:
      // a = 2
      // b = "Jacob is so cool"
      // c = 5.0
      // d = 0x6c0d53c676256e8c
      // e = true
      // f = nil
      // g = [1, 2, 3]
      // h = {"FLOAT": 0x2d4c3caffbeab845, "EmeraldID": 0x39e42c67cc851cfb}

      // something happens here... but it doesn't matter
    }
    `,
		args: (arg, t) => [
			arg('2', t.Int),
			arg('Jacob is so cool', t.String),
			arg('5.0', t.UFix64),
			arg('0x6c0d53c676256e8c', t.Address),
			arg(true, t.Bool),
			arg(null, t.Optional(t.String)),
			arg([1, 2, 3], t.Array(t.Int)),
			arg(
				[
					{ key: 'FLOAT', value: '0x2d4c3caffbeab845' },
					{ key: 'EmeraldID', value: '0x39e42c67cc851cfb' }
				],
				t.Dictionary({ key: t.String, value: t.Address })
			)
		]
	});
}
```

Hopefully, this helps you understand the different types of arguments you can pass in :)

## Conclusion

That's it! Not so bad, right?

## Quests

I only have one quest for you today, and it's almost exactly what we reviewed already :)

1. Write a function that executes a script with all the Cadence types that we reviewed today. Call the script when the page refreshes. Return something random from the Cadence script, and print it to prove to your script actually worked.
