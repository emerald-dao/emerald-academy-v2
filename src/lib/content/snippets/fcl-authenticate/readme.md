---
layout: examples
---

```javascript
import { config, authenticate, unauthenticate, currentUser } from "@onflow/fcl";
import { useEffect, useState } from "react";

const fclConfigInfo = {
	emulator: {
		accessNode: 'http://127.0.0.1:8888',
		discoveryWallet: 'http://localhost:8701/fcl/authn',
		discoveryAuthInclude: []
	},
	testnet: {
		accessNode: 'https://rest-testnet.onflow.org',
    discoveryWallet: 'https://fcl-discovery.onflow.org/testnet/authn',
    discoveryAuthnEndpoint: 'https://fcl-discovery.onflow.org/api/testnet/authn',
    // Adds in Dapper + Ledger
		discoveryAuthInclude: ["0x82ec283f88a62e65", "0x9d2e44203cb13051"]
	},
	mainnet: {
		accessNode: 'https://rest-mainnet.onflow.org',
    discoveryWallet: 'https://fcl-discovery.onflow.org/authn',
    discoveryAuthnEndpoint: 'https://fcl-discovery.onflow.org/api/authn',
    // Adds in Dapper + Ledger
		discoveryAuthInclude: ["0xead892083b3e2c6c", "0xe5cd26afebe62781"]
	}
};

const network = 'mainnet';

config({
  "app.detail.title": "Emerald Academy", // the name of your DApp
  "app.detail.icon": "https://academy.ecdao.org/favicon.png", // your DApps icon
  "flow.network": network,
  "accessNode.api": fclConfigInfo[network].accessNode,
  "discovery.wallet": fclConfigInfo[network].discoveryWallet,
  "discovery.authn.endpoint": fclConfigInfo[network].discoveryAuthnEndpoint,
  // adds in opt-in wallets like Dapper and Ledger
  "discovery.authn.include": fclConfigInfo[network].discoveryAuthInclude
});

export default function App() {
  const [user, setUser] = useState({ loggedIn: false, addr: "" });

  // So that the user stays logged in
  // even if the page refreshes
  useEffect(() => {
    currentUser.subscribe(setUser);
  }, []);

  return (
    <div className="App">
      <button onClick={authenticate}>Log In</button>
      <button onClick={unauthenticate}>Log Out</button>
      <p>{user.loggedIn ? `Welcome, ${user.addr}!` : "Please log in."}</p>
    </div>
  );
}
```