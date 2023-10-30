import type { Quickstart } from '$lib/types/content/quickstart.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: Quickstart = {
	title: 'Non Fungible Token (NFT)',
	isRecommended: false,
	id: 1,
	contentType: ContentTypeEnum.Quickstart,
	audited: true,
	techstack: ['swiftui'],
	author: {
		name: 'BoiseITGuru',
		socialMediaUrl: 'https://twitter.com/boise_it_guru',
		avatarUrl:
			'https://avatars.githubusercontent.com/u/3641594?s=400&u=044fd05bc61270527c4da99212f143595d6fa4a1&v=4',
		isVerified: true,
		walletAddress: '0x76d988a29af9ea8d'
	},
	quickstartRepositoryUrl: 'https://github.com/boiseitguru/1-non-fungible-token-ios',
	excerpt:
		'A Mobile DApp that lets users create an empty collection, mint some pre-loaded NFTs, and transfer them to another account on Flow testnet.',
	metadata: {
		subjects: [SubjectsEnum.DApp, SubjectsEnum.Swift]
	}
};
