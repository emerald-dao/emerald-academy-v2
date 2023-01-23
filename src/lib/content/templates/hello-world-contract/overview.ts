import type { Template } from '$lib/types/content/templates.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { generateSlug } from '$lib/utilities/dataTransformation/generateSlug';

export const overview: Template = {
	title: 'Hello World Contract',
	contentType: ContentTypeEnum.Template,
	slug: generateSlug(import.meta.url),
	audited: true,
	user: {
		name: 'Jacob Tucker',
		userAvatarUrl: 'https://avatars.githubusercontent.com/u/15198786?v=4',
		github: 'jacob-tucker',
		twitter: '@jacobtucker',
		discord:'tsnakejake'
	},
	templateRepositoryUrl: 'github.com/jacobtucker/repository',
	description: 'Descirption of the contract'
};
