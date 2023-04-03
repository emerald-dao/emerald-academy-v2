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
		discord: '143100912687251456'
	},
	templateRepositoryUrl: 'github.com/emerald-dao/5-multisign',
	description:
		'A DApp that allows anyone to deposit $FLOW to a DAO Treasury, of which admins must multisign actions to withdraw that $FLOW from the Treasury.'
};
