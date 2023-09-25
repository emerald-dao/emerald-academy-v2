---
layout: examples
---

<script>
    import Notice from '$lib/components/atoms/Notice.svelte';
</script>

This tutorial will teach you how to use [Magic Link](https://magic.link/) to onboard users to your DApp with just an email. You will first learn how authenticate users in to your DApp. After authenticating, you will have the user's login info and learn how to send a test transaction as well.

## Getting Started

We will be using the [Magic Link Flow documentation](https://magic.link/docs/dedicated/blockchains/flow#mg-theme-head) to guide you through this process.

<Notice type="note">
If you would like to skip straight to a working example, go <a href="https://codesandbox.io/s/github/MagicLabs/example-flow">here</a>.
</Notice>

We will be using React.js for this tutorial, however you can easily use Svelte or any other framework as well. To create a fresh DApp, open up a terminal and paste `npx create-react-app magic-flow-tutorial`.

## Authenticate using Magic Link

The first part of this tutorial will be how to authenticate users into your DApp using Magic Link. Navigate to your `magic-flow-tutorial` directory in terminal and follow the steps below.

### 1. Install Dependencies

```bash
npm install @onflow/fcl magic-sdk @magic-ext/flow
```

### 2. Create a New Magic Instance

To create a Magic instance, you will need an API key from their platform. Go to https://dashboard.magic.link/login, create an account, create a new project, and select "Flow (testnet)" for your network. You will then be redirected to your API Keys. 

Inside your DApp, open up the `App.js` file and replace it with the following code:

```js
import { Magic } from "magic-sdk";
import { FlowExtension } from "@magic-ext/flow";

const FLOW_ACCESS_NODE = "https://rest-testnet.onflow.org";
const FLOW_NETWORK = "testnet";

const magic = new Magic("PUBLISHABLE API KEY", {
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

If you already have code, simply just add the new `magic` variable and associated imports.

Make sure to replace "PUBLISHABLE API KEY" with your own. It should look something like `pk_live_A0518BB95A143BFB`.

### 3. Configure FCL

Now we need to actually connect to Flow testnet in order to log in. To do that, add the following code to your `App.js` file:

```js
import { Magic } from "magic-sdk";
import { FlowExtension } from "@magic-ext/flow";
// Add the FCL import
import * as fcl from "@onflow/fcl";

const FLOW_ACCESS_NODE = "https://rest-testnet.onflow.org";
const FLOW_NETWORK = "testnet";

// Configure FCL to Flow testnet
fcl.config({
  "accessNode.api": FLOW_ACCESS_NODE,
  "flow.network": FLOW_NETWORK
});

const magic = new Magic("PUBLISHABLE API KEY", {
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

fcl.config({
  "accessNode.api": FLOW_ACCESS_NODE,
  "flow.network": FLOW_NETWORK
});

const magic = new Magic("PUBLISHABLE API KEY", {
  extensions: [
    new FlowExtension({
      rpcUrl: FLOW_ACCESS_NODE,
      network: FLOW_NETWORK
    })
  ]
});

export default function App() {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountMetadata, setAccountMetadata] = useState({});
 
  // Will run every time `isLoggedIn` is changed to true
  // or false. 
  // It will call the magic instance and check if the user
  // is logged in. If they are, it will get their Flow address
  // and other metadata.
  useEffect(() => {
    magic.user.isLoggedIn().then(async (magicIsLoggedIn) => {
      setIsLoggedIn(magicIsLoggedIn);
      if (magicIsLoggedIn) {
        // If the user successfully logged in, save their
        // account data (containing email and flow address)
        // here.
        const accountMetadata = await magic.user.getMetadata();
        setAccountMetadata(accountMetadata);
      }
    });
  }, [isLoggedIn]);

  // Calls a login method on the magic instance
  const login = async () => {
    await magic.auth.loginWithMagicLink({ email });
    setIsLoggedIn(true);
  };

  return (
    <div>
        <div className="container">
          <h1>Please sign up or login</h1>
          <input
            type="email"
            name="email"
            required="required"
            placeholder="Enter your email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <button onClick={login}>Send</button>
        </div>
    </div>
  );
}
```

If you type in your email and click "Log In", you will see a few prompts like this to log in:

<img src="https://i.imgur.com/lgBcTId.png" width="400">

### 5. Getting Account Data (address & email) + Logging Out

Now that the user has authenticated in, we want to display a welcome message with their email and flow address. And allow them to log out.

```js
import { Magic } from "magic-sdk";
import { FlowExtension } from "@magic-ext/flow";
import * as fcl from "@onflow/fcl";
import { useState, useEffect } from 'react';

const FLOW_ACCESS_NODE = "https://rest-testnet.onflow.org";
const FLOW_NETWORK = "testnet";

fcl.config({
  "accessNode.api": FLOW_ACCESS_NODE,
  "flow.network": FLOW_NETWORK
});

const magic = new Magic("pk_live_A0518BB95A143BFB", {
  extensions: [
    new FlowExtension({
      rpcUrl: FLOW_ACCESS_NODE,
      network: FLOW_NETWORK
    })
  ]
});

export default function App() {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountMetadata, setAccountMetadata] = useState({});

  useEffect(() => {
    magic.user.isLoggedIn().then(async (magicIsLoggedIn) => {
      setIsLoggedIn(magicIsLoggedIn);
      if (magicIsLoggedIn) {
        // If the user successfully logged in, save their
        // account data (containing email and flow address)
        // here.
        const accountMetadata = await magic.user.getMetadata();
        setAccountMetadata(accountMetadata);
      }
    });
  }, [isLoggedIn]);

  const login = async () => {
    await magic.auth.loginWithMagicLink({ email });
    setIsLoggedIn(true);
  };

  // Add log out function
  const logout = async () => {
    await magic.user.logout();
    setIsLoggedIn(false);
  };

  // Modify this part so that if the user is logged in,
  // it will display their email and account address using
  // `accountMetadata` and an option to log out.
  return (
    <div>
      {!isLoggedIn ?
        <div className="container">
          <h1>Please sign up or login</h1>
          <input
            type="email"
            name="email"
            required="required"
            placeholder="Enter your email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <button onClick={login}>Log In</button>
        </div> :
        <div>
          Welcome, {accountMetadata.email}! Your Flow address is {accountMetadata.publicAddress}!
          <button onClick={logout}>Log Out</button>
        </div>
      }
    </div>
  );
}
```

## Sending Test Transaction

Now that we have completed the authentication user flow, lets try to send a transaction with the user's account once they are logged in.

Let's write a `sendTransaction` function that simply logs the signer's address.

```js
// Get the authorization function for the user from
// the magic instance
const AUTHORIZATION_FUNCTION = magic.flow.authorization;

const sendTransaction = async () => {
    try {
      console.log("Sending Transaction...");

      // Send a simple transaction using FCL
      const transactionId = await fcl.mutate({
        cadence: `
        transaction() {

            let AccountAddress: Address

            prepare(signer: AuthAccount) {
                self.AccountAddress = signer.address
            }

            execute {
                log(self.AccountAddress)
            }
        }
        `,
        proposer: AUTHORIZATION_FUNCTION, // User proposes tx
        payer: AUTHORIZATION_FUNCTION, // User pays for tx
        authorizations: [AUTHORIZATION_FUNCTION], // User signs tx
        limit: 999
      });

      console.log({ transactionId });
      console.log("Waiting for transaction to be sealed...");
      const transactionResult = await fcl.tx(transactionId).onceSealed();
      console.log("Transaction is sealed!");
      console.log({ transactionResult });

      if (transactionResult.status === 4 && transactionResult.statusCode === 0) {
        console.log("Success! You signed the transaction.")
      } else {
        console.error(`Error: ${transactionResult.errorMessage}`);
      }
    } catch (error) {
      console.error(`Error: ${error}`);
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

fcl.config({
  "accessNode.api": FLOW_ACCESS_NODE,
  "flow.network": FLOW_NETWORK
});

const magic = new Magic("pk_live_A0518BB95A143BFB", {
  extensions: [
    new FlowExtension({
      rpcUrl: FLOW_ACCESS_NODE,
      network: FLOW_NETWORK
    })
  ]
});

const AUTHORIZATION_FUNCTION = magic.flow.authorization;

export default function App() {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountMetadata, setAccountMetadata] = useState({});

  useEffect(() => {
    magic.user.isLoggedIn().then(async (magicIsLoggedIn) => {
      setIsLoggedIn(magicIsLoggedIn);
      if (magicIsLoggedIn) {
        const accountMetadata = await magic.user.getMetadata();
        setAccountMetadata(accountMetadata);
      }
    });
  }, [isLoggedIn]);

  const login = async () => {
    await magic.auth.loginWithMagicLink({ email });
    setIsLoggedIn(true);
  };

  const logout = async () => {
    await magic.user.logout();
    setIsLoggedIn(false);
  };

  const sendTransaction = async () => {
    try {
      console.log("Sending Transaction...");

      const transactionId = await fcl.mutate({
        cadence: `
        transaction() {

            let AccountAddress: Address

            prepare(signer: AuthAccount) {
                self.AccountAddress = signer.address
            }

            execute {
                log(self.AccountAddress)
            }
        }
        `,
        proposer: AUTHORIZATION_FUNCTION,
        payer: AUTHORIZATION_FUNCTION,
        authorizations: [AUTHORIZATION_FUNCTION],
        limit: 999
      });

      console.log({ transactionId });
      console.log("Waiting for transaction to be sealed...");
      const transactionResult = await fcl.tx(transactionId).onceSealed();
      console.log("Transaction is sealed!");
      console.log({ transactionResult });

      if (transactionResult.status === 4 && transactionResult.statusCode === 0) {
        console.log("Success! You signed the transaction.")
      } else {
        console.error(`Error: ${transactionResult.errorMessage}`);
      }
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  return (
    <div>
      {!isLoggedIn ?
        <div className="container">
          <h1>Please sign up or login</h1>
          <input
            type="email"
            name="email"
            required="required"
            placeholder="Enter your email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <button onClick={login}>Log In</button>
        </div> :
        <div>
          Welcome, {accountMetadata.email}! Your Flow address is {accountMetadata.publicAddress}.
          <button onClick={sendTransaction}>Send Transaction</button>
          <button onClick={logout}>Log Out</button>
        </div>
      }
    </div>
  );
}
```

We're all done! Open up the developer console to see if it works.

## Next Steps

To check out a working example, go [here](https://codesandbox.io/s/github/MagicLabs/example-flow).

Till next time ~ Jacob Tucker