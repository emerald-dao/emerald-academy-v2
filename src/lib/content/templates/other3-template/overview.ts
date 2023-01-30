import type { Template } from '$lib/types/content/templates.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { generateSlug } from '$lib/utilities/dataTransformation/generateSlug';


export const overview: Template = {
	title: 'Template number 3 contract',
	contentType: ContentTypeEnum.Template,
	slug: generateSlug(import.meta.url),
	audited: false,
	user: {
		name: 'Juan Pedro Falco',
		userAvatarUrl: 'https://avatars.githubusercontent.com/u/73831486?v=4',
		github: 'falcojuanpedro',
		discord: '847261403589115934'
	},
	templateRepositoryUrl: 'github.com/falcojuanpedro/repository',
	description: 'Descirption of the contract'
};