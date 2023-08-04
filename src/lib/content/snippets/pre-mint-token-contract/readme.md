---
layout: examples
---

```cadence
import FungibleToken from 0xf233dcee88fe0abe

 access(all) contract ExampleToken: FungibleToken {
    pub var totalSupply: UFix64 

    /// TokensInitialized
    ///
    /// The event that is emitted when the contract is created
    pub event TokensInitialized(initialSupply: UFix64)

    /// TokensWithdrawn
    ///
    /// The event that is emitted when tokens are withdrawn from a Vault
    pub event TokensWithdrawn(amount: UFix64, from: Address?)

    /// TokensDeposited
    ///
    /// The event that is emitted when tokens are deposited to a Vault
    pub event TokensDeposited(amount: UFix64, to: Address?)

    /// TokensMinted
    ///
    /// The event that is emitted when new tokens are minted
    pub event TokensMinted(amount: UFix64)

    pub let TokenVaultStoragePath: StoragePath
	pub let TokenVaultPublicPath: PublicPath
    pub let TokenMinterStoragePath: StoragePath

    pub resource Vault: FungibleToken.Provider, FungibleToken.Receiver, FungibleToken.Balance {
        pub var balance: UFix64

        init(balance: UFix64) {
            self.balance = balance
        }

        pub fun withdraw(amount: UFix64): @FungibleToken.Vault {
            self.balance = self.balance - amount
            emit TokensWithdrawn(amount: amount, from: self.owner?.address)
            return <- create Vault(balance: amount)
        }

        pub fun deposit(from: @FungibleToken.Vault) {
            let vault <- from as! @ExampleToken.Vault
            self.balance = self.balance + vault.balance 
            emit TokensDeposited(amount: vault.balance, to: self.owner?.address)
            vault.balance = 0.0
            destroy vault // Make sure we get rid of the vault
        }

        destroy() {
            ExampleToken.totalSupply = ExampleToken.totalSupply - self.balance
        }
    }

    pub fun createEmptyVault(): @FungibleToken.Vault {
        return <- create Vault(balance: 0.0)
    }

    // Here is our pre mint or initial mint function, it is only going to be called ONCE and only by the contract
    access(contract) fun initialMint(initialMintValue: UFix64): @FungibleToken.Vault {
        return <- create Vault(balance: initialMintValue)
    }

    pub resource Minter {
        pub fun mintTokens(amount: UFix64): @FungibleToken.Vault {
        pre {
                amount > 0.0: "Amount minted must be greater than zero"
            }
            ExampleToken.totalSupply = ExampleToken.totalSupply + amount
            return <- create Vault(balance:amount)
        }
        
    }

    init() {
        self.totalSupply = 500.00 // You can Choose to Hardcode the value as I did, or pass it as a param in the init() declaration.
        self.TokenVaultStoragePath = /storage/ExampleTokenVault
		self.TokenVaultPublicPath = /public/ExampleTokenVault
        self.TokenMinterStoragePath = /storage/ExampleTokenMinter

        self.account.save(<- create Minter(), to: ExampleToken.TokenMinterStoragePath)

       //
       // Here we call the initialMint function and gives it the value of the total supply
       // 
       // The function does not only mint tokens on the contract creation it also creates a valut for the contract owner/deployer
       // 
        self.account.save(<- ExampleToken.initialMint(initialMintValue: self.totalSupply), to: ExampleToken.TokenVaultStoragePath) 
        self.account.link<&ExampleToken.Vault{FungibleToken.Balance, FungibleToken.Receiver}>(ExampleToken.TokenVaultPublicPath, target: ExampleToken.TokenVaultStoragePath)
    }
 }
```