import type { Template } from '$lib/types/content/templates.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { generateSlug } from '$lib/utilities/dataTransformation/generateSlug';

export const overview: Template = {
	title: 'Fungible Token',
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
	templateRepositoryUrl: 'github.com/emerald-dao/2-fungible-token',
	description: 'A DApp that lets users create their own fungible token and transfer them to another account on Flow testnet.'
};
