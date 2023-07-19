---
layout: examples
---

```javascript
import { query, config } from "@onflow/fcl";

config({
  "accessNode.api": "https://rest-testnet.onflow.org"
});

async function executeScript(x, y) {
  const response = await query({
    cadence: `
    pub fun main(x: Int, y: Int): Int {
      return x + y
    }
    `,
    args: (arg, t) => [arg(x, t.Int), arg(y, t.Int)]
  });

  console.log({ response });
}

executeScript("3", "5");
```