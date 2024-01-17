import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { TutorialOverview } from '$lib/types/content/tutorial.interface';

export const overview: TutorialOverview = {
    title: 'Send Transactions and Scripts using FLIX',
    contentType: ContentTypeEnum.Tutorial,
    author: {
        name: 'Jacob Tucker',
        socialMediaUrl: 'https://twitter.com/jacobmtucker',
        avatarUrl: '/avatars/jacob.jpeg',
        isVerified: true,
        walletAddress: '0x99bd48c8036e2876'
    },
    excerpt: 'Send transactions and scripts without knowing Cadence. Simply consume FLIX templates and auto-generate files to run queries or mutations on-chain.',
    metadata: {
        expertise: ExpertiseEnum.Beginner,
        duration: '20 minutes',
        prerequisites: [],
        subjects: [SubjectsEnum.DApp]
    }
};
