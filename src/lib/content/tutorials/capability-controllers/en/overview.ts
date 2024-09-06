import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { TutorialOverview } from '$lib/types/content/tutorial.interface';

export const overview: TutorialOverview = {
	title: 'Capability Controllers (new capability system)',
	contentType: ContentTypeEnum.Tutorial,
	author: {
		name: 'Jacob Tucker',
		socialMediaUrl: 'https://twitter.com/jacobmtucker',
		avatarUrl: '/avatars/jacob.jpeg',
		isVerified: true,
		walletAddress: '0x99bd48c8036e2876'
	},
	excerpt:
		'Learn about the new Capability Controllers ("Cap Cons") mechanism. The old `link` and `getCapability` functions are being deprecated.',
	metadata: {
		expertise: ExpertiseEnum.Beginner,
		duration: '20 minutes',
		prerequisites: [],
		subjects: [SubjectsEnum.Cadence]
	}
};
