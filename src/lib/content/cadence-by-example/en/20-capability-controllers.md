---
title: Capability Controllers
language: en
layout: examples
---

# Capability Controllers

When we store data to an account at a storage path, that data is only accessible by the account owner.

To make data stored at a storage path available to a public path, we can issue (create) a new capability and publish it. That capability can then be fetched by anyone and gives them access to that public data.

We can restrict capabilities by restricting certain access, so we only share certain data / functions we want the accessor of our capability to have.

```cadence
// Contract file: Test.cdc
// Deployed to 0x01
access(all) contract Test {

   access(all) entitlement NameChange

   access(all) resource NFT {
      access(all) let id: UInt64
      access(all) var name: String

      access(NameChange) fun changeName(newName: String) {
         self.name = newName
      }
      
      init(name: String) {
         self.id = self.uuid
         self.name = name
      }
   }

   access(all) fun createNFT(name: String): @NFT {
      let nft <- create NFT(name: name)
      return <- nft
   }

}
```

```cadence
// Transaction file: store_nft.cdc
import Test from 0x01

transaction(name: String) {

   prepare(signer: auth(SaveValue, Capabilities) &Account) {
      let nft <- Test.createNFT(name: name)
      // moves the NFT resource into storage at `/storage/MyNFT`
      signer.storage.save(<- nft, to: /storage/MyNFT)

      // Creates a capability at `/public/MyPublicNFT` for anyone to borrow.
      // 
      // Notice we link the type: `&Test.NFT`, which is not authorized to call `changeName`.
      // We don't want other people changing our NFT's name! :)
      let cap = signer.capabilities.issue<&Test.NFT>(/storage/MyNFT)
      signer.capabilities.publish(cap, /public/MyPublicNFT)
   }

   execute {}
}
```

```cadence
// Script file: read_nft.cdc
import Test from 0x01

access(all) fun main(owner: Address): NFTData {
   // use the built-in `getAccount` function to get 
   // the owner's `&Account`
   let ownerAccount: &Account = getAccount(owner)

   let nftCap: Capability<&Test.NFT> = ownerAccount
                                          .capabilities
                                          .get<&Test.NFT>(/public/MyPublicNFT) 
                                          ?? panic("Not a valid NFT capability.")
   let nftRef: &Test.NFT = nftCap.borrow() ?? panic("Not a valid NFT reference.")

   /*
      NOTE: Instead of getting the capability and borrowing it, we can reduce this
      to 1 line by using `capabilities.borrow` directly:

      let nftRef: &Test.NFT = ownerAccount
                              .capabilities
                              .borrow<&Test.NFT>(/public/MyPublicNFT) 
                              ?? panic("Not a valid NFT reference.")
   */

   return NFTData(nftRef.id, nftRef.name)
}

access(all) struct NFTData {
   access(all) let id: UInt64
   access(all) let name: String

   init(_ i: UInt64, _ n: String) {
      self.id = i
      self.name = n
   }
}
```