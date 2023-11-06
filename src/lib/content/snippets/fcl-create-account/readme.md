---
layout: examples
---

```javascript
import { mutate, config, tx, unauthenticate } from "@onflow/fcl";

config({
  "accessNode.api": "https://rest-testnet.onflow.org",
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn"
});

async function createAccount() {
  // replace with your public key
  const publicKey = "fc1701c73cab29991b8f3c902672a22c13dbfbfc99054cfe47e0de64afc521bfd7b4250e20cae6e296819539712b32166f46c1e6d74427ff1c08422b0f600e98";
  const txHash = await mutate({
    cadence: `
    transaction (publicKey: String) {
      prepare(signer: AuthAccount) {
        let key = PublicKey(
          publicKey: publicKey.decodeHex(),
          signatureAlgorithm: SignatureAlgorithm.ECDSA_P256
        )

        let account = AuthAccount(payer: signer)

        account.keys.add(
            publicKey: key,
            hashAlgorithm: HashAlgorithm.SHA3_256,
            weight: 1000.0
        )
      }
    }
    `,
    args: (arg, t) => [arg(publicKey, t.String)],
    limit: 1000
  });

  console.log({ txHash });
  const txResult = await tx(txHash).onceExecuted();
  console.log({ txResult });
  const { events } = txResult;

  // we need to find system event `flow.AccountCreated` in list of events
  const event = events.find((event) => event.type.includes("AccountCreated"));
  // then we can extract address from it
  const accountAddress = event.data.address;
  console.log({ accountAddress });
}
```