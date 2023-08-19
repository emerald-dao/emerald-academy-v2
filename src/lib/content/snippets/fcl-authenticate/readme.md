---
layout: examples
---

```javascript
import { config, authenticate, unauthenticate, currentUser } from "@onflow/fcl";
import { useEffect, useState } from "react";

// For mainnet:
config({
  "accessNode.api": "https://rest-mainnet.onflow.org",
  "discovery.wallet": "https://fcl-discovery.onflow.org/authn",
  "flow.network": "mainnet",
  "discovery.authn.include": ["0xead892083b3e2c6c"] // adds in Dapper Wallet
});

// For testnet:
// config({
//   "accessNode.api": "https://rest-testnet.onflow.org",
//   "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
//   "flow.network": "testnet",
//   "discovery.authn.include": ["0x82ec283f88a62e65"] // adds in Dapper Wallet
// });

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