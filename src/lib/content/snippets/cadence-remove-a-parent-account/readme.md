---
layout: examples
---

A child account is able to remove parent accounts at any time. Doing so will prevent the removed parent from accessing any new capabilities. However, it will not unlink any existing capabilities the parent already has.

*This snippet was taken from [Flowty's Developer Docs](https://docs.flowty.io/developer-docs/hybrid-custody/resources-and-transactions#common-transactions).*

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