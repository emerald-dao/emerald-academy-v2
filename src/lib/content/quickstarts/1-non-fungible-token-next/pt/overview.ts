import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { Quickstart } from '$lib/types/content/quickstart.interface';

export const overview: Quickstart = {
	title: 'Non Fungible Token (NFT)',
	id: 1,
	contentType: ContentTypeEnum.Quickstart,
	audited: true,
	isRecommended: false,
	techstack: ['nextjs', 'reactjs'],
	author: {
		name: 'Emerald City',
		socialMediaUrl: 'https://twitter.com/emerald_dao',
		avatarUrl: 'https://avatars.githubusercontent.com/u/100654804?v=4',
		isVerified: true
	},
	quickstartRepositoryUrl: 'https://github.com/emerald-dao/1-non-fungible-token',
	excerpt:
		'Um DApp que permite aos usuários criar uma coleção vazia, cunhar alguns NFTs pré-carregados e transferi-los para outra conta no Flow testnet.',
	metadata: {
		subjects: [SubjectsEnum.DApp]
	}
};
