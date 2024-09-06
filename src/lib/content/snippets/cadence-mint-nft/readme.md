---
layout: examples
---

```cadence
import Avataaars from 0xcb9a812737bbc679
import NonFungibleToken from 0x1d7e57aa55817448
import MetadataViews from 0x1d7e57aa55817448

transaction() {

  let Collection: &Avataaars.Collection

  prepare(signer: auth(Storage, Capabilities) &Account) {
    // if the signer does not have an Avataaars collection set up, then do that here
    if signer.storage.borrow<&Avataaars.Collection>(from: Avataaars.CollectionStoragePath) == nil {
      // save the Avataaars collection to storage
      signer.storage.save(
        <- Avataaars.createEmptyCollection(nftType: Type<@Avataaars.NFT>()),
        to: Avataaars.CollectionStoragePath
      )

      // publish a public capability
      let cap = signer.capabilities.storage.issue<&Avataaars.Collection>(Avataaars.CollectionStoragePath)
      signer.capabilities.publish(cap, at: Avataaars.CollectionPublicPath)
    }

    self.Collection = signer.storage.borrow<&Avataaars.Collection>(from: Avataaars.CollectionStoragePath)!
  }

  execute {
    // borrow the public minter, which allows anyone to mint
    let minter: &{Avataaars.MinterPublic} = Avataaars.borrowMinter()
    // mint the NFT
    minter.mintNFT(recipient: self.Collection)
  }
}
```
