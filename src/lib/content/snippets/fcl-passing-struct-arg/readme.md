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
    import BasicBeastsNFTStakingRewards from 0x4c74cb420f4eaa84
    
    access(all) fun main(rewardItem: BasicBeastsNFTStakingRewards.RewardItem): BasicBeastsNFTStakingRewards.RewardItem {
      return rewardItem
    }
    `,
		args: (arg, t) => [
			arg(
				{
					fields: [
						{ name: 'id', value: '10' },
						{ name: 'rewardItemTemplateID', value: '20' },
						{ name: 'timestamp', value: '10.0' },
						{ name: 'revealed', value: true }
					]
				},
				// `A.${contract address without the 0x}.${contract name}.${struct name}`
				t.Struct(`A.4c74cb420f4eaa84.BasicBeastsNFTStakingRewards.RewardItem`, [
					{ name: 'id', value: t.UInt32 },
					{ name: 'rewardItemTemplateID', value: t.UInt32 },
					{ name: 'timestamp', value: t.UFix64 },
					{ name: 'revealed', value: t.Bool }
				])
			)
		]
	});

	console.log({ result });
}

executeScript();
```
