import EmeraldIdentity from 0x39e42c67cc851cfb
import EmeraldIdentityDapper from 0x39e42c67cc851cfb
import EmeraldIdentityLilico from 0x39e42c67cc851cfb

pub fun main(account: Address): String? {
  if let bloctoId = EmeraldIdentity.getDiscordFromAccount(account: account) {
    return bloctoId
  }
  if let dapperId = EmeraldIdentityDapper.getDiscordFromAccount(account: account) {
    return dapperId
  }
  if let lilicoId = EmeraldIdentityLilico.getDiscordFromAccount(account: account) {
    return lilicoId
  }
  return nil
}