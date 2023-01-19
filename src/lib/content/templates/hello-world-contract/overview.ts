import type { Template } from '$lib/types/content/templates.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { generateSlug } from '$lib/utilities/dataTransformation/generateSlug';

export const overview: Template = {
	title: 'Hello World Contract',
	contentType: ContentTypeEnum.Template,
	audited: true,
	user: {
		name: 'Jacob Tucker',
		userAvatarUrl: '..',
		github: 'jacobtucker'
	},
	templateRepositoryUrl: 'github.com/jacobtucker/repository',
	description: 'Descirption of the contract'
};
