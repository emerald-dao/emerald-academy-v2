---
layout: examples
---

This snippet was taken from [Flowty's Developer Docs](https://docs.flowty.io/developer-docs/hybrid-custody/resources-and-transactions#common-transactions).

```cadence
import HybridCustody from 0xd8a7e05a7ac670c0
import CapabilityFactory from 0xd8a7e05a7ac670c0
import CapabilityFilter from 0xd8a7e05a7ac670c0
import MetadataViews from 0x1d7e57aa55817448

transaction(childAddress: Address, name: String, description: String, thumbnailURL: String) {
    prepare(acct: AuthAccount) {
        if acct.borrow<&HybridCustody.Manager>(from: HybridCustody.ManagerStoragePath) == nil {
            let m <- HybridCustody.createManager(filter: nil)
            acct.save(<- m, to: HybridCustody.ManagerStoragePath)

            acct.unlink(HybridCustody.ManagerPublicPath)
            acct.unlink(HybridCustody.ManagerPrivatePath)

            acct.link<&HybridCustody.Manager{HybridCustody.ManagerPrivate, HybridCustody.ManagerPublic}>(HybridCustody.ManagerPrivatePath, target: HybridCustody.ManagerStoragePath)
            acct.link<&HybridCustody.Manager{HybridCustody.ManagerPublic}>(HybridCustody.ManagerPublicPath, target: HybridCustody.ManagerStoragePath)
        }

        let inboxName = HybridCustody.getChildAccountIdentifier(acct.address)
        let cap = acct.inbox.claim<&HybridCustody.ChildAccount{HybridCustody.AccountPrivate, HybridCustody.AccountPublic, MetadataViews.Resolver}>(inboxName, provider: childAddress)
            ?? panic("child account cap not found")

        let manager = acct.borrow<&HybridCustody.Manager>(from: HybridCustody.ManagerStoragePath)
            ?? panic("manager no found")

        manager.addAccount(cap: cap)

        let thumbnail = MetadataViews.HTTPFile(url: thumbnailURL)
        let display = MetadataViews.Display(name: name, description: description, thumbnail: thumbnail)
        manager.setChildAccountDisplay(address: childAddress, display)
    }
}
```