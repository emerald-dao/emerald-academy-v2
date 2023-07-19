---
layout: examples
---

```javascript
import { config, authenticate, unauthenticate, currentUser } from "@onflow/fcl";
import { useEffect, useState } from "react";

// For mainnet:
config({
  "accessNode.api": "https://rest-mainnet.onflow.org",
  "discovery.wallet": "https://fcl-discovery.onflow.org/authn"
});

// For testnet:
// config({
//   "accessNode.api": "https://rest-testnet.onflow.org",
//   "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn"
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