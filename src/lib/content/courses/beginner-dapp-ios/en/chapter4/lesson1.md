---
title: Connecting the Blockchain
lesson: 1
language: en
excerpt: Connecting the Blockchain
---

# Chapter 4 Lesson 1 - Connecting the Blockchain

Welcome, back! Today, we are going to finally connect blockchain stuff directly into our Mobile DApp!!

## Installing The FCL-Swift Package

FCL, or the Flow Client Library, is something that will allow us to interact with the Flow blockchain in our DApp. It will let us send transactions, execute scripts, and tons of other stuff directly from our Swift code.

> Open your EmeraldDApp project in Xcode, and follow the below steps to add the FCL-Swift Package as a dependency:

1. Click `File`, then select `Add Package Dependencies`.
2. Paste the URL `https://github.com/outblock/fcl-swift.git` into the search bar.
3. `fcl-swift` will show up, ensure the `Dependency Rule` is set to `Up to Next Major Version` then click `Add Package`.
   1. Sometimes you need to select the dropdown `Add to Project` and select your project name to enable the `Add Package` button.
4. Allow the confirmation window to fetch and verify the package, the select `Add Package` once completed.

<img src="https://i.imgur.com/Tgi2oSJ.gif" />

## Importing & Configuring FCL

To take full advantage of Swift and SwiftUI's features, we will be creating a "Service" so we can interact with the Flow blockchain. We won't be going deep into the philosophy of using services or the design model we are using, but the important thing to know is that by using an `ObservableObject`` class and SwiftUI's Property Wrappers we can implement a service for our DApp that can programmatically update our SwiftUI views.

Start by creating a new group in your EmeraldDApp directory named `Flow`, inside that folder/group create a Swift file named `FlowManager`

Add the following code:

```swift
import FCL
import Flow
import Foundation

let flowManager = FlowManager.shared

class FlowManager: NSObject, ObservableObject {
    static let shared = FlowManager()

    let testAccount = "YOUR TEST ACCOUNT"

    func setup() {
        let defaultProvider: FCL.Provider = .blocto
        let defaultNetwork: Flow.ChainID = .testnet
        let accountProof = FCL.Metadata.AccountProofConfig(appIdentifier: "EmeraldDAppV1")
        let metadata = FCL.Metadata(appName: "Emerald DApp!",
                                    appDescription: "Hello Word Demo App for Emerald Academy",
                                    appIcon: URL(string: "https://academy.ecdao.org/ea-logo.png")!,
                                    location: URL(string: "https://academy.ecdao.org/")!,
                                    accountProof: accountProof)
        fcl.config(metadata: metadata,
                   env: defaultNetwork,
                   provider: defaultProvider)

        fcl.config
            .put("0xDeployer", value: testAccount)
    }
}
```

This Swift code sets up a FlowManager class that is responsible for managing connections to the Flow blockchain and configuring our DApp.

Let's break down the code step by step:

1. Importing Required Libraries: The code imports the necessary libraries for the DApp. These include `FCL` (Flow Client Library) for interacting with the Flow blockchain, `Flow` for handling Flow blockchain-specific data, and `Foundation` for basic Swift functionality.
2. `FlowManager` Class Definition: The `FlowManager` class is defined as a singleton `ObservableObject`. Singleton design pattern ensures that there is only one instance of this class throughout the application.
3. Shared Instance: The shared static constant of the `FlowManager` class ensures that there is a single shared instance of `FlowManager` available throughout the application. This conforms to the singleton pattern.
4. `testAccount` Property: The `testAccount` property stores a string representing a test account associated with the DApp. This account will be used for testing purposes on the Flow blockchain.
5. `setup()` function: `setup()` is responsible for configuring the FCL library with specific settings and metadata related to the application. The method performs the following tasks:
   1. Setting default FCL Provider and Network:
      1. `defaultProvider`: Specifies the default provider to be used by FCL, which is set to .blocto in this case.
      2. `defaultNetwork`: Specifies the default Flow blockchain network to be used by FCL, which is set to .testnet.
   2. Setting Application Metadata:
      1. `accountProof`: This variable is created to specify the account proof configuration for the application. It includes an `appIdentifier`, which is set to "EmeraldDAppV1".
      2. `metadata`: This variable contains the metadata for the application, including its name, description, icon URL, and location URL. The values are set as follows:
         1. `appName`: "Emerald DApp!"
         2. `appDescription`: "Hello Word Demo App for Emerald Academy"
         3. `appIcon`: URL of the application's icon.
         4. `location`: URL of the application's location.
   3. Configuring FCL: The `fcl.config()` method is called with the provided metadata, default network, and provider to configure the FCL library for use with the application.
   4. Storing the Test Account: The line `fcl.config.put("0xDeployer", value: testAccount)` stores the test account associated with the application. Configuration keys that start with 0x will be replaced in FCL scripts and transactions, this allows you to write your script or transaction Cadence code once and not have to change it when you point your application at a different instance of the Flow Blockchain.

In summary, this Swift code creates a singleton class FlowManager that configures the FCL library for a blockchain-based application, sets metadata for the application, and stores a test account associated with the application.

## Signing In & Out

Now that we have connected our DApp to the blockchain, let's try signing in!

First, we need to import the FCL library again

```swift
import SwiftUI
import FCL
```

Go to our `SignInView` and remove the login variable

```swift
@Binding var loggedIn: Bool
```

Isn't getting to delete code you no longer need one of the best feelings as a developer?!

Now update your `ButtonView` to open the FCL Discovery wallet selector.

```swift
ButtonView(title: "Sign In", action: {
	fcl.openDiscovery()
})
```

Your `SignInView` file should look like this

```swift
import SwiftUI
import FCL

