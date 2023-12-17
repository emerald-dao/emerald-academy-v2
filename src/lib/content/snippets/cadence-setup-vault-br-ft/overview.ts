import brasil from 0x7bf07d719dcb8480

transaction {
    prepare(signer: AuthAccount) {
        if signer.borrow<&brasil.Vault>(from: /storage/brasilVault) == nil {
            signer.save(<-brasil.createEmptyVault(), to: /storage/brasilVault)
        }
    }
}
