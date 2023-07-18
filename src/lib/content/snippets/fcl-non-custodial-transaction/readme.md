---
layout: examples
---

```javascript
// signer.js file
import { sansPrefix, withPrefix } from "@onflow/fcl";
import { SHA3 } from "sha3";
import elliptic from "elliptic";

const curve = new elliptic.ec("p256");

const hashMessageHex = (msgHex) => {
  const sha = new SHA3(256);
  sha.update(Buffer.from(msgHex, "hex"));
  return sha.digest();
};

const signWithKey = (privateKey, msgHex) => {
  const key = curve.keyFromPrivate(Buffer.from(privateKey, "hex"));
  const sig = key.sign(hashMessageHex(msgHex));
  const n = 32;
  const r = sig.r.toArrayLike(Buffer, "be", n);
  const s = sig.s.toArrayLike(Buffer, "be", n);
  return Buffer.concat([r, s]).toString("hex");
};

export const signer = async (account) => {
  // We are hard coding these values here, but you can pass those values from outside as well.
  // For example, you can create curried function:
  // const signer = (keyId, accountAdddress, pkey) => (account) => {...}
  // and then create multiple signers for different key indices

  const keyId = 0;
  const accountAddress = "0x5593df7d286bcdb8";
  const pkey = "248f1ea7b4a058c39dcc97d91e6a5d0aa7afbc931428561b6efbc7bd0f5e0875";

  // authorization function need to return an account
  return {
    ...account, // bunch of defaults in here, we want to overload some of them though
    tempId: `${accountAddress}-${keyId}`, // tempIds are more of an advanced topic, for 99% of the times where you know the address and keyId you will want it to be a unique string per that address and keyId
    addr: sansPrefix(accountAddress), // the address of the signatory, currently it needs to be without a prefix right now
    keyId: Number(keyId), // this is the keyId for the accounts registered key that will be used to sign, make extra sure this is a number and not a string

    // This is where magic happens!
    signingFunction: async (signable) => {
      // Singing functions are passed a signable and need to return a composite signature
      // signable.message is a hex string of what needs to be signed.
      const signature = await signWithKey(pkey, signable.message);
      return {
        addr: withPrefix(accountAddress), // needs to be the same as the account.addr but this time with a prefix, eventually they will both be with a prefix
        keyId: Number(keyId), // needs to be the same as account.keyId, once again make sure its a number and not a string
        signature // this needs to be a hex string of the signature, where signable.message is the hex value that needs to be signed
      };
    }
  };
};
```

```javascript
import { config, mutate } from "@onflow/fcl";
import { signer } from "./signer";

// NOTE: you can have different accounts be responsible
// for the `payer`, `proposer`, and `authorizations` below.
//
// for example, you can combine the FCL Custodial Wallet example
// which uses `fcl.authz` with the `signer` we've created here
// to have both a server admin AND frontend user coordinate
// on the transaction

config({
  "accessNode.api": "https://rest-testnet.onflow.org"
});

async function shiftCounter(x, y) {
  const txId = await mutate({
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
    payer: signer,
    // the person proposing the tx (uses their public key to send the tx)
    proposer: signer,
    // the person authorizing the tx (gets put as an `AuthAccount` in prepare phase)
    authorizations: [signer],
    limit: 999
  });

  console.log({ txId });
}

shiftCounter("12", "3");
```