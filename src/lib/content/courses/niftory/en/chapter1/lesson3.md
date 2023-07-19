---
title: Basic Niftory App
lesson: 3
language: en
excerpt: build your first niftory app
---

# Chapter 1 Lesson 3 - The API and building your first app

You've already [gotten your API keys]() in the last lesson so now you're ready to build your very first app on Niftory's APIs! 

## Sample App
<!-- TODO: Change the test to main links once they've been merged.  -->

First things first, let's [clone the Niftory samples workspace](https://github.com/Niftory/niftory-samples). Here, you'll see a few different projects. The one we'll focus on for today is [basic app sdk](https://github.com/Niftory/niftory-samples/tree/test/basic-app-sdk). Note that there's another [basic app sample](https://github.com/Niftory/niftory-samples/tree/test/basic-app) that uses the regular graphql API but using the SDK is usually going to be more suitable when creating a client application.

Once you've gotten the workspace set up, navigate to the basic-app-sdk directory
```
cd basic-app-sdk
```

Then open up the readme file and follow the instructions. It's pretty straightforward, but just so we have it in this lesson as well it consists of: 
1. Install dependencies. Nodejs, Yarn and NPM if you haven't already. 
2. Create a .env file with the API key and secret that we have from the last lesson
3. Run the app with `yarn dev`.

For a more detailed walkthrough, check out the sample apps [readme](https://github.com/Niftory/niftory-samples/blob/test/basic-app-sdk/README.md). 

With the app running, you should see the collection that you created in the last lesson. Pat yourself on the back! This is your first collection *and* your first DApp. 


## Niftory Data Model

Okay, now that we've seen some running code, let's take a step back and look at the data model

<img src="https://3595744636-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F1itXKRjyFqqWGYkUXFnP%2Fuploads%2FFUraB6Gkodf53YiwvDTq%2FNiftoryDataModel2.png?alt=media&token=d506b1fd-29d9-49c0-85c4-036477640308" alt="drawing" width="600"/>

> The data model

An `AppUser` doesn't need to worry about `NFTModel` and `NFTSet` concepts. Those are for your App to manage and represents the digital collection you want your users to see.

There are two main sections of the Data model which intersect at the NFT. 

1. *User*. An `AppUser` has a `Wallet`. The `Wallet` stores NFTs. Pretty simple. 
2. *NFT*. The `NFT` is the atomic store of value. It is minted from `NFTModel` which is simply a template. The `NFTSet` is meant simply for you to organize various NFTModels. For example, if you were to develop a pet-rearing game, the NFT would be Mr. Ruffles - the bowler hat wearing Burmese. The NFTModel would be "Cats" and the NFTSet would be Pets. Perhaps if you started an NFT line of in-game pet houses, that would be a different NFTSet.

## Conclusion

Almost done! We have one bonus lesson centered around authentication types but, you're well on your way. You now know what Niftory is, why you'd use it and how you'd incorporate it into your projects. 

## Quests

1. Pull down the code, create the `.env` file and get the app up and running!  