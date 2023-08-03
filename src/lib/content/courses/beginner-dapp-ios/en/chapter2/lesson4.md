---
title: Finishing the Skeleton
lesson: 4
language: en
excerpt: Finishing the Skeleton
---

# Chapter 2 Lesson 4 - Finishing the Skeleton

In this lesson, we will finalize the base skeleton of our Mobile DApp so that we can focus purely on the blockchain-related tasks in Chapter 3.

## Adding A Sign-In View

What is a mobile app without a sign-in view? Lets go ahead and create one:

1. Right click on the `EmeraldDApp` folder in Xcode, then click new file.
2. On The new file screen, ensure "SwiftUI" is selected then click `Next`.
3. Let's name the file `SignInView` and click `Create`.
4. Our project view is starting to look a little crowded, lets creates a `Group` to hold our views. Holding down the command key to left of the keyboard, select both the `ContentView` and `SignInView` before right clicking then selecting "New Group from Selection". We will name the group `Views`

<img src="https://i.imgur.com/I1UI3qR.gif" />

Replace the boilerplate code with the below:

```swift
import SwiftUI

struct SignInView: View {
    var body: some View {
        VStack {
            HStack {
                Text("Welcome to")
                    .font(.title)

                Text("Emerald DApp!")
                    .font(.title)
                    .foregroundStyle(Color.green)
            }
            .padding()

            Image("emerald_logo")
                .resizable()
                .aspectRatio(contentMode: .fit)
                .padding(.bottom, 100)

            Button {
                // TODO: Sign in logic
            } label: {
                Text("Sign In")
                    .font(.title2)
            }
                .frame(maxWidth: .infinity, maxHeight: 40)
                .background(Color.green)
                .cornerRadius(15)
                .buttonStyle(PlainButtonStyle())


        }
        .padding(.horizontal, 10)
    }
}

struct SignInView_Previews: PreviewProvider {
    static var previews: some View {
        SignInView()
    }
}
```

Assuming you completed all of the above steps, it should look like this:

<img src="https://i.imgur.com/n2gvsoV.png" />

## Keeping Our Code DRY

This looks great, but you may noticed we had to rewrite the exact same code for the button as we have in our `ContentView`... Ok so we replicated more code then just the button, but we will making further changes to our `ContentView` removing the other code in later in this lesson.

DRY coding stands for "Don't Repeat Yourself." It's a principle in software development that encourages developers to avoid duplicating code in a program. Instead of writing the same code multiple times, we strive to create reusable and modular components, functions, or classes. This helps make our code more efficient, easier to maintain, and reduces the risk of introducing bugs. By following DRY principals, we can save time and effort in the long run, leading to more reliable and maintainable software.

Using the same steps as we used for creating the `SignInView`, create a new SwiftUI file named `ButtonView` in side the Views directory. Replace the boilerplate code with the following:

```swift
import SwiftUI

struct ButtonView: View {
    var title: String
    var action: () -> Void

    var body: some View {
        Button {
            action()
        } label: {
            Text(title)
                .font(.title2)
        }
            .frame(maxWidth: .infinity, maxHeight: 40)
            .background(Color.green)
            .cornerRadius(15)
            .buttonStyle(PlainButtonStyle())
    }
}

struct ButtonView_Previews: PreviewProvider {
    static var previews: some View {
        ButtonView(title: "Button View", action: {})
    }
}
```

This SwiftUI code defines a custom ButtonView that takes a title string and an action closure. The view displays a button with the provided title, and when the button is tapped, the specified action is executed. The button has a green background, rounded corners, and a fixed height. The font size of the title text is set to .title2. The ButtonView also includes a preview provider to display a live preview, since we have two variable that have not been initilized we must provide values for them in the preview view.

Now lets update the Button in our `ContentView` and `SignInView` files, replace the `Button` views with the below.

`SignInView`:

```swift
ButtonView(title: "Sign In", action: {
	// TODO: Sign in logic
})
```

`ContentView`:

```swift
ButtonView(title: "Hello", action: {
	print(inputText)
})
```

## Creating A View Router

Now that our main views are setup, we need to create a view router to programmatically navigate between them. Create another new SwiftUI file in our Views directory called `RouterView`, and replace the boilerplate with the following code:

```swift
import SwiftUI

struct RouterView: View {
    @State var loggedIn: Bool = false

    var body: some View {
        ZStack {
            Group {
                if !loggedIn {
                    SignInView()
                } else {
                    ContentView()
                }
            }
            .padding(.horizontal, 10)
        }
    }
}

struct RouterView_Previews: PreviewProvider {
    static var previews: some View {
        RouterView()
    }
}
```

Let's review the code that is new to this example:

1. **ZStack {...}**: This creates a `ZStack` (z-index stack) container. In SwiftUI, a `ZStack` allows views to be stacked on top of each other, and the order of the views determines their visibility.
2. **Group {...}**: This creates a `Group` container. In SwiftUI, a `Group` is used to group views together. It is useful for conditionally showing different views based on conditions or appling the same modifiers to multiple views.
3. **if !loggedIn {...} else {...}**: This is a conditional statement that checks whether `loggedIn` is false, the "!" is a shorthand for "if false". If `loggedIn` is false, it displays the `SignInView()`; otherwise, it displays the `ContentView()`.

