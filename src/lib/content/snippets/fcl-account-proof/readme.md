---
layout: examples
---

```javascript
import {
  config,
  authenticate,
  unauthenticate,
  currentUser,
  AppUtils
} from "@onflow/fcl";
import { useEffect, useState } from "react";

// your own app identifier
const appIdentifier = "Emerald Academy";

// need a resolver function for account proofing
const resolver = async () => {
  // minimum 32-byte random nonce as hex string
  const nonce =
    "cdcdfb6611e25cb207c47f6b7e2b99c1afa28c2bb2f7f582c9df935ba90c8df2";
  return {
    appIdentifier,
    nonce
  };
};

config({
  "accessNode.api": "https://rest-testnet.onflow.org",
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
  "flow.network": "testnet",
  // add resolver function to your config
  "fcl.accountProof.resolver": resolver
});

export default function App() {
  const [user, setUser] = useState({ loggedIn: false, addr: "" });

  // So that the user stays logged in
  // even if the page refreshes
  useEffect(() => {
    currentUser.subscribe(setUser);
  }, []);

  const verifyAccountOwnership = async () => {
    if (!user.loggedIn) {
      return;
    }
    const accountProofService = user.services.find(
      (services) => services.type === "account-proof"
    );
    console.log(accountProofService);
    const verified = await AppUtils.verifyAccountProof(
      appIdentifier,
      accountProofService.data,
      {
        fclCryptoContract: null
      }
    );
    console.log({ verified });
  };

  return (
    <div className="App">
      <button onClick={authenticate}>Log In</button>
      <button onClick={unauthenticate}>Log Out</button>

      {user.loggedIn ? (
        <button onClick={verifyAccountOwnership}>Verify</button>
      ) : null}

      <p>{user.loggedIn ? `Welcome, ${user.addr}!` : "Please log in."}</p>
    </div>
  );
}
```