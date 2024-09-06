---
layout: examples
---

```cadence
transaction(
  contractCode: String, // must be a hex string of your contract code
  contractName: String // must match the name of the contract you're deploying
) {
  prepare(signer: auth(AddContract) &Account) {
      signer.contracts.add(
          name: contractName,
          code: contractCode.decodeHex()
      )
  }
}
```
