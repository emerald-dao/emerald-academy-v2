import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { TutorialOverview } from '$lib/types/content/tutorial.interface';

export const overview: TutorialOverview = {
    title: 'Deploy a Contract w/ the Flow CLI',
    contentType: ContentTypeEnum.Tutorial,
    author: {
        name: 'Jacob Tucker',
        socialMediaUrl: 'https://twitter.com/jacobmtucker',
        avatarUrl: 'https://avatars.githubusercontent.com/u/15198786?v=4',
        isVerified: true,
        walletAddress: '0x99bd48c8036e2876'
    },
    excerpt: 'Learn how to deploy a contract to testnet/mainnet using the Flow CLI.',
    metadata: {
        expertise: ExpertiseEnum.Beginner,
        duration: '5 minutes',
        prerequisites: [],
        subjects: [SubjectsEnum.DApp, SubjectsEnum.Cadence]
    }
};
