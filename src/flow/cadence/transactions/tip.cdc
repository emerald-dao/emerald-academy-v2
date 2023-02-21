import FlowToken from "../utility/FlowToken.cdc"
import FungibleToken from "../utility/FungibleToken.cdc"

transaction(amount: UFix64, receiver: Address) {

  let FlowVault: &FlowToken.Vault
  let ReceiverVault: &FlowToken.Vault{FungibleToken.Receiver}
  
  prepare(signer: AuthAccount) {
    self.FlowVault = signer.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault)!
    self.ReceiverVault = getAccount(receiver).getCapability(/public/flowTokenReceiver)
                    .borrow<&FlowToken.Vault{FungibleToken.Receiver}>()!
  }

  execute {
    let tip <- self.FlowVault.withdraw(amount: amount)
    self.ReceiverVault.deposit(from: <- tip)
  }
}
 