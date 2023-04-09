import type { Template } from '$lib/types/content/templates.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

export const overview: Template = {
	title: 'Kitty Items',
	contentType: ContentTypeEnum.Quickstart,
	audited: true,
	web: 'React.js',
	user: {
		name: 'Flow Blockchain',
		userAvatarUrl: 'https://avatars.githubusercontent.com/u/62387156?s=200&v=4',
		github: 'onflow',
		twitter: 'flow_blockchain',
		discord: 'flow'
	},
	templateRepositoryUrl: 'github.com/onflow/kitty-items',
	description:
		"O CryptoKitties Sample App é um mercado NFT completo construído com Cadence, a linguagem de programação de contratos inteligentes orientada a recursos da Flow."
};
