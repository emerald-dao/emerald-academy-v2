import Crypto

access(all) fun main(acctAddress: Address, intent: String, message: String, keyIds: [Int], signatures: [String], signatureBlock: UInt64): Bool {
  return verifySignature(acctAddress: acctAddress, intent: intent, message: message, keyIds: keyIds, signatures: signatures, signatureBlock: signatureBlock) != nil
}

// From: ZayVerifierV2 contract: https://contractbrowser.com/A.4c577a03bc1a82e0.ZayVerifierV2
//
// Explanation:
// Verifies that `acctAddress` is the one that signed the `message`, which contains `intent`,
// producing `signatures` with the `keyIds` (that are hopefully in its account, or its false)
// during `signatureBlock`
// Parameters:
// acctAddress: the address of the account we're verifying
// message: {intent}{blockId}
// keyIds: the keyIds that the acctAddress theoretically signed with
// signatures: the signature that was theoretically produced from the `acctAddress` signing `message` with `keyIds`.
// can be multiple because you can sign with multiple keys, thus creating multiple signatures.
// signatureBlock: when the signature was produced
//
// Returns:
// Whether or not this signature is valid
access(all) fun verifySignature(acctAddress: Address, intent: String, message: String, keyIds: [Int], signatures: [String], signatureBlock: UInt64): Bool {
  let keyList = Crypto.KeyList()
  let account = getAccount(acctAddress)

  let publicKeys: [[UInt8]] = []
  let weights: [UFix64] = []
  let signAlgos: [UInt] = []

  let uniqueKeys: {Int: Bool} = {}
  for id in keyIds {
      uniqueKeys[id] = true
  }
  assert(uniqueKeys.keys.length == keyIds.length, message: "Invalid duplicates of the same keyID provided for signature")

  var counter = 0
  var totalWeight = 0.0
  while (counter < keyIds.length) {
      let accountKey: AccountKey = account.keys.get(keyIndex: keyIds[counter]) ?? panic("Provided key signature does not exist")

      publicKeys.append(accountKey.publicKey.publicKey)
      let keyWeight = accountKey.weight
      weights.append(keyWeight)
      totalWeight = totalWeight + keyWeight

      signAlgos.append(UInt(accountKey.publicKey.signatureAlgorithm.rawValue))

      counter = counter + 1
  }

  // Why 999 instead of 1000? Blocto currently signs with a 999 weight key sometimes for non-custodial blocto accounts.
  // We would like to support these non-custodial Blocto wallets - but can be switched to 1000 weight when Blocto updates this.
  assert(totalWeight >= 999.0, message: "Total weight of combined signatures did not satisfy 999 requirement.")

  var i = 0
  for publicKey in publicKeys {
      keyList.add(
          PublicKey(
              publicKey: publicKey,
              signatureAlgorithm: signAlgos[i] == 2 ? SignatureAlgorithm.ECDSA_secp256k1  : SignatureAlgorithm.ECDSA_P256
          ),
          hashAlgorithm: HashAlgorithm.SHA3_256,
          weight: weights[i]
      )
      i = i + 1
  }

  // In verify we need a [KeyListSignature] so we do that here
  let signatureSet: [Crypto.KeyListSignature] = []
  var j = 0
  for signature in signatures {
      signatureSet.append(
          Crypto.KeyListSignature(
              keyIndex: keyIds[j],
              signature: signature.decodeHex()
          )
      )
      j = j + 1
  }

  counter = 0
  let signingBlock = getBlock(at: signatureBlock)!
  let blockId = signingBlock.id
  let blockIds: [UInt8] = []
  while (counter < blockId.length) {
      blockIds.append(blockId[counter])
      counter = counter + 1
  }

  // message: {intent}{blockId}
  let intentHex = String.encodeHex(intent.utf8)
  let blockIdHexStr: String = String.encodeHex(blockIds)

  // Matches the intent
  assert(
      intentHex == message.slice(from: 0, upTo: intentHex.length),
      message: "Failed to validate intent"
  )
  // Ensure that the message passed in is of the current block id...
  assert(
      blockIdHexStr == message.slice(from: intentHex.length, upTo: message.length),
      message: "Unable to validate signature provided contained a valid block id."
  )

  let signatureValid = keyList.verify(
      signatureSet: signatureSet,
      signedData: message.decodeHex(),
      domainSeparationTag: "FLOW-V0.0-user"
  )
  return signatureValid
}