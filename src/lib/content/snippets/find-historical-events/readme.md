---
layout: examples
---

Returns a specific event at block height and then up to 100 in previous blocks.

```javascript
async function getEvents() {
  try {
    // change these
    const height = "63849126";
    const contractName = "FLOAT";
    const contractAddress = "0x2d4c3caffbeab845";
    const eventName = "FLOATMinted";

    // don't change this
    const name = `A.${contractAddress.slice(2)}.${contractName}.${eventName}`;

    const response = await fetch(
      `https://api.findlabs.io/historical/api/rest/events?height=${height}&name=${name}`
    );
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

getEvents();
```