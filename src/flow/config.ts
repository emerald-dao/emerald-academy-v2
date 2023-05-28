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

const resolver = async () => {
	const nonce = '7f190deedcd3b0538b7cd0ebc1994ed40d9db16cc1a6fcc3e7a994240c14d86d';
	return {
		appIdentifier: 'Emerald Academy',
		nonce
	};
};

config()
	.put('app.detail.title', dappInfo.title)
	.put('app.detail.icon', dappInfo.icon)
	.put('fcl.accountProof.resolver', resolver)
	.put('accessNode.api', accessNode)
	.put('flow.network', network)
	.put('discovery.wallet', discoveryWallet);
