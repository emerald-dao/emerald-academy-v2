import type { Template } from '$lib/types/content/templates.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { generateSlug } from '$lib/utilities/dataTransformation/generateSlug';


export const overview: Template = {
	title: 'Template number 1 contract',
	contentType: ContentTypeEnum.Template,
	slug: generateSlug(import.meta.url),
	audited: true,
	user: {
		name: 'Mateo Roldos',
		userAvatarUrl: 'https://avatars.githubusercontent.com/u/63481581?v=4',
		github: 'mateoroldos'
	},
	templateRepositoryUrl: 'github.com/mateoroldos/repository',
	description: 'Descirption of the contract'
};