struct SignInView: View {
    var body: some View {
        VStack {
            HStack {
                Text("Welcome to")
                    .font(.title)
                    .foregroundStyle(Color.white)

                Text("Emerald DApp!")
                    .font(.title)
                    .foregroundStyle(Color.defaultAccentColor)
            }
            .padding()

            Image("emerald_logo")
                .resizable()
                .aspectRatio(contentMode: .fit)
                .padding(.bottom, 100)

            ButtonView(title: "Sign In", action: {
                fcl.openDiscovery()
            })
        }
    }
}

struct SignInView_Previews: PreviewProvider {
    static var previews: some View {
        SignInView()
    }
}
```

Next, let's update our `RouterView` so that we can automatically detect whether the user is authenticated or not.

Import `FCL` and add the following modifier to the `ZStack`

```swift
.onReceive(fcl.$currentUser) { user in
	self.loggedIn = (user != nil)
}
```

This observes changes to the `currentUser` property of the FCL library and updates the `loggedIn` property for us based on whether the `currentUser` is nil or not. If `currentUser` is not nil, it means the user is logged in, and `loggedIn` will be set to true. If `currentUser` is nil, it means the user is not logged in, and `loggedIn` will be set to false.

The last thing we need to do is update our `ContentView` so the Sign Out `ButtonView` signs us out. Once again you need to import `FCL` and then replace our sign-out `ButtonView` with the following changes.

```swift
ButtonView(title: "Sign Out: \(fcl.currentUser?.address.hex ?? "")") {
    Task {
        try? await fcl.unauthenticate()
    }
}
```

If your thinking that this looks quite a bit different, don't worry... this is a great example of why Swift is one of my favorite programming languages!! This function includes string interpolation, optional chaining, a default value, uses closure syntax, runs async code outside the main thread, and describes how to handle an error... all using short, human-readable, and (mostly) self-explanatory code.

Here's a breakdown:

1. First, we have added something called a "string interpolation" to our title parameter, string interpolation is just a fancy way to say we mixed a statically defined string with a variables value. This is done by including `\(someVariable)` inside a string definition, as you can see in our `ButtonView` we are including the value of the `currentUser`'s `address.hex`.
2. However, `fcl.currentUser` is an "optional" meaning that it could contain a value or `nil` aka an empty value. This is how we were able to check if the user is logged in or not in our `RouterView` changes above. In this case, we add the `?` after `currentUser` to introduce "optional chaining" which just tells the program, if `currentUser` is not `nil`, return the value of `currentUser.address.hex`. However, it's important to note that string interpolation produces a debug description for an optional value, not the value itself. To get the actual value we must "unwrap" the optional.
3. The easiest and safest way to unwrap any optional is to provide a default value to be used when the optional is nil. This is done above by including `?? ""` after `fcl.currentUser?.address.hex`, this simply means if the optional is `nil`, return an empty string.
4. You also may have noticed our `action` parameter is no longer there. Swift has an awesome way to write concise code called "trailing closures", especially when passing closures as arguments to functions. Instead of enclosing the closure in parentheses, you can place it outside using curly braces, making the code easier to read.
5. Inside our action closure, we need to run `fcl.unauthenticate()` however, it is an "asynchronous" function that can "throw" an error. Because of this, we need to handle it differently:
   1. Asynchronous or "async" functions are pieces of code that run in the background, then when completed return the results. Since everything in a SwiftUI view runs on the "main thread" we first create a `Task` that runs the given asynchronous operation in the background.
   2. `fcl.unauthenticate()` throws an error if it was unable to log out the user for any reason. In Swift, you can use `try?` to gracefully handle errors from functions that can potentially throw an error, allowing the function to return an optional value instead of propagating the error directly. We will go deeper into error handling in a future lesson.
   3. Lastly, since the function is asynchronous we must tell Swift to "wait" for the operation to complete. This is done by specifying `await` before the function is called.

Let's test these changes out on the simulator!

> Note that at this point you will need to use Blocto Wallet, we need to configure something called "Wallet Connect" before we can use Lilico Wallet which we will setup in the next lesson.

<img src="https://i.imgur.com/v1PUfvY.gif" />

## Conclusion

Congratulations on completing this important step in our journey! You have successfully learned the process of logging in to our application.

## Quests

Feel free to answer in a language you're most comfortable in.

1. How did we get the address of the user? Please explain in words and then in code.
2. Why did we make a `FlowManager` file? What does it do?
3. What does our `onReceive` do?
4. How do we import `FCL`?
5. What does `fcl.currentUser?.address.hex ?? ""` do, and why does this line need `?? ""` in it?
6. Update the rest of your `ButtonView`s to use trailing closure syntax.
