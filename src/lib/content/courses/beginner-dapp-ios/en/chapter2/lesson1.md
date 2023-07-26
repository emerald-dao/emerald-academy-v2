---
title: Creating our Mobile (iOS) DApp
lesson: 1
language: en
excerpt: Creating our DApp
---

# Chapter 2 Lesson 1 - Creating our Mobile (iOS) DApp

> Developing apps for iOS requires using a Mac, if you don't have access to Mac the easiest way to get is started is by renting access to a Mac using services like [macincloud](https://checkout.macincloud.com)

In this lesson, we are going to actually jump into some code and start our Mobile (iOS) DApp development. We will be using Swift and SwiftUI to create our first DApp.

# IMPORTANT NOTE

Chapter 2 will focus on frontend development, specifically the semantics of Swift and SwiftUI. If you are already comfortable with these languages, you still need to complete Chapter 2 because you will be setting up for other chapters. However it will be very quick for you, and you can skim through the lesson. That is totally okay.

## What is Swift and SwiftUI?

> You can skip this section if you already know the basic of Swift/SwiftUI and frontend development

iOS apps are developed using Apples native programming languages Swift and SwiftUI, with the application "logic" or functionality being declared in Swift and the user inteface being defined in SwiftUI. With SwiftUI, we can define our user interface using a declarative syntax, making it easy to understand and maintain.

Before we get started, let's cover the difference between "frontend" and "backend" development

### Frontend iOS Development

When you visit a website or open a mobile app, you are presented with content on the screen. As a user, there are three primary aspects that immediately catch your attention:

1. **What is being displayed**: This refers to the actual content visible on the screen, such as text, images, buttons, and other elements.
2. **How it looks (Styling)**: Styling encompasses the visual appearance of the content, including colors, fonts, layout, and overall design aesthetics.
3. **What happens when you interact (Interactivity)**: This aspect pertains to the behavior of the app or website when you interact with it, such as clicking on buttons, scrolling through content, or triggering animations.

Collectively, these elements are integral to what we call "frontend" development. Frontend development focuses on crafting the user experience and interface that users interact with directly. For instance, when you use Instagram, activities like scrolling through your feed, viewing posts, searching for content, and liking posts by tapping the heart button are all part of the frontend components. It's the frontend that allows you to engage with the app's features and explore its functionalities, making it a crucial aspect of the overall user experience.

### Backend iOS Development

In contrast to frontend development, there is a vital aspect known as "backend" development. And don't worry, it's not as hard as Jacob makes it sound in his web focused lessons! Backend development is responsible for handling operations that occur outside of your mobile device. While frontend development deals with what you see and interact with on your phone, the backend typically operates on a remote system running elsewhere. In the context of traditional Web2 applications like Instagram, backend development involves various essential tasks, including:

1. **Fetching Complicated Information**: The backend is responsible for retrieving and processing complex data from various sources, such as databases or external APIs. This information may require extensive computations or multiple data sources to provide the desired results.
2. **Storing Data in a Database**: When you interact with an app, like making a post on Instagram, the backend handles the storage of that post's information in a database. The database serves as a centralized repository for all the app's data, making it accessible and persistent.
3. **Handling Complex Procedures**: Certain operations, like performing extensive calculations or executing resource-intensive tasks, are better suited for backend processing. This avoids overburdening the frontend, ensuring a smoother user experience.

For instance, when you tap on a user's profile in the Instagram app, the backend springs into action. It gathers all the necessary data related to that user, such as their posts, followers, and other information, and then delivers it to the frontend. The frontend then displays this data to you, allowing you to view the user's profile.

Similarly, when you create a post on Instagram, the frontend sends the post's details, like the description and image, to the backend. The backend then handles the process of saving this post in a database, ensuring that your post is securely stored and accessible to other users.

In summary, backend development plays a crucial role in managing the complex, behind-the-scenes operations of a mobile app, making it an indispensable component of the overall app development process.

### Back to our mobile development journey!

Now that we have gotten some basics out of the way, we can start building our Mobile DApp, as you may have guessed the app will be our "frontend" and we will be using the Flow Blockchain as our "backend".

## Setting Up the Environment

Before we dive into the rest of the tutorial, let's make sure we have the necessary tools installed to develop our iOS app. If you need any help, please reach out in the [Emerald City Discord](https://discord.gg/emeraldcity).

1. Xcode: Install Xcode from the Mac App Store. Xcode is the integrated development environment (IDE) for macOS that includes all the tools needed for iOS app development.
2. Git: If you don't already have Git installed, you can follow the instructions on this website: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git. You can confirm that Git is installed by running git --version in the Terminal.

## Creating Our DApp Project

> Note I am using Xcode Version 15, your Xcode version might look slightly different as Apple releases new updates.

