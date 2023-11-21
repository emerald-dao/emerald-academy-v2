---
title: Nested Resources
language: pt
layout: examples
---

# Recursos aninhados

Ao armazenar recursos em nossa conta, é irritante (e muito inconveniente) armazenar cada recurso em um caminho de armazenamento diferente.

Imagine se você comprasse 100 NFTs e tivesse que armazenar cada um separadamente, e depois lembrar onde eles estavam para poder acessá-los no futuro. Não é bom.

Em vez disso, podemos definir um recurso wrapper (por exemplo, "Coleção") que podemos armazenar em 1 caminho de armazenamento e que armazena recursos aninhados ("NFT").

```cadence
// Contract file: Test.cdc
// Deployed to 0x01
pub contract Test {

   pub resource NFT {
      pub let id: UInt64
      pub let rarity: String
      pub var name: String
      
      init(rarity: String, name: String) {
         self.id = self.uuid
         self.rarity = rarity
         self.name = name
      }
   }

   pub resource interface ICollection {
      pub fun deposit(token: @NFT)
      pub fun getIDs(): [UInt64]
      pub fun borrowNFT(id: UInt64): &NFT?
   }

   pub resource Collection: ICollection {
      pub let ownedNFTs: @{UInt64: NFT}

      pub fun deposit(token: @NFT) {
         self.ownedNFTs[token.id] <-! token
      }

      pub fun withdraw(withdrawID: UInt64): @NFT {
         let nft <- self.ownedNFTs.remove(key: withdrawID) ?? panic("NFT does not exist.")
         return <- nft
      }

      pub fun borrowNFT(id: UInt64): &NFT? {
         return &self.ownedNFTs[id] as &NFT?
      }

      pub fun getIDs(): [UInt64] {
         return self.ownedNFTs.keys
      }

      init() {
         self.ownedNFTs <- {}
      }

      // when a resource stores nested resources, you must
      // define a custom destroy function that defines what 
      // to do with the nested resources when the wrapper
      // (Collection) is destroyed
      // it gets automatically run when the Collection
      // resource is destroyed
      destroy() {
         destroy self.ownedNFTs
      }
   }

   pub fun createNFT(rarity: String, name: String): @NFT {
      let nft <- create NFT(rarity: rarity, name: name)
      return <- nft
   }

   pub fun createCollection(): @Collection {
      return <- create Collection()
   }

}
```

```cadence
// Transaction file: create_collection.cdc
import Test from 0x01

transaction() {

   prepare(signer: AuthAccount) {
      // moves the Collection resource into storage at `/storage/MyCollection`
      signer.save(<- Test.createCollection(), to: /storage/MyCollection)

      // Creates a capability at `/public/MyCollection` for anyone to borrow.
      // 
      // Notice we restrict the linked type to `&Collection{ICollection}`, so the public
      // won't be able to call our `withdraw` function since it's not in the
      // `ICollection` interface.
      signer.link<&Test.Collection{Test.ICollection}>(/public/MyCollection, target: /storage/MyCollection)
   }

   execute {
      
   }
}
```

```cadence
// Transaction file: store_nft.cdc
import Test from 0x01

transaction(rarity: String, name: String) {

   let Collection: &Test.Collection

   prepare(signer: AuthAccount) {
      self.Collection = signer.borrow<&Test.Collection>(from: /storage/MyCollection) 
                           ?? panic("Signer does not have a Collection set up.")
   }

   execute {
      let nft <- Test.createNFT(rarity: rarity, name: name)
      
      self.Collection.deposit(token: <- nft)
   }
}
```

```cadence
// Script file: read_nfts.cdc
import Test from 0x01

pub fun main(owner: Address): [NFTData] {
   // PublicAccount is a type that lets us borrow public
   // capabilities on that account's storage
   let ownerPublicAccount: PublicAccount = getAccount(owner)

   let collectionCapability: Capability<&Test.Collection{Test.ICollection}> = ownerPublicAccount.getCapability<&Test.Collection{Test.ICollection}>(/public/MyCollection)

   let collectionRef: &Test.Collection{Test.ICollection} = collectionCapability.borrow() ?? panic("Not a valid Collection capability.")

   /*
    INVALID: `withdraw` is not accessible on the restricted type.
    NOTE: Calling withdraw in this script wouldn't do anything
    because scripts don't modify data. But you can imagine
    allowing this to be called in a transaction would be a problem.
   
    collectionRef.withdraw(withdrawID: 10)
   */

   let result: [NFTData] = []
   for id in collectionRef.getIDs() {
      let nft: &Test.NFT = collectionRef.borrowNFT(id: id)!
      result.append(NFTData(nftRef.id, nftRef.rarity, nftRef.name))
   }

   return result
}

pub struct NFTData {
   pub let id: UInt64
   pub let rarity: String
   pub let name: String

   init(_ i: UInt64, _ r: String, _ n: String) {
      self.id = i
      self.rarity = r
      self.name = n
   }
}
```