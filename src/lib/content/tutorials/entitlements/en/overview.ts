import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { TutorialOverview } from '$lib/types/content/tutorial.interface';

export const overview: TutorialOverview = {
    title: 'Entitlements (new access control system)',
    contentType: ContentTypeEnum.Tutorial,
    cadence1: true,
    author: {
        name: 'Jacob Tucker',
        socialMediaUrl: 'https://twitter.com/jacobmtucker',
        avatarUrl: '/avatars/jacob.jpeg',
        isVerified: true,
        walletAddress: '0x99bd48c8036e2876'
    },
    excerpt: 'Learn about the new Entitlements access control. The old way of determining access by type is going away.',
    metadata: {
        expertise: ExpertiseEnum.Beginner,
        duration: '10 minutes',
        prerequisites: [],
        subjects: [SubjectsEnum.Cadence]
    }
};
