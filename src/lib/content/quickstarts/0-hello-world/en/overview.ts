import type { Template } from '$lib/types/content/templates.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

export const overview: Template = {
	title: 'Hello World',
	contentType: ContentTypeEnum.Quickstart,
	audited: true,
	web: 'React.js',
	author: {
		name: 'Emerald City',
		socialMediaUrl: 'https://twitter.com/emerald_dao',
		avatarUrl: 'https://avatars.githubusercontent.com/u/100654804?v=4',
		isVerified: true
	},
	templateRepositoryUrl: 'github.com/emerald-dao/0-hello-world',
	description: 'A DApp that lets users read and change a greeting field on Flow testnet.'
};
