---
layout: examples
---

```javascript
import { config, query } from "@onflow/fcl";

config({
  "accessNode.api": "https://rest-testnet.onflow.org"
});

async function executeScript() {
  const result = await query({
    cadence: `
    pub fun main(test: {String: UFix64}): {String: UFix64} {
      return test
    }
    `,
    args: (arg, t) => [
      arg(
        [
          { key: "Jacob", value: "10.5" },
          { key: "Bjartek", value: "3.1" },
          { key: "Austin", value: "0.17" }
        ],
        t.Dictionary({ key: t.String, value: t.UFix64 })
      )
    ]
  });

  console.log({ result });
}

executeScript();
```