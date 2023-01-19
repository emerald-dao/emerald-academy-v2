import type { Template } from '$lib/types/content/templates.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

export const overview: Template = {
	title: 'Template number 1 contract',
	contentType: ContentTypeEnum.Template,
	audited: true,
	user: {
		name: 'Mateo Roldos',
		userAvatarUrl: '..',
		github: 'mateoroldos'
	},
	templateRepositoryUrl: 'github.com/mateoroldos/repository',
	description: 'Descirption of the contract'
};