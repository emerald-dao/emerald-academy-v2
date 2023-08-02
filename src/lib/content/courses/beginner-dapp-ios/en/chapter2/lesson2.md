---
title: Learning Frontend Code
lesson: 2
language: en
excerpt: Learning Frontend Code
---

# Chapter 2 Lesson 2 - Learning SwiftUI

> If you have already worked with SwiftUI before, you may find this a bit boring. But it'll be really quick for you.

Hello there! In this lesson, we will be giving you an introduction to SwiftUI, Apple's declarative user interface framework for building iOS, macOS, watchOS, and tvOS applications. This will help you understand the frontend code in our DApp.

## What Is SwiftUI?

SwiftUI is a user interface toolkit provided by Apple for building user interfaces across their platforms. It's a declarative way of describing the user interface and its behavior. SwiftUI is based on Swift, the programming language developed by Apple.

Views in SwiftUI define what is being displayed on your screen. In our example from the previous lesson...

<img src="https://i.imgur.com/KflRwZS.png" />

The "Hello World" text, and the "globe" image, along with their postion, layout, and size on the screen are all thanks to SwiftUI.

Let's start defining our DApps view, and then explain what all of it is actually doing.

## Remove Boilerplate Code

Let's remove some boilerplate code (code that is there at the start that just takes up space). We will explain what everything is afterwards.

> Open up your `ContentView` file in Xcode and replace everything in the file with this code:

```swift
import SwiftUI

struct ContentView: View {
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
                .frame(width: 200, height: 200)
                .padding()

            Spacer()
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

```

> Before we dive into the code, notice that in the preview window on the right, no image is displayed. This is because the Image view is looking for an image named `emerald_logo` in the `Assets` folder, lets add that now.

1. Click the link to download the image: <a href="https://cdn.discordapp.com/attachments/1122027331570110504/1122027809632686150/ea-logo.png" download="emerald_logo.png">Download Image</a> - Hint: You might need to right click on the image and select "Save Imae As" depending on the browser you are using.
2. Once Downloaded selected the `Assets` folder in Xcode to simply drag and drop the downloaded image into your project.
   <img src="https://i.imgur.com/alDU945.gif" />

If we go back to our `ContentView` file you should now see the image loading in the preview on the right.
<img src="https://i.imgur.com/GTy1Y0q.png" />

## Understanding What We Just Did

> If you already understand all of that, skip this section.

Now, let's break down the code:

- **Import SwiftUI**: The code begins with importing the SwiftUI framework, which allows us to use SwiftUI components.
- **ContentView**: A struct is defined named `ContentView`, which conforms to the `View` protocol. This means we are creating a view in SwiftUI.
- **var body: some View { ... }**: The `body` property represents the content of the view. It uses a closure that returns a `View`.
- **VStack**: A `VStack` is used to arrange the views vertically in a column. All views inside the `VStack` will be stacked on top of each other.
- **HStack**: Inside the `VStack`, there's an `HStack` used to arrange views horizontally in a row. It contains two `Text` views:
  - The first `Text` view displays "Welcome to". The `.font(.title)` modifier sets the font size to `.title`, which is a system-defined font size for titles.
  - The second `Text` view displays "Emerald DApp!". The `.font(.title)` modifier also sets the font size to `.title`. Additionally, the `.foregroundStyle(Color.green)` modifier applies a green color to the text using the `Color` SwiftUI type.
- **Padding**: The `.padding()` modifier is applied to the `HStack`, which adds some padding around the horizontal stack of texts.
- **Image View**: Below the `HStack`, there's an `Image` view with the name "emerald_logo". The `Image` initializer takes the name of an image asset in the project's asset catalog. The `.resizable()` modifier makes the image resizable to adapt to the frame's size. The `.frame(width: 200, height: 200)` modifier sets the width and height of the image to 200 points. The `.padding()` modifier adds some padding around the image.
- **Spacer**: The `Spacer()` view is used to create flexible space that expands to fill the available space in a view. Being used at the bottom of `VStack` like this pushes the other views to the top of the screen.

## Learn More

Because this is not necessarily a course on Swift/SwiftUI, if you'd like to learn more about it, please check out these resources:

- https://www.codecademy.com/catalog/language/swift

> If you have any other resources that have helped you, and you want us to list them, please let me know!

## Quests

1. Change the color of "Emerald DApp" to whatever color you want
2. Change the font size of the title
3. Change the `Image` view to an image of your choice.

---

Take a screenshot of your changes (both the code and the result) and upload it to your quests
