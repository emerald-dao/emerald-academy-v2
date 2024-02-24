---
layout: examples
---

<script>
    import Notice from '$lib/components/atoms/Notice.svelte';
</script>

This tutorial will teach you how to use [Magic Link](https://magic.link/) to onboard users to your DApp with just an email. You will first learn how to authenticate users in to your DApp. After authenticating, you will have the user's login info and learn how to send a test transaction as well.

<Notice type="note">
To check out a working example, go <a href="https://codesandbox.io/p/sandbox/cranky-hodgkin-wnqvgt">here</a>.
</Notice>

## Getting Started

We will be using the [Magic Link Flow documentation](https://magic.link/docs/blockchains/featured-chains/flow) to guide you through this process.

## Authenticate using Magic Link

The first part of this tutorial will be how to authenticate users into your DApp using Magic Link. 

We will be using React for this tutorial, however you can easily use Svelte or any other framework as well. To create a fresh DApp, open up a terminal and paste `npx create-react-app magic-flow-tutorial`.

Navigate to your `magic-flow-tutorial` directory in terminal and follow the steps below.

### 1. Install Dependencies

```bash
npm install @onflow/fcl magic-sdk @magic-ext/flow
```

### 2. Create a New Magic Instance

To create a Magic instance, you will need an API key from their platform. Go to https://dashboard.magic.link/login, create an account, create a new project, and select "Flow (testnet)" for your network. You will then be redirected to your API Keys. 

You will see your "Publishable API Key" here:

<img src="https://i.imgur.com/FysU4oF.png" width="400" />

Inside your DApp, open up the `App.js` file and replace it with the following code:

```js
import { Magic } from "magic-sdk";
import { FlowExtension } from "@magic-ext/flow";

const FLOW_ACCESS_NODE = "https://rest-testnet.onflow.org";
const FLOW_NETWORK = "testnet";
const API_KEY = "YOUR API KEY";

const magic = new Magic(API_KEY, {
  extensions: [
    new FlowExtension({
      rpcUrl: FLOW_ACCESS_NODE,
      network: FLOW_NETWORK
    })
  ]
});

export default function App() {
  return (
    <div>
      Hello!
    </div>
  );
}
```

Make sure to replace "APY_KEY" with your own. It should look something like `pk_live_A0518BB95A143BFB`.

### 3. Configure FCL

Now we need to actually connect to Flow testnet in order to log in. To do that, add the following code to your `App.js` file:

```js
import { Magic } from "magic-sdk";
import { FlowExtension } from "@magic-ext/flow";
// Add the FCL import
import * as fcl from "@onflow/fcl";

const FLOW_ACCESS_NODE = "https://rest-testnet.onflow.org";
const FLOW_NETWORK = "testnet";
const API_KEY = "YOUR API KEY";

// Configure FCL to Flow testnet
fcl.config({
  "accessNode.api": FLOW_ACCESS_NODE,
  "flow.network": FLOW_NETWORK,
  "discovery.wallet": `https://fcl.magic.link/authn?${new URLSearchParams({
    apiKey: API_KEY,
  })}`
});

const magic = new Magic(API_KEY, {
  extensions: [
    new FlowExtension({
      rpcUrl: FLOW_ACCESS_NODE,
      network: FLOW_NETWORK
    })
  ]
});

export default function App() {
  return (
    <div>
      Hello!
    </div>
  );
}
```

### 4. Authenticate

Now we can have users authenticate into our DApp. Let's modify our `App.js` file a little to include a place for users to type in their email and log in.

```js
import { Magic } from "magic-sdk";
import { FlowExtension } from "@magic-ext/flow";
import * as fcl from "@onflow/fcl";
// Add react import for frontend functionality
import { useState, useEffect } from 'react';

const FLOW_ACCESS_NODE = "https://rest-testnet.onflow.org";
const FLOW_NETWORK = "testnet";
const API_KEY = "YOUR API KEY";

fcl.config({
  "accessNode.api": FLOW_ACCESS_NODE,
  "flow.network": FLOW_NETWORK,
  "discovery.wallet": `https://fcl.magic.link/authn?${new URLSearchParams({
    apiKey: API_KEY,
  })}`
});

const magic = new Magic(API_KEY, {
  extensions: [
    new FlowExtension({
      rpcUrl: FLOW_ACCESS_NODE,
      network: FLOW_NETWORK
    })
  ]
});

export default function App() {
  const [user, setUser] = useState({ loggedIn: false, addr: '' });
 
  // Will run every time the page is refreshed
  // to make sure the user stays logged in.
  // The user object contains basic wallet
  // information like `loggedIn` (a boolean)
  // and `addr` (the user's wallet address).
  useEffect(() => {
    fcl.currentUser().subscribe(setUser);
  }, []);

  // Calls a login method and logs
  // user data (email, phone #, etc)
  // to the console. You can save it
  // if you wish.
  const login = async () => {
    await fcl.authenticate();
    const account = await magic.user.getMetadata();
    console.log({ account });
  };

  return (
    <div>
        <div className="container">
          <h1>Please login</h1>
          <button onClick={login}>Login</button>
        </div>
    </div>
  );
}
```

Try to click the "Login" button and see if it prompts you to log in.

### 5. Getting Account Data (address & email) + Logging Out

Now that the user has authenticated in, we want to display a welcome message with their flow address. And allow them to log out.

