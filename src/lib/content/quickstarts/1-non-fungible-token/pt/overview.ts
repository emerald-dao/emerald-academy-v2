import type { Template } from '$lib/types/content/templates.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

export const overview: Template = {
	title: 'Non Fungible Token (NFT)',
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
	templateRepositoryUrl: 'https://github.com/emerald-dao/1-non-fungible-token',
	description:
		'Um DApp que permite aos usuários criar uma coleção vazia, cunhar alguns NFTs pré-carregados e transferi-los para outra conta no Flow testnet.'
};
