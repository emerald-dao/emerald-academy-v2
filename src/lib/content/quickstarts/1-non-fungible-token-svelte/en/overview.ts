import type { Quickstart } from '$lib/types/content/quickstart.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: Quickstart = {
	title: 'Non Fungible Token (NFT)',
	id: 1,
	contentType: ContentTypeEnum.Quickstart,
	audited: true,
	isRecommended: true,
	techstack: ['sveltekit'],
	author: {
		name: 'Emerald City',
		socialMediaUrl: 'https://twitter.com/emerald_dao',
		avatarUrl: 'https://avatars.githubusercontent.com/u/100654804?v=4',
		isVerified: true
	},
	quickstartRepositoryUrl: 'https://github.com/emerald-dao/1-non-fungible-token-svelte',
	excerpt: 'Mint NFTs and transfer them to another account on Flow Testnet.',
	metadata: {
		subjects: [SubjectsEnum.DApp]
	}
};
