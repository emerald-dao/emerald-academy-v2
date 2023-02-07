import { config } from '@onflow/fcl';
import dappInfo from '$lib/config/config';

// EMULATOR
// export const network = 'emulator';
// const accessNode = 'http://127.0.0.1:8888';
// const discoveryWallet = 'http://localhost:8701/fcl/authn';

// TESTNET
// export const network = 'testnet';
// const accessNode = 'https://rest-testnet.onflow.org';
// const discoveryWallet = 'https://fcl-discovery.onflow.org/testnet/authn';

// MAINNET
export const network = 'mainnet';
const accessNode = 'https://rest-mainnet.onflow.org';
const discoveryWallet = 'https://fcl-discovery.onflow.org/authn';

config()
	.put('app.detail.title', dappInfo.title)
	.put('app.detail.icon', dappInfo.icon)
	.put('accessNode.api', accessNode)
	.put('discovery.wallet', discoveryWallet);
