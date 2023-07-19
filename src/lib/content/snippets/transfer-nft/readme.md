---
layout: examples
---

```cadence
import NonFungibleToken from "NonFungibleToken"
import ExampleNFT from "ExampleNFT"

// The person trasnferring the NFT is the one who signs this

transaction(recipient: Address, nftID: UInt64) {

    // Reference to the withdrawer's collection
    let withdrawRef: &ExampleNFT.Collection

    // Reference of the collection to deposit the NFT to
    let depositRef: &ExampleNFT.Collection{NonFungibleToken.Receiver}

    prepare(signer: AuthAccount) {
        // borrow a reference to the signer's NFT collection
        self.withdrawRef = signer.borrow<&ExampleNFT.Collection>(from: ExampleNFT.CollectionStoragePath)
                ?? panic("Account does not store an object at the specified path")

        self.depositRef = getAccount(recipient).getCapability(ExampleNFT.CollectionPublicPath)
                            .borrow<&ExampleNFT.Collection{NonFungibleToken.CollectionPublic}>()
                            ?? panic("Could not borrow a reference to the receiver's collection")

    }

    execute {
        // withdraw the NFT from the owner's collection
        let nft <- self.withdrawRef.withdraw(withdrawID: nftID)

        // Deposit the NFT in the recipient's collection
        self.depositRef.deposit(token: <-nft)
    }
}
```