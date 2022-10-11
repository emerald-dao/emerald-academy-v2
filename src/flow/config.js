import { config } from '@onflow/fcl';
import dappInfo from '$lib/config/config';

config()
	.put('app.detail.title', dappInfo.title)
	.put('app.detail.icon', dappInfo.icon)
	.put('accessNode.api', 'https://rest-testnet.onflow.org')
	.put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn');
