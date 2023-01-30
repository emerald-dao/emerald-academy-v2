import type { Template } from '$lib/types/content/templates.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { generateSlug } from '$lib/utilities/dataTransformation/generateSlug';


export const overview: Template = {
	title: 'Template number 2 contract',
	contentType: ContentTypeEnum.Template,
	slug: generateSlug(import.meta.url),
	audited: false,
	user: {
		name: 'Ignacio Debat',
		userAvatarUrl: 'https://avatars.githubusercontent.com/u/112862961?v=4',
		github: 'IgnacioDebat',
		discord: '1013429261920649267'
	},
	templateRepositoryUrl: 'github.com/IgnacioDebat/repository',
	description: 'Descirption of the contract'
};