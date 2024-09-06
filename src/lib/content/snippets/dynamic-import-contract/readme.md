---
layout: examples
---

Your contract must implement a contract interface in order to be imported. In this case, we're borrowing a contract that implements the `NonFungibleToken` contract interface.

You can only access fields/functions present in the contract interface.

```cadence
import NonFungibleToken from 0x1d7e57aa55817448

access(all) fun main(contractAddress: Address, contractName: String) {
  let importedContract = getAccount(contractAddress).contracts.borrow<&{NonFungibleToken}>(name: contractName)
                    ?? panic("This contract does not exist in this account.")

  // this part isn't important, but just shows how you can then use it
  let emptyCollection <- importedContract.createEmptyCollection(nftType: Type<@{NonFungibleToken.NFT}>())
  destroy emptyCollection
}
```
