---
layout: examples
---

This snippet was taken from [Flowty's Developer Docs](https://docs.flowty.io/developer-docs/hybrid-custody/resources-and-transactions#common-transactions).

```cadence
#allowAccountLinking

import HybridCustody from 0xd8a7e05a7ac670c0
import CapabilityFactory from 0xd8a7e05a7ac670c0
import CapabilityFilter from 0xd8a7e05a7ac670c0
import MetadataViews from 0x1d7e57aa55817448

transaction(name: String, desc: String, thumbnailURL: String) {
    prepare(acct: AuthAccount) {
        var acctCap = acct.getCapability<&AuthAccount>(HybridCustody.LinkedAccountPrivatePath)
        if !acctCap.check() {
            acctCap = acct.linkAccount(HybridCustody.LinkedAccountPrivatePath)!
        }

        if acct.borrow<&HybridCustody.OwnedAccount>(from: HybridCustody.OwnedAccountStoragePath) == nil {
            let ownedAccount <- HybridCustody.createOwnedAccount(acct: acctCap)
            acct.save(<-ownedAccount, to: HybridCustody.OwnedAccountStoragePath)
        }

        // check that paths are all configured properly
        acct.unlink(HybridCustody.OwnedAccountPrivatePath)
        acct.link<&HybridCustody.OwnedAccount{HybridCustody.BorrowableAccount, HybridCustody.OwnedAccountPublic, MetadataViews.Resolver}>(HybridCustody.OwnedAccountPrivatePath, target: HybridCustody.OwnedAccountStoragePath)

        acct.unlink(HybridCustody.OwnedAccountPublicPath)
        acct.link<&HybridCustody.OwnedAccount{HybridCustody.OwnedAccountPublic, MetadataViews.Resolver}>(HybridCustody.OwnedAccountPublicPath, target: HybridCustody.OwnedAccountStoragePath)

        let child = acct.borrow<&HybridCustody.OwnedAccount>(from: HybridCustody.OwnedAccountStoragePath)!

        let thumbnail = MetadataViews.HTTPFile(url: thumbnailURL)
        let display = MetadataViews.Display(name: name, description: desc, thumbnail: thumbnail)
        child.setDisplay(display)
    }
}
```