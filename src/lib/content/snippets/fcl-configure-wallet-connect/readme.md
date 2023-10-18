---
layout: examples
---

```javascript
import * as fcl from "@onflow/fcl";
import { init } from "@onflow/fcl-wc";
import { useEffect, useState } from "react";

const fclConfigInfo = {
  testnet: {
    accessNode: "https://rest-testnet.onflow.org",
    discoveryWallet: "https://fcl-discovery.onflow.org/testnet/authn",
    discoveryAuthnEndpoint: 'https://fcl-discovery.onflow.org/api/testnet/authn',
  },
  mainnet: {
    accessNode: "https://rest-mainnet.onflow.org",
    discoveryWallet: "https://fcl-discovery.onflow.org/authn",
    discoveryAuthnEndpoint: 'https://fcl-discovery.onflow.org/api/authn',
  }
};

const network = "mainnet";

fcl.config({
  "app.detail.title": "Test DApp", // the name of your DApp
  "app.detail.icon": "https://i.imgur.com/rOhzi74.png", // your DApps icon
  "flow.network": network,
  "accessNode.api": fclConfigInfo[network].accessNode,
  "discovery.wallet": fclConfigInfo[network].discoveryWallet,
  "discovery.authn.endpoint": fclConfigInfo[network].discoveryAuthnEndpoint
});

// add WalletConnect for mobile apps.
// you must get a wallet connect project id:
// https://cloud.walletconnect.com/sign-in
const WALLET_CONNECT_PROJECT_ID = "YOUR PROJECT ID";
if (network === "testnet" || network === "mainnet") {
  init({
    projectId: WALLET_CONNECT_PROJECT_ID || "aeda179a10c5d539ed612b67d2b61cdf",
    metadata: {
      name: "Emerald Academy",
      description: "The best Flow blockchain educational resource of all time.",
      url: "https://academy.ecdao.org",
      icons: ["https://academy.ecdao.org/favicon.png"]
    },
    includeBaseWC: true, // makes WalletConnect show up itself
    wallets: [], // no idea, just leave empty
    wcRequestHook: null, // literally 0 idea, just leave null
    pairingModalOverride: null // ???????
  }).then(({ FclWcServicePlugin }) => {
    fcl.pluginRegistry.add(FclWcServicePlugin);
  });
}

export default function App() {
  const [user, setUser] = useState({ loggedIn: false, addr: "" });

  // So that the user stays logged in
  // even if the page refreshes
  useEffect(() => {
    fcl.currentUser.subscribe(setUser);
  }, []);

  return (
    <div className="App">
      <button onClick={fcl.authenticate}>Log In</button>
      <button onClick={fcl.unauthenticate}>Log Out</button>
      <p>{user.loggedIn ? `Welcome, ${user.addr}!` : "Please log in."}</p>
    </div>
  );
}

```