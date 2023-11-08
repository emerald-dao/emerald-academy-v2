import type { Quickstart } from '$lib/types/content/quickstart.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: Quickstart = {
	title: 'NFT Minting',
	id: 3,
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
	quickstartRepositoryUrl: 'https://github.com/emerald-dao/3-nft-minting',
	excerpt:
		'Um DApp que permite que um administrador crie uma coleção NFT e exiba os NFTs disponíveis para compra em um site de cunhagem. Os usuários também poderão ver seus NFTs comprados.',
	metadata: {
		subjects: [SubjectsEnum.DApp]
	}
};
