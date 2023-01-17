import type { Template } from '$lib/types/content/templates.interface';

export const overview: Template = {
	title: 'Hello World Contract',
	audited: true,
	user: {
		name: 'Jacob Tucker',
		userAvatarUrl: '..',
		github: 'jacobtucker'
	},
	templateRepositoryUrl: 'github.com/jacobtucker/repository',
	description: 'Descirption of the contract'
};
