---
title: Capabilities
language: pt
layout: examples
---

# Capacidades

Quando armazenamos dados em uma conta em um caminho de armazenamento, esses dados só são acessíveis pelo proprietário da conta.

Podemos "vincular" (usando a função `link`) dados armazenados em um caminho de armazenamento a um caminho público, o que cria uma capacidade. A capacidade então atua como uma chave para outras pessoas acessarem esses dados públicos.

Podemos restringir capacidades publicadas em seu tipo, para que compartilhemos apenas certos dados/funções que queremos que o acessor de nossa capacidade tenha.

```cadence
// Contract file: Test.cdc
// Deployed to 0x01
pub contract Test {

   pub resource interface INFT {
      pub let id: UInt64
      pub let rarity: String
      pub var name: String
   }

   pub resource NFT: INFT {
      pub let id: UInt64
      pub let rarity: String
      pub var name: String

      pub fun changeName(newName: String) {
         self.name = newName
      }
      
      init(rarity: String, name: String) {
         self.id = self.uuid
         self.rarity = rarity
         self.name = name
      }
   }

   pub fun createNFT(rarity: String, name: String): @NFT {
      let nft <- create NFT(rarity: rarity, name: name)
      return <- nft
   }

}
```

```cadence
// Transaction file: store_nft.cdc
import Test from 0x01

transaction(rarity: String, name: String) {

   prepare(signer: AuthAccount) {
      let nft <- Test.createNFT(rarity: rarity, name: name)
      // moves the NFT resource into storage at `/storage/MyNFT`
      signer.save(<- nft, to: /storage/MyNFT)

      // Creates a capability at `/public/MyPublicNFT` for anyone to borrow.
      // 
      // Notice we restrict the linked type to `&NFT{INFT}`, so the public
      // won't be able to call our `changeName` function since it's not in the
      // `INFT` interface.
      signer.link<&Test.NFT{Test.INFT}>(/public/MyPublicNFT, target:/storage/MyNFT)
   }

   execute {
      
   }
}
```

```cadence
// Script file: read_nft.cdc
import Test from 0x01

pub fun main(owner: Address): NFTData {
   // PublicAccount is a type that lets us borrow public
   // capabilities on that account's storage
   let ownerPublicAccount: PublicAccount = getAccount(owner)

   let nftCapability: Capability<&Test.NFT{Test.INFT}> = ownerPublicAccount.getCapability<&Test.NFT{Test.INFT}>(/public/MyPublicNFT)

   let nftRef: &Test.NFT{Test.INFT} = nftCapability.borrow() ?? panic("Not a valid NFT capability.")

   /*
    INVALID: `changeName` is not accessible on the restricted type.
    NOTE: Calling changeName in this script wouldn't do anything
    because scripts don't modify data. But you can imagine
    allowing this to be called in a transaction would be a problem.
   
    nftRef.changeName(newName: "Jacob")
   */

   return NFTData(nftRef.id, nftRef.rarity, nftRef.name)
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