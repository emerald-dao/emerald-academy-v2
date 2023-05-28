---
title: Admin Portal
lesson: 2
language: en
excerpt: admin portal and contract management
---

# Chapter 1 Lesson 2 - The Admin Portal

The first of the two tools that make up Niftory. The admin portal is the source of tremendous power and has functionality that's meant for all the different types of people that may go into making an NFT project come to life. Or it could be just for one person wearing multiple hats. 

The Niftory admin dashboard is designed to let you easily switch between different operations during the launch of your NFT collection. Okay, so check this out - each of the boxes below are labeled 1 through 4. Let's go through them one by one. 
<img src="/courses/niftory/niftory-welcome.png" alt="drawing" width="600"/>

1. **Collection**. This view is primarily for your designers and artists who need to manage the assets being collected as an NFT. In  Collections view, you'll see all of this content. **Sets** are primarily a way to organize your NFT Collection. **Collectibles** are templates for the NFTs that are being made. These Sets and Collectibles are created and minted on the blockchain. 
2. **Manage**. Manage your app and organization settings. Developers can find useful information (like API key and client secret here). 
3. **Dashboard**. For people more interested in the business side of thing, the dashboards give you full visibility into your users, sales, and anything else you might want to know.
4. **Listings**. Once the collection is ready, share it with the word through the listings page. 

We will mostly focus on the **App Settings** view for the remainder of this tutorial but that should give you a good overview of everything the admin panel can do. 

## Deploying a contract
Now, we're going to deploy a contract in under 30s. Ready? LFG! 

1. Head on over to [Niftory](https://www.niftory.com/) and hit the big "Get My API Key" button. 
2. You'll be prompted to create an account with Niftory. 
3. Once you've created an account, you'll have to name your organization. Don't worry about this part being perfect, you can always change this later. 

<img src="/courses/niftory/niftory-org-name.png" alt="drawing" width="600"/>

4. Once you've create an organization, you will be prompted to name the app. Again, this can be changed later.  

<img src="/courses/niftory/niftory-app-name.png" alt="drawing" width="600"/>

5. Now, you will get dropped into the admin panel into a first-run user flow. This part is actually fairly important because you are naming the app for the final time (no takebacks). If you get the naming wrong, or you need to start over, you *can* always create a new contract. 

<img src="/courses/niftory/niftory-contract-name.png" alt="drawing" width="600"/>

6. Hit "Deploy" to finalize the contract name and write it to the blockchain. 

<img src="/courses/niftory/niftory-deploy.png" alt="drawing" width="600"/>

And voila! You've just deployed your first Flow contract. 

## Creating a collection 

- Set > Collectibles > NFTs
- Mint the collectible (not the NFT)
- List the NFT (auto-mint by Niftory) OR handle the mint in code by yourself. 

## Minting NFTs on the contract

- Code Snippet for minting. 

## Mainnet vs. Testnet

Here, it's probably good to direct you to another excellent course here on Emerald DAO. The full course is [here](https://academy.ecdao.org/en/catalog/courses/beginner-dapp/chapter1/lesson1#mainnet-vs-testnet), but here's a tiny excerpt that should give you enough of an idea to get going: 

TestNet: 
> TestNet is an environment where developers test their applications before releasing it to the public. This is a perfect space to figure out what’s wrong with your application before actually releasing it to the public to use.

MainNet: 
> MainNet is an environment where everything is real. When you release your application to the public, you put it on MainNet. On MainNet, everything is live, so things cost real money, there are risks, and you must make sure everything is working correctly.

In Niftory, you can switch from TestNet to MainNet with a toggle. This is a particularly powerful toggle because as we've discussed, once things are deployed to MainNet, people are spending *real* money. 

<img src="/courses/niftory/niftory-admin.png" alt="drawing" width="600"/>


## Authentication modes
  
Authentication can be particularly difficult when working with DApps. Explain the different authentication modes: 

They can use either OAuth or API Keys but not both. 

If OAuth: 
1. User Access (Front end authentication). Regular OAuth (Google as sign-in provider)
2. Admin/Privileged access (Back end authentication). OAuth Client Credentials grant.

If API Key: 
1. API Access. No special privilege, just ID yourself as a Niftory client. Only needs API key. 
2. Privileged access. Pass client secret as well. 

<!-- Placeholder content - needs to be rewritten. 


### API Keys
Each application gets an API Key when registered with Niftory for project-level authentication. This key needs to be passed as X-Niftory-API-Key header alongside every API request. This key identifies that the application calling the Niftory API is *yours*. You can find your API key in the admin dashboard under "Your App > Your API Keys". 

Simply using the API key will give your application 

### OAuth 2.0
Authentication and authorization can be hard in any application, especially in a space as confusing as web3. For any operations that require user or app authorization, we use OAuth 2.0.
Each application gets a client ID and a client secret from Niftory that can be used to authenticate the application itself, as well as its users, to use the Niftory API.

 -->
## Conclusion

That about wraps things up for today! In the next lesson, we will walk through the current Niftory sample so you can use it as a template to get started on your own DApp. 

## Quests

1. Go on ahead and [get your API keys](https://docs.niftory.com/home/get-your-api-keys). Don't worry, it's free! This quest will get you to deploy a contract onto the flow blockchain