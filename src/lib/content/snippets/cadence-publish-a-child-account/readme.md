---
layout: examples
---

Takes the account which will be the child of another account and publishes it for the parent to redeem. The child account must first have been [set up](/en/snippets/cadence-set-up-child-account).

*This snippet was taken from [Flowty's Developer Docs](https://docs.flowty.io/developer-docs/hybrid-custody/resources-and-transactions#common-transactions).*

```cadence
import HybridCustody from 0xd8a7e05a7ac670c0
import CapabilityFactory from 0xd8a7e05a7ac670c0
import CapabilityFilter from 0xd8a7e05a7ac670c0

transaction(parent: Address, factoryAddress: Address, filterAddress: Address) {
    prepare(acct: AuthAccount) {
        let child = acct.borrow<&HybridCustody.OwnedAccount>(from: HybridCustody.OwnedAccountStoragePath)
            ?? panic("child account not found")

        let factory = getAccount(factoryAddress).getCapability<&CapabilityFactory.Manager{CapabilityFactory.Getter}>(CapabilityFactory.PublicPath)
        assert(factory.check(), message: "factory address is not configured properly")

        let filter = getAccount(filterAddress).getCapability<&{CapabilityFilter.Filter}>(CapabilityFilter.PublicPath)
        assert(filter.check(), message: "capability filter is not configured properly")

        child.publishToParent(parentAddress: parent, factory: factory, filter: filter)
    }
}
```