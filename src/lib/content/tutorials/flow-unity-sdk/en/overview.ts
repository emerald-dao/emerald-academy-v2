import type { TutorialOverview } from '$lib/types/content/tutorial.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: TutorialOverview = {
	title: 'Integrating User Profile with Flow Unity SDK',
	contentType: ContentTypeEnum.Tutorial,
	excerpt:
		'Learn to use the Flow UnitySDK and create a User Profile in Unity.',
	author: {
		name: 'Memxor',
		socialMediaUrl: 'https://twitter.com/memxor_',
		avatarUrl: 'https://i.imgur.com/Nfww3sn.png',
		isVerified: true,
		walletAddress: '0x22f61baed6c7eede'
	},
	metadata: {
		expertise: ExpertiseEnum.Beginner,
		duration: '20 mins',
		prerequisites: [],
		subjects: [SubjectsEnum.Cadence, SubjectsEnum.Unity]
	}
};