---
title: Account Storage
language: pt
layout: examples
---

# Armazenamento de Conta

Em Cadence, as contas (que possuem um endereço) podem armazenar e possuir seus próprios dados. Em quase todos os casos, você armazena recursos em sua conta.

Para fazer isso, você precisa de acesso a um `AuthAccount`, um tipo que está disponível apenas na etapa `prepare` de uma transação.

Os dados são armazenados em "storage paths". Você usa a função `save` para armazenar dados, `load` para retirá-los do armazenamento e `borrow` para obter uma referência a eles.

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

   prepare(signer: AuthAccount) {
      let nft: &Test.NFT? = signer.borrow<&Test.NFT>(from: /storage/MyNFT)
      log(nft!.name)
   }

   execute {
      
   }
}
```

```cadence
// Transaction file: destroy_nft.cdc
import Test from 0x01

transaction() {

   prepare(signer: AuthAccount) {
      let nft <- signer.load<@Test.NFT>(from: /storage/MyNFT)
      destroy nft
   }

   execute {
      
   }
}
```