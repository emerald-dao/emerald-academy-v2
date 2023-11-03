import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { YouTubeOverview } from '$lib/types/content/youtube.interface';

export const videos: YouTubeOverview[] = [
	{
		title: 'Historical API - Fetch Events, Transactions, and Blocks on Flow blockchain',
		author: {
			name: 'Jacob Tucker',
			socialMediaUrl: 'https://twitter.com/jacobmtucker',
			avatarUrl: 'https://pbs.twimg.com/profile_images/1529533498847109128/td04l9Ra_400x400.jpg',
			isVerified: true,
			walletAddress: '0x99bd48c8036e2876'
		},
		excerpt: 'Historical API - Fetch Events, Transactions, and Blocks on Flow blockchain',
		link: 'https://www.youtube.com/watch?v=ptqqDgFmvV0',
		contentType: ContentTypeEnum.YouTube,
		metadata: {
			expertise: ExpertiseEnum.Beginner,
			duration: '5 minutes',
			prerequisites: [],
			subjects: [SubjectsEnum.DApp]
		}
	}
];
