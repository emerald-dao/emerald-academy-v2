---
layout: examples
---

```javascript
import { config, currentUser, unauthenticate } from "@onflow/fcl";

config({
  "accessNode.api": "https://rest-testnet.onflow.org",
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn"
});

async function signMessage(message) {
  // message needs to be hex for it to be signed
  const messageHex = Buffer.from(message).toString("hex");
  const sig = await currentUser().signUserMessage(messageHex);

  const keyIds = sig.map((s) => {
    return s.keyId;
  });
  const signatures = sig.map((s) => {
    return s.signature;
  });

  console.log("Key IDs", keyIds);
  console.log("Signatures", signatures);
}

signMessage("I am cool.");
```