---
layout: examples
---

```cadence
import TopShot from 0x0b2a3299cc857e29

pub fun main(user: Address): [MomentData] {
  // Using an AuthAccount type so we can get right to a user's collection
  // without worrying about capabilities
  let authAccount: AuthAccount = getAuthAccount(user)
  let momentCollection = authAccount.borrow<&TopShot.Collection>(from: /storage/MomentCollection)
                            ?? panic("User does not have a TopShot Collection")

  let answer: [MomentData] = []

  // Iterate through all of the user's moments
  for id in momentCollection.getIDs() {
    // borrow the nft reference
    let moment: &TopShot.NFT = momentCollection.borrowMoment(id: id)!
    // get extra metadata about the specific "play"
    let play: {String: String} = TopShot.getPlayMetaData(playID: moment.data.playID)!

    let momentData: MomentData = MomentData(
      id: moment.id,
      s: moment.data.serialNumber,
      p: play["FullName"] ?? "N/A", 
      t: play["TeamAtMoment"] ?? "N/A", 
      d: play["DateOfMoment"] ?? "N/A", 
      pc: play["PlayCategory"] ?? "N/A",
      sn: TopShot.getSetName(setID: moment.data.setID)!
    )
    answer.append(momentData)
  }

  return answer
}

// define our own struct to neatly organize
// data so we can return an array of it
pub struct MomentData {
  pub let id: UInt64
  pub let serialNumber: UInt32
  pub let player: String
  pub let team: String
  pub let date: String
  pub let playCategory: String
  pub let setName: String

  init(id: UInt64, s: UInt32, p: String, t: String, d: String, pc: String, sn: String) {
    self.id = id
    self.serialNumber = s
    self.player = p
    self.team = t
    self.date = d
    self.playCategory = pc
    self.setName = sn
  }
}
```