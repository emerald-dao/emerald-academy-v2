import { AppTypeEnum, type Quickstart } from '$lib/types/content/quickstart.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: Quickstart = {
	title: 'Multisign',
	contentType: ContentTypeEnum.Quickstart,
	type: AppTypeEnum.NextJS,
	author: {
		name: 'Emerald City',
		socialMediaUrl: 'https://twitter.com/emerald_dao',
		avatarUrl: 'https://avatars.githubusercontent.com/u/100654804?v=4',
		isVerified: true
	},
	quickstartRepositoryUrl: 'https://github.com/emerald-dao/5-multisign',
	excerpt:
		'A Next.js DApp that allows anyone to deposit $FLOW to a DAO Treasury, of which admins must multisign actions to withdraw that $FLOW from the Treasury.',
	metadata: {
		subjects: [SubjectsEnum.DApp]
	}
};