Here is what it looks like in Xcode:

<img src="https://i.imgur.com/mKHqOFQ.png" />

As you can see, while the above code works, there is now too much horizontal padding. Remember from our earlier lesson that modifiers are applied in hierarchical order, this also applies to modifiers used across views. To fix this we need to remove the horizontal padding from our VStacks in `SignInView` and `ContentView`. Once completed you can check to ensure everything looks good by changing the value of `loggedIn` from `false` to `true` and watching the preview update.

<img src="https://i.imgur.com/5hEPCo4.gif" />

### Linking It All Together

Great work! Now we have a view router that can switch between the `SignInView` and `ContentView` based on the `loggedIn` status in our DApp. But how do we update this variable from our other views?

One option is to use another property wrapper called `@Binding`. Just like the `$` we added to our TextField variable in a previous lesson, the `@Binding` property wrapper binds a variable accross views so either view can read or write to the contents of a variable. To see how this works lets add a new variable to our `SignInView`, add the following just above the `body`

```swift
@Binding var loggedIn: Bool
```

We also need to update our `ButtonView` action to update the variable.

```swift
ButtonView(title: "Sign In", action: {
	loggedIn = true
})
```

> Note: Passing a binding value to a struct in the preview content can be difficult. The easiest way to to avoid erros is to change the view listed in the preview to our `RouterView` like so:

```swift
struct SignInView_Previews: PreviewProvider {
    static var previews: some View {
        RouterView()
    }
}
```

We also need to update the `SignInView` initilization inside our `RouterView` so that it includes the loggedIn variable.

```swift
...
Group {
	if !loggedIn {
		SignInView(loggedIn: $loggedIn)
	} else {
		ContentView()
	}
}
...
```

> Fun Fact: We can actually test this directly within preview without needing to run the simulator. Go ahead and press the "Sign In" button in the preview and see what happens...

<img src="https://i.imgur.com/3xsqQme.gif" />

To rest the view, simply open another file then go back to our `SignInView` file as show above.

The last thing we need to do is update our `EmeraldDAppApp` file to load the `RouterView` directly:

```swift
struct EmeraldDAppApp: App {
    var body: some Scene {
        WindowGroup {
            RouterView()
        }
    }
}
```

## Making It Less Ugly

Our DApp Skeleton is really starting to come together!! The only problem is that it is kind of ugly! Lets start making it look nice by changing the colors and refactoring the `ContentView`

### Creating Custom Colors

Xcode makes it super simple for us to create custom colors that can be applied to views:

1. Open our `Assets` file in Xcode, then right click in the blank space below the `emerald_logo` file.
2. Select `New Color Set`, and name the color `defaultBackgroundColor`.
3. If necessary, press the button in the upper right corner of Xcode to show the attribute settings.
4. Click the `Apperances` dropdown and select `None`.
5. You may need to click on the white `Universal` image, then update the `Hex` value under Color to `#011E30`

<img src="https://i.imgur.com/CYPh7XV.gif" />

Now create two more custom colors:

1. `defaultAccentColor` with a Hex value of `#38E8C6`
2. `defaultTextColor` with a Hex value of `#1E3A8A`

While we can access these colors by passing the name as a parameter to the `Color` view, that is prone to errors and is franky a pain the a\*\*. The good news is we can add something called an `extension` to make our custom colors work the same way as the system colors.

Create a new SwiftUI file called `Colors` and replace the boilerplate with the following code:

```swift
import SwiftUI

extension Color {
    static let defaultBackgroundColor = Color("defualtBackgroundColor")
    static let defaultAccentColor = Color("defualtAccentColor")
    static let defaultTextColor = Color("defaultTextColor")
}
```

Now we can access our custom colors using "dot" notation `Color.defaultTextColor` and Xcode will prefill the values for us!!

### App Wide Background Color

Rather than adding a background color to each view, we can use our `ZStack` in the `RouterView` to apply the background to the entire app. Add the following code above the `Group` view:

```swift
...
ZStack {
	Color.defaultBackgroundColor
		.ignoresSafeArea()

	Group {
...
```

### Refactoring `ContentView`

Replace the code in `ContentView` with the following code:

```swift
import SwiftUI

struct ContentView: View {
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
            })

            Spacer()
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        RouterView()
    }
}
```

Lets go ahead and run things in the simulator now to ensure everything is working!

<img src="https://i.imgur.com/GQOPEkh.gif" />

Wow! things are startting to look much better!, there is still more work to be done but you will complete most of that in your Quests

## Conclusion

That is all we have for Chapter 2. In this Chapter, we learned about Swift and SwiftuI. These are the foundational elements we'll need to actually start learning about integrating Blockchain code into our DApps.

If you struggled with Chapter 2, I would recommend checking out introductory SwiftUI courses. They will help you understand all of this foundational stuff.

In Chapter 3, we will start exploring some blockchain code.

## Quests

1. Change the `printHello` function to be called `runTransaction`.
2. Change the "Hello" text inside the button to "Run Transaction".
3. Inside the `runTransaction` function, add some code to console log your `newGreeting` variable to the developer console.
4. Go back to your webpage, type something into the input box, and press "Run Transaction". Open your developer console and you will see some thing being printed!

To upload your quests, show us your `./pages/index.js` file and take a screenshot of your `newGreeting` being printed to the developer console.
