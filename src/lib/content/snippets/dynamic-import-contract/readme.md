---
layout: examples
---

```cadence
import NonFungibleToken from 0x1d7e57aa55817448

pub fun main(contractAddress: Address, contractName: String): UInt64 {
  let contract = getAccount(contractAddress).contracts.borrow<&NonFungibleToken>(name: contractName)
                    ?? panic("This contract does not exist in this account.")

  return contract.totalSupply
}
```