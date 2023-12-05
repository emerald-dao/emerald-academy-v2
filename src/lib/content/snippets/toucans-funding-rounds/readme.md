---
layout: examples
---

```cadence
import Toucans from 0x577a3c409c5dcb5e

transaction(
 projectId: String,
 cycleIndex: UInt64,
 reserveRate: UFix64,
 issuanceRate: UFix64
) {

 let Project: &Toucans.Project
  prepare(signer: AuthAccount) {
   let collection = signer.borrow<&Toucans.Collection>(from: Toucans.CollectionStoragePath)
                   ?? panic("A DAOTreasury doesn't exist here.")
   self.Project = collection.borrowProject(projectId: projectId) ?? panic("Project does not exist.")
 }

 execute {
   let cfc: Toucans.FundingCycleDetails = self.Project.getFundingCycle(cycleIndex: cycleIndex).details
   let details: Toucans.FundingCycleDetails = Toucans.FundingCycleDetails(
     cycleId: cfc.cycleId,
     fundingTarget: cfc.fundingTarget,  // unchanged
     issuanceRate: issuanceRate,
     reserveRate: reserveRate,
     timeframe: Toucans.CycleTimeFrame(cfc.timeframe.startTime, cfc.timeframe.endTime),  // unchanged
     payouts: cfc.payouts,
     allowOverflow: cfc.allowOverflow,
     allowedAddresses: cfc.allowedAddresses,
     catalogCollectionIdentifier: cfc.catalogCollectionIdentifier,
     cfc.extra
   )
   self.Project.editUpcomingCycle(cycleIndex: cycleIndex, details: details)
 }
}
```