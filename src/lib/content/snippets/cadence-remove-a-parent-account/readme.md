---
layout: examples
---

This snippet was taken from [Flowty's Developer Docs](https://docs.flowty.io/developer-docs/hybrid-custody/resources-and-transactions#common-transactions).

```cadence
import HybridCustody from 0xd8a7e05a7ac670c0

transaction(parent: Address) {
    prepare (acct: AuthAccount) {
        let ownedAccount = acct.borrow<&HybridCustody.OwnedAccount>(from: HybridCustody.OwnedAccountStoragePath)
            ?? panic("owned account not found")
        ownedAccount.removeParent(addr: parent)
    }
}
```