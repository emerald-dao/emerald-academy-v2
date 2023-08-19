---
title: Finishing the Skeleton
lesson: 5
language: en
excerpt: Finishing the Skeleton
---

# Chapter 4 Lesson 5 - Sending a Transaction

Hi! Today, we will learn how to send a transaction using FCL so we can change our greeting in our DApp.

## Quick Overview of Transactions

If you remember back from Chapter 1, a transaction will allow us to _change_ information inside our smart contracts. In addition, transactions cost **gas** and require someone to **sign** the transaction and send it to the blockchain.

We will utilize a transaction to change our `greeting` variable inside our smart contract, which we deployed in Chapter 4 Lesson 3.

## Overview of What We Have So Far

Before we add the final pieces of functionality to our DApp, let's take a look at what we have accomplished so far:

<img src="https://i.imgur.com/9UimLMll.gif" />

This is our application. It:

1. [x] Lets us sign in with our wallet
2. [x] Automatically gets the greeting from the contract every time the app loads and displays it in a `TextField`.
3. [ ] Allows us to click a "Change Greeting" button that should run a transaction, using the input we type into the box as the `newGreeting`

We must complete step 3 in order to complete our DApp.

Here is _something similar_ to what your `ContentView` file should be right now, after completing the quests from the previous few lessons:

```swift
import SwiftUI
import FCL

struct ContentView: View {
    @Binding var loggedIn: Bool
    @State var greetingDisplay = ""
    @State var inputText = ""

    var body: some View {
        VStack {
            HStack(spacing: 6) {
                Image("emerald_logo")
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .frame(width: 40)
                Text("Emerald DApp")
                    .font(.title)
                    .foregroundStyle(Color.defaultAccentColor)
            }

            Text(greetingDisplay)
                .font(.title)
                .frame(maxWidth: .infinity, maxHeight: 200)
                .foregroundStyle(Color.white)
                .background(Color.secondaryAccentColor)
                .cornerRadius(15)
                .overlay(
                    RoundedRectangle(cornerRadius: 15)
                        .stroke(Color.defaultAccentColor, lineWidth: 3)
                )
                .padding(.bottom, 20)
                .task {
                    await getGreeting()
                }

            TextField("Change Greeting", text: $inputText)
                .foregroundStyle(Color.white)
                .frame(maxWidth: .infinity, maxHeight: 50)
                .background(Color.secondaryAccentColor)
                .cornerRadius(15)
                .padding(3)
                .overlay(
                    RoundedRectangle(cornerRadius: 15)
                        .stroke(Color.defaultAccentColor, lineWidth: 3)
                )
                .padding(.bottom, 4)

            ButtonView(title: "Change Greeting", action: {
                print(inputText)
                inputText = ""
            })

            Spacer()

            ButtonView(title: "Sign Out: \(fcl.currentUser?.address.hex ?? "")") {
                Task {
                    try? await fcl.unauthenticate()
                }
            }
        }
    }

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
}
```

## Sending Transactions Using FCL

> Lets implement a `changeGreeting` function that sends a transaction to change our greeting using FCL.

Here is a snippet of a transaction:

```swift
func changeGreeting() async {
	do {
		let txId = try await fcl.mutate(
			cadence: "",
			args: []
		)
	} catch {
		print(error)
	}
}
```

As you can see is this _almost_ the same thing as executing a script, except that we are using `fcl.muate()` instead of `fcl.query()`.

> `fcl.mutate()` takes several more optional parameters, we won't be using any of them in this course, but I've included an general overview of them below.

1. `gasLimit`: the gas limit of the transaction. This has a default value of 1000.
2. `proposer`: this is the _proposer_ of a transaction (the person sending it to the blockchain).
3. `authorizors`: this is a list of _authorizors_ of the transaction. Essentially, these are people that are saying "I am signing this transaction" and thus grant the transaction access to their account (for example, sending an NFT, paying someone, etc). If you go through our [Beginner Cadence Course](https://academy.ecdao.org/en/catalog/courses/beginner-cadence), you will learn much more about what this means.
4. `payers`: this is a list of _payers_ for the transaction. Like we mentioned, transactions cost gas. Although transactions on Flow cost basically nothing (in fact they're free since wallets usually cover the cost), you still need to provide someone to pay.

Parameters 2-4 all default to the current user.

> Quick side note: transactions on Flow are very unique in that they have 3 roles: a payer, proposer, and authorizor. If you want to learn more about it, go here: https://docs.onflow.org/concepts/transaction-signing/#signer-roles

> Let's finsih up our DApp to see how this works in practice.

```swift
func changeGreeting() async {
	do {
		let txId = try await fcl.mutate(
			cadence: """
				import HelloWorld from 0xDeployer

				transaction(myNewGreeting: String) {

					prepare(signer: AuthAccount) {}

					execute {
					HelloWorld.changeGreeting(newGreeting: myNewGreeting)
					}
				}
			""",
			args: [
				.string(inputText)
			]
		)

		print(txId.hex)
	} catch {
		print(error)
	}
}
```

Okay, so what did we just do?

1. We filled in our Cadence script.
2. We added an argument because our transaction takes in 1 argument: `myNewGreeting: String`. We learned how to pass in arguments in the last lesson. The value we pass in is our `inputText` variable.

> Run your DApp in the simulator and try clicking the "Change Greeting" button now after typing something into the `TextField`. You should be able to run a transaction!

<img src="https://i.imgur.com/A5jsLokl.png" />

If you wait for a couple minutes and sign out then back in, you will hopefully see your updated greeting displaying on the screen ;)

Let's learn a little more about what's actually happening and how we can make this smoother...

## What is the `transactionId`?

You may be wondering what the `transactionId` is that is being returned from your function. Well, that's a unique hash you can use to search for your transaction.

After you click "Approve" on the Blocto transaction below...

<img src="https://i.imgur.com/A5jsLokl.png" />

...a bunch of letters and numbers should appear in the console. This is because we `print` the `txId` in our `changeGreeting` function.

<img src="https://i.imgur.com/fdHvOAC.png" />

A txId or "transaction id" can help you find information about your transaction. More specifically, you can do this on Flowscan!

> Copy + paste that transactionId, go to https://testnet.flowscan.org/, and paste it into the search bar. You should be able to discover your transaction!

<img src="https://i.imgur.com/IHZBBGV.png" />

## Updating the Displayed Greeting After Transaction

Now that we are changing the greeting, we want to make sure our frontend reflects this change.

> Inside of `changeGreeting`, after the `print`, add these lines:

```swift
_ = try await txId.onceSealed()

await getGreeting()
```

What this will do is take the `txId` we got from our transaction, then wait for the transaction to be completed or "sealed" before calling the `getGreeting()` function.

## Conclusion

CONGRADULATIONS! You have officially made a Mobile DApp that sends transactions and scripts! While this is a simple Hello World example we covered many concepts across two different programming languagues, honestly geat job!!.

This also concludes the course! If you want to check out other courses, please see our main webpage: [https://academy.ecdao.org/](https://academy.ecdao.org/)

## Quests

1. Clear the `TextField` once the transaction has been submitted.
2. Add two more `txId.once...` statements to our changeGreeting function, updating the `greetingDisplay` varable to show the end user when the transaction is "pending", "executed", and "sealed".

Sumbmit a link to your Github repo with your completed Emerald DApp iOS App!!
