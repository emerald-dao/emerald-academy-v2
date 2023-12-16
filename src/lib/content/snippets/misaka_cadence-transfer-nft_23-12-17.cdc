import NonFungibleToken from 0x1d7e57aa55817448
import Avataaars from 0xcb9a812737bbc679

// The person trasnferring the NFT is the one who signs this
transaction(recipient: Address, nftID: UInt64) {

    // Reference to the withdrawer's collection
    let withdrawRef: &Avataaars.Collection

    // Reference of the collection to deposit the NFT to
    let depositRef: &Avataaars.Collection{NonFungibleToken.Receiver}

    prepare(signer: AuthAccount) {
        // borrow a reference to the signer's NFT collection
        self.withdrawRef = signer.borrow<&Avataaars.Collection>(from: Avataaars.CollectionStoragePath)
                ?? panic("Account does not store an object at the specified path")

        self.depositRef = getAccount(recipient).getCapability(Avataaars.CollectionPublicPath)
                            .borrow<&Avataaars.Collection{NonFungibleToken.CollectionPublic}>()
                            ?? panic("Could not borrow a reference to the receiver's collection")
