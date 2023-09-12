---
layout: examples
---

This snippet was taken from [Flowty's Developer Docs](https://docs.flowty.io/developer-docs/hybrid-custody/resources-and-transactions#common-transactions).

```cadence
import HybridCustody from 0xd8a7e05a7ac670c0

transaction(child: Address) {
    prepare (acct: AuthAccount) {
        let manager = acct.borrow<&HybridCustody.Manager>(from: HybridCustody.ManagerStoragePath)
            ?? panic("manager not found")
        manager.removeChild(addr: child)
    }
}
```