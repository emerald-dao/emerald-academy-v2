import type { Template } from '$lib/types/content/templates.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { generateSlug } from '$lib/utilities/dataTransformation/generateSlug';

export const overview: Template = {
	title: 'NFT Minting',
	contentType: ContentTypeEnum.Template,
	slug: generateSlug(import.meta.url),
	audited: true,
	web: 'React.js',
	user: {
		name: 'Emerald City',
		userAvatarUrl: 'https://avatars.githubusercontent.com/u/15198786?v=4',
		github: 'emerald-dao',
		twitter: 'emerald_dao',
		discord: '143100912687251456'
	},
	templateRepositoryUrl: 'github.com/emerald-dao/3-nft-minting',
	description: 'A DApp that lets an admin create an NFT Collection and display available NFTs for purchase on a minting site. Users will be able to see their purchased NFTs as well.'
};
