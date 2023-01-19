import type { Template } from '$lib/types/content/templates.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

export const overview: Template = {
	title: 'Template number 3 contract',
	contentType: ContentTypeEnum.Template,
	audited: false,
	user: {
		name: 'Juan Pedro Falco',
		userAvatarUrl: '..',
		github: 'falcojuanpedro'
	},
	templateRepositoryUrl: 'github.com/falcojuanpedro/repository',
	description: 'Descirption of the contract'
};