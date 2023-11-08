import type { Quickstart } from '$lib/types/content/quickstart.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: Quickstart = {
	title: 'Voting',
	id: 4,
	contentType: ContentTypeEnum.Quickstart,
	audited: true,
	isRecommended: false,
	techstack: ['nextjs', 'reactjs'],
	author: {
		name: 'Emerald City',
		socialMediaUrl: 'https://twitter.com/emerald_dao',
		avatarUrl: 'https://avatars.githubusercontent.com/u/100654804?v=4',
		isVerified: true
	},
	quickstartRepositoryUrl: 'https://github.com/emerald-dao/4-voting',
	excerpt:
		'Um DApp que ativa um DAO aberto que permite que os membros da comunidade criem propostas e votem nele com base em participações de token que governam o DAO.',
	metadata: {
		subjects: [SubjectsEnum.DApp]
	}
};
