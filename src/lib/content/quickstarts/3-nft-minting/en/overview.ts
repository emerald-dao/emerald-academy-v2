import type { Quickstart } from '$lib/types/content/quickstart.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: Quickstart = {
	title: 'NFT Minting',
	contentType: ContentTypeEnum.Quickstart,
	audited: true,
	mobile: false,
	web: 'React.js',
	author: {
		name: 'Emerald City',
		socialMediaUrl: 'https://twitter.com/emerald_dao',
		avatarUrl: 'https://avatars.githubusercontent.com/u/100654804?v=4',
		isVerified: true
	},
	quickstartRepositoryUrl: 'https://github.com/emerald-dao/3-nft-minting',
	excerpt:
		'A DApp that lets an admin create an NFT Collection and display available NFTs for purchase on a minting site. Users will be able to see their purchased NFTs as well.',
	metadata: {
		subjects: [SubjectsEnum.DApp]
	}
};
