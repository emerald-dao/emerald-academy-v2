---
layout: examples
---

```javascript
import { config, query } from '@onflow/fcl';

config({
	'accessNode.api': 'https://rest-testnet.onflow.org'
});

async function executeScript() {
	const result = await query({
		cadence: `
    access(all) fun main(pp: PublicPath, sp: StoragePath): Bool {
      return true
    }
    `,
		args: (arg, t) => [
			/*
        /public/FLOATCollectionPublicPath
      */
			arg({ identifier: 'FLOATCollectionPublicPath', domain: 'public' }, t.Path),
			/*
        /storage/FLOATCollectionStoragePath
      */
			arg({ identifier: 'FLOATCollectionStoragePath', domain: 'storage' }, t.Path)
		]
	});

	console.log({ result });
}

executeScript();
```
