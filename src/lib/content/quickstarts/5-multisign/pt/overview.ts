import type { Quickstart } from '$lib/types/content/quickstart.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: Quickstart = {
	title: 'Multisign',
	id: 5,
	contentType: ContentTypeEnum.Quickstart,
	audited: true,
	isRecommended: false,
	techstack: ['nextjs'],
	author: {
		name: 'Emerald City',
		socialMediaUrl: 'https://twitter.com/emerald_dao',
		avatarUrl: 'https://avatars.githubusercontent.com/u/100654804?v=4',
		isVerified: true
	},
	quickstartRepositoryUrl: 'https://github.com/emerald-dao/5-multisign',
	excerpt:
		'Um DApp que permite que qualquer pessoa deposite $FLOW em um DAO Treasury, do qual os administradores devem assinar várias ações para retirar esse $FLOW do Tesouro.',
	metadata: {
		subjects: [SubjectsEnum.DApp]
	}
};
