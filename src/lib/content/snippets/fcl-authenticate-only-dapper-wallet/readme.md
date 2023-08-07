---
layout: examples
---

You can change how the Dapper Wallet login appears using the `discovery.wallet.method` field in your config. See comments below.

```javascript
import { config, authenticate, unauthenticate, currentUser } from "@onflow/fcl";
import { useEffect, useState } from "react";

// For mainnet:
config({
  "accessNode.api": "https://rest-mainnet.onflow.org",
  "discovery.wallet": "https://accounts.meetdapper.com/fcl/authn-restricted",
  "flow.network": "mainnet",
  // options for method:
  // POP/RPC: popup within the browser
  // TAB/RPC: separate tab
  // IFRAME/RPC: iframe within the tab
  "discovery.wallet.method": "TAB/RPC"
});

// For testnet:
// config({
//   "accessNode.api": "https://rest-testnet.onflow.org",
//   "discovery.wallet": "https://staging.accounts.meetdapper.com/fcl/authn-restricted",
//   "flow.network": "testnet",
//   "discovery.wallet.method": "TAB/RPC"
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