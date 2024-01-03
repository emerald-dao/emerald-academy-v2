---
title: Account Storage
language: en
layout: examples
---

# Account Storage

In Cadence, accounts (which each have an address) can store and own their own data.

To do so, you need to have special authorized privileges on an `&Account` type. In a transaction, you can specify and thus be granted these privileges in the `prepare` stage to make it clear to the user what you intend to do.

Data is stored at "storage paths". You use the `save` function to store data, `load` to bring it out of storage, and `borrow` to get a reference to it.

```cadence
// Contract file: Test.cdc
// Deployed to 0x01
access(all) contract Test {

   access(all) resource NFT {
      access(all) let id: UInt64
      access(all) let rarity: String
      
      init(rarity: String) {
         self.id = self.uuid
         self.rarity = rarity
      }
   }

   access(all) fun createNFT(rarity: String): @NFT {
      let nft <- create NFT(rarity: rarity)
      return <- nft
   }

}
```

```cadence
// Transaction file: store_nft.cdc
import Test from 0x01

transaction(rarity: String) {

   // `SaveValue` is a special privledge you specify when you want
   // to call the `save` function on an account (store data to the account)
   prepare(signer: auth(SaveValue) &Account) {
      let nft <- Test.createNFT(rarity: rarity, name: name)
      // moves the NFT resource into storage at `/storage/MyNFT`
      signer.storage.save(<- nft, to: /storage/MyNFT)

      /*
       trying to store an asset there again would cause an error,
       because only one thing can be stored at a path at a time

       let nft2 <- Test.createNFT(rarity: rarity, name: name)
       signer.save(<- nft2, to: /storage/MyNFT)
      */
   }

   execute {
      
   }
}
```

```cadence
// Transaction file: borrow_nft.cdc
import Test from 0x01

transaction() {

   // `BorrowValue` is a special privledge you specify when you want
   // to call the `borrow` function on an account (get a reference to
   // data in the account)
   prepare(signer: auth(BorrowValue) &Account) {
      let nft: &Test.NFT = signer.storage.borrow<&Test.NFT>(from: /storage/MyNFT)
                        ?? panic("A Test.NFT type does not exist at the specified storage path.")
      log(nft.name)
   }

   execute {
      
   }
}
```

```cadence
// Transaction file: destroy_nft.cdc
import Test from 0x01

transaction() {

   // `LoadValue` is a special privledge you specify when you want
   // to call the `load` function on an account (take the
   // data out of storage)
   prepare(signer: auth(LoadValue) &Account) {
      let nft: Test.NFT? <- signer.storage.load<@Test.NFT>(from: /storage/MyNFT)
      destroy nft
   }

   execute {
      
   }
}
```