1. Open Xcode, and from the welcome screen, select "Create a new Xcode project"
   <img src="https://i.imgur.com/7IutQqM.png" />
2. Choose "App" under the Multiplatform section, this way our app will work on both iOS and iPadOS.
   <img src="https://i.imgur.com/GA18lwP.png" />
3. On the next screen, enter `EmeraldDApp` for the product name, leave the default value for the rest of the options, and then click Next.
   <img src="https://i.imgur.com/DftpgpA.png" />
4. Select a location to save your project and be sure to check the `Create Git repository on my Mac` box so we can save this project to our GitHub repository later.
   <img src="https://i.imgur.com/gSX1cMr.png" />
5. The last thing we need to do is remove the Mac destination as the FCL-Swift sdk doesn't support it yet. Click on the the top `EmeraldDApp` in your project structure on the left. Select `Mac` in the Supported Destinations list, then click the minus button to remove it.
   <img src="https://i.imgur.com/GNdCEPT.png" />

## Understanding the Project Structure

Your project in Xcode should have the following structure:

> Note that Xcode hides the file extension of the files unless you are renaming them or viewing them in the Finder.

```
EmeraldDApp
  ├── EmeraldDApp
  │     ├── EmeraldDAppApp.swift
  │     ├── ContentView.swift
  │     ├── Assets.xcassets
  │     └── EmeraldDApp.entitlements
  └── Preview Content
        ├── Preview Assets.xcassets
        └── Preview Assets.xcassets
```

## Creating the User Interface

Open ContentView.swift in Xcode. This is where we will define the user interface for our DApp.

Replace the existing code with the following:

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("Welcome to Emerald DApp!")
                .font(.title)
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

In this code, we have a simple Vertical Stack or `VStack` containing a Text view and an Image view. Notice that in the preview window on the right, no image is displayed though. This is because the Image view is looking for an image named `emerald_logo` in the `Assets` folder, lets add that now.

1. Click the link to download the image: <a href="https://cdn.discordapp.com/attachments/1122027331570110504/1122027809632686150/ea-logo.png" download="emerald_logo.png">Download Image</a>
2. Once Downloaded selected the `Assets` folder in Xcode to simply drag and drop the downloaded image into your project.
   <img src="https://i.imgur.com/alDU945.gif" />

If we go back to our `ContentView` file you should now see the image loading in the preview on the right.
<img src="https://i.imgur.com/UiT9t8N.png" />

## Storing our iOS App on GitHub

As we wrap up this section, let's talk about GitHub, an indispensable tool for developers like us. GitHub provides a centralized platform to store and manage our code, allowing easy tracking of our project's progress. Whether you're working on personal projects or collaborating with a team, GitHub streamlines code sharing and version control.

> If you don't have a GitHub account yet, [you can sign up here](https://github.com/).

Let's take the code we've developed for our iOS app and add it to our own GitHub repository. In other words, we will "push" our code to GitHub, ensuring it is safely stored and accessible.

### Create a New Repository

In Git, a repository is like a container for our project.

1. Go to https://github.com/new and name your project "beginner-emerald-dapp"
2. Set the repository visibility to "public."
3. Click "Create repository."

You will now be taken to a page with no files inside of it. It should look like this:

<img src="/courses/beginner-dapp/empty-github.png" />

### Pushing to Our Repository

Let's now add (or "push") our iOS app code to GitHub. Open up a terminal on your computer and make sure you're in the base directory of your project.

> Run the following lines of code:

```bash
git add .
git commit -m "Initial commit: Adding my iOS app code"
git branch -M main
git remote add origin [THE URL OF YOUR GITHUB REPOSITORY]
git push -u origin main
```

Replace [THE URL OF YOUR GITHUB REPOSITORY] with the actual URL of your newly created GitHub repository.

If this is your first time pushing to GitHub, it may prompt you to log in. After completing the push, you can visit your GitHub repository to verify that all your code is there, securely stored and ready for future development!

<img src="https://i.imgur.com/UZPdhw3.png" />

### Making Changes

Now, what if we make changes to our code? How to we put it on GitHub?

When you make a change in your code and save the file, you can push it to GitHub by running:

```bash
git add .
git commit -m "you can put any message about the code changes here"
git push origin main
```

## Conclusion

All we wanted you to do today was install a Next.js project and run the project. If you could successfully do that, wooooohoooo! You will have no problem with the Quest.

In tomorrow's content, we will explain what all the code is actually doing, and make some changes.

## Quests

For your quest today, you have one task:

1. What is the difference between frontend and backend? Can you provide a real life example? Note: You can't use the one in this chapter.

2. What is the difference between global styling and module styling?

3. Take a screenshot of the running application and upload it to your quest submissions.

4. Upload the link to your public GitHub repository.
