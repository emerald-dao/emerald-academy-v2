import type { Template } from '$lib/types/content/templates.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

export const overview: Template = {
	title: 'Template number 2 contract',
	contentType: ContentTypeEnum.Template,
	audited: false,
	user: {
		name: 'Ignacio Debat',
		userAvatarUrl: '..',
		github: 'IgnacioDebat'
	},
	templateRepositoryUrl: 'github.com/IgnacioDebat/repository',
	description: 'Descirption of the contract'
};