import FlowToken from "../utility/FlowToken.cdc"
import FungibleToken from "../utility/FungibleToken.cdc"
import SendTokenMessage from "../SendTokenMessage.cdc"

transaction(amount: UFix64, receiver: Address, message: String?) {

  let Payment: @FlowToken.Vault
  let ReceiverVault: &FlowToken.Vault{FungibleToken.Receiver}
  
  prepare(signer: AuthAccount) {
    let paymentVault = signer.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault)!
    self.Payment <- paymentVault.withdraw(amount: amount) as! @FlowToken.Vault
    self.ReceiverVault = getAccount(receiver).getCapability(/public/flowTokenReceiver)
                    .borrow<&FlowToken.Vault{FungibleToken.Receiver}>()!
  }

  execute {
    SendTokenMessage.deliver(vault: <- self.Payment, receiverPath: /public/flowTokenReceiver, receiver: receiver, message: message)
  }
}
 