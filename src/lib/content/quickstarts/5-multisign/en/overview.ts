import type { Quickstart } from '$lib/types/content/quickstart.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

export const overview: Quickstart = {
	title: 'Multisign',
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
	quickstartRepositoryUrl: 'github.com/emerald-dao/5-multisign',
	description:
		'A DApp that allows anyone to deposit $FLOW to a DAO Treasury, of which admins must multisign actions to withdraw that $FLOW from the Treasury.'
};
