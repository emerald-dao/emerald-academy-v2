import FungibleToken from "./utility/FungibleToken.cdc"

pub contract SendTokenMessage {
    pub event Delivered(tokenType: Type, amount: UFix64, to: Address, message: String?)

    pub fun deliver(vault: @FungibleToken.Vault, receiverPath: PublicPath, receiver: Address, message: String?) {
        emit Delivered(tokenType: vault.getType(), amount: vault.balance, to: receiver, message: message)

        let receiverVault = getAccount(receiver).getCapability(receiverPath)
                        .borrow<&{FungibleToken.Receiver}>()
                        ?? panic("Receiver does not have a vault set up to accept this delivery.")
        receiverVault.deposit(from: <- vault)
    }
}