---
title: Authentication
lesson: 4
language: en
excerpt: learn more about authentication
---

# Chapter 1 Lesson 4 - The different types of authentication

You've already [built and deployed the sample app](src/lib/content/courses/niftory/en/chapter1/lesson3.md) in the last lesson so we're going to take this time to learn more about the authentication modes that Niftory supports. This should help clarify the various ways we do things in the sample app and help you make the decision of which modes to support in your DApp. 

## Authentication modes

For simple commands (generally getting data like your NFTs, Wallets, etc), you can just use your API Key, which is safe to call for any application. For privileged commands, you'll use the Client Secret or our OAuth integrations. 

In our SDK samples, you'll usually see us creating a separate client for simple use-cases vs the privileged use-cases. 

### Standard SDK Client

If you look at the client declaration below, you'll see we only pass the client our public API key and our public client ID. None of this is particularly sensitive info. 

```js
import { EnvironmentName, NiftoryClient, NiftoryProvider } from "@niftory/sdk"
import { useMemo } from "react"
import { useWalletContext } from "../hooks/useWalletContext"

export const NiftoryClientProvider = ({ children }) => {
  const client = useMemo(() => {
    return new NiftoryClient({
      environmentName: process.env.NEXT_PUBLIC_BLOCKCHAIN_ENV as EnvironmentName,
      appId: process.env.NEXT_PUBLIC_CLIENT_ID,
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
    })
  }, [])

  return <NiftoryProvider client={client}>{children}</NiftoryProvider>
}
```

### Privileged Niftory SDK Client (API Key + Client Secret)

Some operations require more privileged authentication — for example, if any user could invoke the [transfer](https://app.gitbook.com/o/ShoAj2x7X0erlYafyocL/s/1itXKRjyFqqWGYkUXFnP/core-concepts/nfts/transferring-nfts) mutation, they would be able to transfer as many NFTs as they wanted to themselves, so we probably only want the application to be able to initiate that operation!

```js
import { EnvironmentName, NiftoryClient } from "@niftory/sdk"
let client: NiftoryClient

/**
 * Gets a NIFTORY client for use in the backend.
 * @returns A NiftorySdk client.
 */
export function getBackendNiftoryClient() {
  client =
    client ||
    new NiftoryClient({
      environmentName: process.env.NEXT_PUBLIC_BLOCKCHAIN_ENV as EnvironmentName,
      appId: process.env.NEXT_PUBLIC_CLIENT_ID,
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      clientSecret: process.env.CLIENT_SECRET,
    })

  return client
}
```

For operations that should only be initiated from the app or app admin's context, we support two forms of privileged authentication: (1) Backend authentication and (2) Admin authentication.

### Backend Authentication
Backend authentication amounts to your application authenticating as itself, instead of in the AppUser context.

> Backend authentication allows the App to perform any privileged operation against your application's resources. *For this reason, it's extremely important to only use this kind of authentication in your backend.*

There are two ways of doing backend authentication - using your client secret or using OAuth. 
1. Client Secret: Add your client secret header into the API Call (backend only).
2. Open ID and OAuth: Authenticate using the [OAuth Client Credentials](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/) grant. Many OAuth libraries support this.

For a more detailed discussion of this, check out our official [docs](https://docs.niftory.com/home/v/api/core-concepts/authentication/privileged-authentication). We also have some handy code-snippets for you embedded in that page. 

## Conclusion

That about wraps things up for us in the Niftory mini-course. With Niftory as your guide, you're ready to embark on a fantastic voyage across the waves of the Flowverse!

## Quests

1. What are the different types of authentication you may encounter with Niftory? Which ones seem the mose suitable for your DApp? 