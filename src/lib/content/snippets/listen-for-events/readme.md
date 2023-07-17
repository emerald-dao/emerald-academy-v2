---
layout: examples
---

```javascript
import * as fcl from "@onflow/fcl";

// We need to point FCL to some access node.
// We will use Mainnet REST endpoint for this, as the contract
// we want to listen to is deployed there

fcl.config({
  "accessNode.api": "https://rest-mainnet.onflow.org",
  // we will set the poll rate for events to 3 seconds
  "fcl.eventPollRate": 3000
});

// FlowFees is the most active contract, since every transaction will
// trigger "FeesDeducted" event, so it will be easier to see that our code
// is working correctly
const contractAddress = "f919ee77447b7497";
const contractName = "FlowFees";
const eventName = "FeesDeducted";
// Event name consist of 2 or 4 parts
// 2 part event name have only system events
// For deployed contract, event should be constructed from 4 parts
// - "A" prefix, stands for "account"
// - address where contract, holding definition of event is deployed
// - contract name
// - event name
const event = `A.${contractAddress}.${contractName}.${eventName}`;

console.log(
  `Listening for event "${eventName}" from "${contractName}" deployed on account 0x${contractAddress}`
);
fcl.events(event).subscribe((eventData) => {
  console.log(eventData);
});
```