import type { Template } from '$lib/types/content/templates.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

export const overview: Template = {
	title: 'NFT Minting',
	contentType: ContentTypeEnum.Quickstart,
	audited: true,
	web: 'React.js',
	user: {
		name: 'Emerald City',
		userAvatarUrl: 'https://avatars.githubusercontent.com/u/15198786?v=4',
		github: 'emerald-dao',
		twitter: 'emerald_dao',
		discord: 'emeraldcity'
	},
	templateRepositoryUrl: 'github.com/emerald-dao/3-nft-minting',
	description:
		'Um DApp que permite que um administrador crie uma coleção NFT e exiba os NFTs disponíveis para compra em um site de cunhagem. Os usuários também poderão ver seus NFTs comprados.'
};
