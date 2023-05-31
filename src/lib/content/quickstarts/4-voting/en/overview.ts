import type { Template } from '$lib/types/content/templates.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

export const overview: Template = {
	title: 'Voting',
	contentType: ContentTypeEnum.Quickstart,
	audited: true,
	web: 'React.js',
	author: {
		name: 'Emerald City',
		socialMediaUrl: 'https://twitter.com/emerald_dao',
		avatarUrl: 'https://avatars.githubusercontent.com/u/100654804?v=4',
		isVerified: true
	},
	templateRepositoryUrl: 'github.com/emerald-dao/4-voting',
	description:
		'A DApp that spins up an open DAO that lets community members create proposals and vote within it based on token holdings that govern the DAO.'
};
