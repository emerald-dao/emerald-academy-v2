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

const fclConfigInfo = {
  emulator: {
    accessNode: "http://127.0.0.1:8888",
    discoveryWallet: "http://localhost:8701/fcl/authn"
  },
  testnet: {
    accessNode: "https://rest-testnet.onflow.org",
    discoveryWallet: "https://fcl-discovery.onflow.org/testnet/authn",
    BLOCTO_FCLCRYPTO_CONTRACT_ADDRESS: "0x5b250a8a85b44a67"
  },
  mainnet: {
    accessNode: "https://rest-mainnet.onflow.org",
    discoveryWallet: "https://fcl-discovery.onflow.org/authn",
    BLOCTO_FCLCRYPTO_CONTRACT_ADDRESS: "0xdb6b70764af4ff68"
  }
};

/* TODO: Change based on your network */
const network = "mainnet"; // mainnet
/* TODO: Change based on your wallet */
// If you are verifying a Blocto wallet, you must use the
// provided `BLOCTO_FCLCRYPTO_CONTRACT_ADDRESS`.
// Otherwise, `fclCryptoContract` can be `null`.
const fclCryptoContract = null; // fclConfigInfo[network].BLOCTO_FCLCRYPTO_CONTRACT_ADDRESS;

config({
  "accessNode.api": fclConfigInfo[network].accessNode,
  "discovery.wallet": fclConfigInfo[network].discoveryWallet,
  "flow.network": network,
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
        fclCryptoContract
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