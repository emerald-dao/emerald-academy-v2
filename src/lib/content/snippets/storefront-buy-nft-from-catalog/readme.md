---
layout: examples
---

```cadence
import FlowToken from 0xFlowToken
import FungibleToken from 0xFungibleToken
import NonFungibleToken from 0xNonFungibleToken
import NFTCatalog from 0xNFTCatalog
import NFTStorefrontV2 from 0xNFTStorefrontV2
import MetadataViews from 0xMetadataViews
import ExampleNFT from 0xExampleNFT

transaction(collectionIdentifier: String, listingResourceID: UInt64, storefrontAddress: Address, commissionRecipient: Address?) {
    let paymentVault: @FungibleToken.Vault
    let collection: &AnyResource{NonFungibleToken.CollectionPublic}
    let storefront: &NFTStorefrontV2.Storefront{NFTStorefrontV2.StorefrontPublic}
    let listing: &NFTStorefrontV2.Listing{NFTStorefrontV2.ListingPublic}
    var commissionRecipientCap: Capability<&{FungibleToken.Receiver}>?

    prepare(acct: AuthAccount) {
        self.commissionRecipientCap = nil

        let catalog = NFTCatalog.getCatalogEntry(collectionIdentifier: collectionIdentifier) ?? panic("Collection not found in NFT catalog")
        self.storefront = getAccount(storefrontAddress)
            .getCapability<&NFTStorefrontV2.Storefront{NFTStorefrontV2.StorefrontPublic}>(
                NFTStorefrontV2.StorefrontPublicPath
            )!
            .borrow()
            ?? panic("Could not borrow Storefront from provided address")
        self.listing = self.storefront.borrowListing(listingResourceID: listingResourceID)
                    ?? panic("No listing with that ID in Storefront")        
        let nftRef = self.listing.borrowNFT() ?? panic("nft not found")
        let price = self.listing.getDetails().salePrice

        let mainFlowVault = acct.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault)
            ?? panic("Could not borrow FlowToken vault")
        self.paymentVault <- mainFlowVault.withdraw(amount: price)

        let collectionCap = acct.getCapability<&AnyResource{NonFungibleToken.CollectionPublic}>(
            catalog.collectionData.publicPath
        )
        if !collectionCap.check() {
            if acct.borrow<&AnyResource>(from: catalog.collectionData.storagePath) == nil {
                // Set up the NFT collection if it doesn't exist
                let collectionData = nftRef.resolveView(Type<MetadataViews.NFTCollectionData>())! as! MetadataViews.NFTCollectionData
                acct.save(<- collectionData.createEmptyCollection(), to: catalog.collectionData.storagePath)
            }
            acct.unlink(catalog.collectionData.publicPath)
            acct.link<&ExampleNFT.Collection{
                ExampleNFT.CollectionPublic,
                NonFungibleToken.CollectionPublic,
                NonFungibleToken.Receiver,
                MetadataViews.ResolverCollection
            }>(
                catalog.collectionData.publicPath,
                target: catalog.collectionData.storagePath
            )
        }
        self.collection = collectionCap.borrow() ?? panic("Could not borrow NFT collection receiver")
        
        let commissionAmount = self.listing.getDetails().commissionAmount
        if commissionRecipient != nil && commissionAmount != 0.0 {
            self.commissionRecipientCap = getAccount(commissionRecipient!).getCapability<&{FungibleToken.Receiver}>(/public/flowTokenReceiver)
            assert(self.commissionRecipientCap.check(), message: "Commission Recipient doesn't have flowtoken receiving capability")
        } else {
            panic("Commission recipient can not be empty when commission amount is non zero")
        }
    }

    execute {
        let item <- self.listing.purchase(
            payment: <-self.paymentVault,
            commissionRecipient: self.commissionRecipientCap
        )
        self.collection.deposit(token: <-item)
    }
}
```