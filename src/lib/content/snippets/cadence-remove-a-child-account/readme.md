---
layout: examples
---

If you are a parent account and no longer wish to have a particular child account anymore, you can unlink it. Doing so will revoke the ability to access a child's capabilities from the parent account, but could be added later if the child publishes their account to the parent again.

*This snippet was taken from [Flowty's Developer Docs](https://docs.flowty.io/developer-docs/hybrid-custody/resources-and-transactions#common-transactions).*

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