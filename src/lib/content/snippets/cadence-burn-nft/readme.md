---
layout: examples
---

```cadence
import Avataaars from 0xcb9a812737bbc679

transaction(nftID: UInt64) {

  let Collection: auth(NonFungibleToken.Withdraw) &Avataaars.Collection

  prepare(signer: auth(Storage) &Account) {
    // borrow a reference to the signer's collection
    self.Collection = signer.storage.borrow<auth(NonFungibleToken.Withdraw) &Avataaars.Collection>
                        (from: Avataaars.CollectionStoragePath)
                        ?? panic("The signer does not have an Avataaars collection set up, and therefore no NFTs to burn.")
  }

  execute {
    // withdraw the nft from the collection
    let nft <- self.Collection.withdraw(withdrawID: nftID)

    // destroy, or "burn", the nft
    destroy nft
  }
}
```