```js
import { Magic } from "magic-sdk";
import { FlowExtension } from "@magic-ext/flow";
import * as fcl from "@onflow/fcl";
import { useState, useEffect } from 'react';

const FLOW_ACCESS_NODE = "https://rest-testnet.onflow.org";
const FLOW_NETWORK = "testnet";
const API_KEY = "YOUR API KEY";

fcl.config({
  "accessNode.api": FLOW_ACCESS_NODE,
  "flow.network": FLOW_NETWORK,
  "discovery.wallet": `https://fcl.magic.link/authn?${new URLSearchParams({
    apiKey: API_KEY,
  })}`
});

const magic = new Magic(API_KEY, {
  extensions: [
    new FlowExtension({
      rpcUrl: FLOW_ACCESS_NODE,
      network: FLOW_NETWORK
    })
  ]
});

export default function App() {
  const [user, setUser] = useState({ loggedIn: false, addr: '' });
 
  useEffect(() => {
    fcl.currentUser().subscribe(setUser);
  }, []);

  const login = async () => {
    await fcl.authenticate();
    const account = await magic.user.getMetadata();
    console.log({ account });
  };

  // Add log out function
  const logout = async () => {
    fcl.unauthenticate();
  };

  // Modify this part so that if the user is logged in,
  // it will display their account address and an option to log out.
  return (
    <div>
      {!user.loggedIn ?
        <div className="container">
          <h1>Please login</h1>
          <button onClick={login}>Login</button>
        </div> :
        <div>
          Welcome! Your Flow address is {user.addr}!
          <br />
          <button onClick={logout}>Logout</button>
        </div>
      }
    </div>
  );
}
```

### 6. Viewing Your Wallet

We can also add a button so a user can view information about their wallet.

Add the following button below the logout button:

```js
<button onClick={() => magic.wallet.showUI()}>View Wallet</button>
```

## 7. Sending Test Transaction

Now that we have completed the authentication user flow, lets try to send a transaction with the user's account once they are logged in.

Let's write a `sendTransaction` function that simply logs the signer's address.

```js
const sendTransaction = async () => {
  try {
    console.log("SENDING TRANSACTION");

    const response = await fcl.mutate({
      cadence: `
        transaction() {
          var account: AuthAccount

          prepare(signer: AuthAccount) {
            self.account = signer
          }

          execute {
            log(self.account.address)
          }
        }
      `,
      args: (arg, t) => [],
      proposer: fcl.authz,
      payer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 999,
    });
    console.log("TRANSACTION SENT");
    console.log("TRANSACTION RESPONSE", response);

    console.log("WAITING FOR TRANSACTION TO BE SEALED");
    var data = await fcl.tx(response).onceSealed();
    console.log("TRANSACTION SEALED", data);
  } catch (error) {
    console.error("FAILED TRANSACTION", error);
  }
};
```

We can add this to our `App.js` file, along with a button that the user can click to run the test transction:

```js
import { Magic } from "magic-sdk";
import { FlowExtension } from "@magic-ext/flow";
import * as fcl from "@onflow/fcl";
import { useState, useEffect } from 'react';

const FLOW_ACCESS_NODE = "https://rest-testnet.onflow.org";
const FLOW_NETWORK = "testnet";
const API_KEY = "YOUR API KEY";

fcl.config({
  "accessNode.api": FLOW_ACCESS_NODE,
  "flow.network": FLOW_NETWORK,
  "discovery.wallet": `https://fcl.magic.link/authn?${new URLSearchParams({
    apiKey: API_KEY,
  })}`
});

const magic = new Magic(API_KEY, {
  extensions: [
    new FlowExtension({
      rpcUrl: FLOW_ACCESS_NODE,
      network: FLOW_NETWORK
    })
  ]
});

export default function App() {
  const [user, setUser] = useState({ loggedIn: false, addr: '' });
 
  useEffect(() => {
    fcl.currentUser().subscribe(setUser);
  }, []);

  const login = async () => {
    await fcl.authenticate();
    const account = await magic.user.getMetadata();
    console.log({ account });
  };

  const logout = async () => {
    fcl.unauthenticate();
  };

  // add this function in
  const sendTransaction = async () => {
    try {
      console.log("SENDING TRANSACTION");

      const response = await fcl.mutate({
        cadence: `
          transaction() {
            var account: AuthAccount

            prepare(signer: AuthAccount) {
              self.account = signer
            }

            execute {
              log(self.account.address)
            }
          }
        `,
        args: (arg, t) => [],
        proposer: fcl.authz,
        payer: fcl.authz,
        authorizations: [fcl.authz],
        limit: 999,
      });
      console.log("TRANSACTION SENT");
      console.log("TRANSACTION RESPONSE", response);

      console.log("WAITING FOR TRANSACTION TO BE SEALED");
      var data = await fcl.tx(response).onceSealed();
      console.log("TRANSACTION SEALED", data);
    } catch (error) {
      console.error("FAILED TRANSACTION", error);
    }
  };

  // Modify this part so that it displays a button
  // to run a test transaction.
  return (
    <div>
      {!user.loggedIn ?
        <div className="container">
          <h1>Please login</h1>
          <button onClick={login}>Login</button>
        </div> :
        <div>
          Welcome! Your Flow address is {user.addr}!
          <br />
          <button onClick={logout}>Logout</button>
          <button onClick={() => magic.wallet.showUI()}>View Wallet</button>
          <button onClick={sendTransaction}>Send Transaction</button>
        </div>
      }
    </div>
  );
}
```

We're all done! Open up the developer console to see if it works.

## Next Steps

To check out a working example, go [here](https://codesandbox.io/p/sandbox/cranky-hodgkin-wnqvgt).

Till next time ~ Jacob Tucker