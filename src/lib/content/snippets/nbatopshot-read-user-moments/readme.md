---
layout: examples
---

```cadence
import TopShot from "TopShot"

pub fun main(user: Address): [MomentData] {
  let authAccount: AuthAccount = getAuthAccount(user)
  let momentCollection = authAccount.borrow<&TopShot.Collection>(from: /storage/MomentCollection)
                            ?? panic("User does not have a TopShot Collection")

  let answer: [MomentData] = []

  for id in momentCollection.getIDs() {
    let moment: &TopShot.NFT = momentCollection.borrowMoment(id: id)!
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