---
title: Transaction Architecture
language: pt
layout: examples
---

# Arquitetura de Transação

As transações têm 2 etapas principais:

1. **preparar** - para acessar/manipular dados dentro da conta do `signatário` (permitido pelo tipo `AuthAccount`)
2. **executar** - para executar ações

Você deve usar variáveis locais, definidas durante a fase de preparação, para depois fazer as coisas na fase de execução.

```cadence
// Transaction file: mint_nft.cdc
import Test from 0x01

transaction(rarity: String, name: String) {

   // create a local variable
   let Collection: &Test.Collection

   prepare(signer: AuthAccount) {
      // access account storage and set the local variable in prepare phase
      self.Collection = signer.borrow<&Test.Collection>(from: /storage/MyCollection) 
                           ?? panic("Signer does not have a Collection set up.")
   }

   execute {
      // perform all other actions in the execute phase,
      // including minting and then storing the NFT
      let nft <- Test.createNFT(rarity: rarity, name: name)
      self.Collection.deposit(token: <- nft)
   }
}
```