---
layout: examples
---

```javascript
import { config, mutate, authz } from "@onflow/fcl";

// NOTE: `authz` is automatically configured
// to be the signed in user through FCL discovery (blocto, lilico, etc)
//
// this is NOT for sending a tx using a non-custodial
// account (private key)

config({
  "accessNode.api": "https://rest-testnet.onflow.org",
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn"
});

async function sendTransaction(x, y) {
  const transactionId = await mutate({
    cadence: `
    transaction(x: Int, y: Int) {
      prepare(signer: AuthAccount) {

      }

      execute {
        // do nothing
      }
    }
    `,
    args: (arg, t) => [arg(x, t.Int), arg(y, t.Int)],
    // the person paying for the tx
    payer: authz,
    // the person proposing the tx (uses their public key to send the tx)
    proposer: authz,
    // the person authorizing the tx (gets put as an `AuthAccount` in prepare phase)
    authorizations: [authz]
  });

  console.log({ transactionId });
}

sendTransaction("3", "5");
```