import type { Template } from '$lib/types/content/templates.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

export const overview: Template = {
	title: 'Multisign',
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
	templateRepositoryUrl: 'https://github.com/emerald-dao/5-multisign',
	description:
		'Um DApp que permite que qualquer pessoa deposite $FLOW em um DAO Treasury, do qual os administradores devem assinar várias ações para retirar esse $FLOW do Tesouro.'
};
