import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { TutorialOverview } from '$lib/types/content/tutorial.interface';

export const overview: TutorialOverview = {
	title: 'Setting Up Lilico Wallet For Development',
	contentType: ContentTypeEnum.Tutorial,
	excerpt: 'Learn how to setup Lilico Wallet for developing DApps',
	author: {
		name: 'BoiseITGuru',
		socialMediaUrl: 'https://twitter.com/boise_it_guru',
		avatarUrl:
			'https://avatars.githubusercontent.com/u/3641594?s=400&u=044fd05bc61270527c4da99212f143595d6fa4a1&v=4',
		isVerified: true,
		walletAddress: '0x76d988a29af9ea8d'
	},
	metadata: {
		expertise: ExpertiseEnum.Beginner,
		duration: '10 minutes',
		prerequisites: [SubjectsEnum.Javascript],
		subjects: [SubjectsEnum.Mobile, SubjectsEnum.DApp]
	}
};
