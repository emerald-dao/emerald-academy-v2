import type { Quickstart } from '$lib/types/content/quickstart.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

export const overview: Quickstart = {
	title: 'Fungible Token',
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
	quickstartRepositoryUrl: 'github.com/emerald-dao/2-fungible-token',
	description:
		'A DApp that lets users create their own fungible token and transfer them to another account on Flow testnet.'
};
