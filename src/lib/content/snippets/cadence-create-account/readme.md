---
layout: examples
---

```cadence
transaction (publicKey: String) {
  prepare(signer: auth(BorrowValue) &Account) {
    let key = PublicKey(
      publicKey: publicKey.decodeHex(),
      signatureAlgorithm: SignatureAlgorithm.ECDSA_P256
    )

    let account = Account(payer: signer)

    account.keys.add(
      publicKey: key,
      hashAlgorithm: HashAlgorithm.SHA3_256,
      weight: 1000.0
    )
  }
}
```
