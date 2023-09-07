---
layout: examples
---

```cadence
import Avataaars from 0xcb9a812737bbc679
import NonFungibleToken from 0x1d7e57aa55817448
import MetadataViews from 0x1d7e57aa55817448

transaction() {

  let Collection: &Avataaars.Collection

  prepare(signer: AuthAccount) {
    // if the signer does not have an Avataaars collection set up, then do that here
    if signer.borrow<&Avataaars.Collection>(from: Avataaars.CollectionStoragePath) == nil {
      // save the Avataaars collection to storage
      signer.save(<- Avataaars.createEmptyCollection(), to: Avataaars.CollectionStoragePath)
      // link it to the public so people can read data from it
      signer.link<&Avataaars.Collection{Avataaars.AvataaarsCollectionPublic, NonFungibleToken.Receiver, NonFungibleToken.CollectionPublic, MetadataViews.ResolverCollection}>(Avataaars.CollectionPublicPath, target: Avataaars.CollectionStoragePath)
    }

    self.Collection = signer.borrow<&Avataaars.Collection>(from: Avataaars.CollectionStoragePath)!
  }

  execute {
    // borrow the public minter, which allows anyone to mint
    let minter: &{Avataaars.MinterPublic} = Avataaars.borrowMinter()
    // mint the NFT
    minter.mintNFT(recipient: self.Collection)
  }
}
```