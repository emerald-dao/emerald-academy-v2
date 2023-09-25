import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { TutorialOverview } from '$lib/types/content/tutorial.interface';

export const overview: TutorialOverview = {
    title: 'Add Magic Link to your DApp',
    contentType: ContentTypeEnum.Tutorial,
    author: {
        name: 'Jacob Tucker',
        socialMediaUrl: 'https://twitter.com/jacobmtucker',
        avatarUrl: 'https://avatars.githubusercontent.com/u/15198786?v=4',
        isVerified: true,
        walletAddress: '0x99bd48c8036e2876'
    },
    excerpt: 'Learn how to use Magic Link to add email authentication to your DApp and send a test transaction.',
    metadata: {
        expertise: ExpertiseEnum.Beginner,
        duration: '20 minutes',
        prerequisites: [],
        subjects: [SubjectsEnum.Cadence]
    }
};
