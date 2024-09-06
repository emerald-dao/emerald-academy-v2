---
layout: examples
---

```cadence
import NonFungibleToken from 0x1d7e57aa55817448
import Avataaars from 0xcb9a812737bbc679

// The person trasnferring the NFT is the one who signs this

transaction(nftIDs: [UInt64], recipients: [Address]) {

    // Reference to the withdrawer's collection
    let withdrawRef: auth(NonFungibleToken.Withdraw) &Avataaars.Collection

    prepare(signer: auth(Storage) &Account) {
        // borrow a reference to the signer's NFT collection
        self.withdrawRef = signer.storage.borrow<auth(NonFungibleToken.Withdraw) &Avataaars.Collection>
                            (from: Avataaars.CollectionStoragePath)
                            ?? panic("Account does not store an object at the specified path")
    }

    execute {
        for i, nftID in nftIDs {
            // get recipient address for this nftID
            let recipient: Address = recipients[i]

            // Reference of the collection to deposit the NFT to
            let depositRef = getAccount(recipient).capabilities.borrow<&Avataaars.Collection>(Avataaars.CollectionPublicPath)
                                ?? panic("Could not borrow a reference to the receiver's collection")

            // withdraw the NFT from the owner's collection
            let nft <- self.withdrawRef.withdraw(withdrawID: nftID)

            // Deposit the NFT in the recipient's collection
            depositRef.deposit(token: <- nft)
        }
    }
}
```
