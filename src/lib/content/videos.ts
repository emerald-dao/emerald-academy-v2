import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { YouTubeOverview } from '$lib/types/content/youtube.interface';

export const videos: YouTubeOverview[] = [
	{
		title: 'Historical API',
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
			expertise: ExpertiseEnum.Intermediate,
			duration: '5 minutes',
			prerequisites: [],
			subjects: [SubjectsEnum.DApp]
		}
	},
	{
		title: 'Build an NFT Marketplace',
		author: {
			name: 'Jacob Tucker',
			socialMediaUrl: 'https://twitter.com/jacobmtucker',
			avatarUrl: 'https://pbs.twimg.com/profile_images/1529533498847109128/td04l9Ra_400x400.jpg',
			isVerified: true,
			walletAddress: '0x99bd48c8036e2876'
		},
		excerpt: 'How to Build an NFT Marketplace on Flow Testnet using React.js, Blocto, and IPFS Integration',
		link: 'https://www.youtube.com/watch?v=RGNX2Xor1Y0',
		contentType: ContentTypeEnum.YouTube,
		metadata: {
			expertise: ExpertiseEnum.Beginner,
			duration: '3 hours',
			prerequisites: [],
			subjects: [SubjectsEnum.DApp, SubjectsEnum.Cadence, SubjectsEnum.IPFS, SubjectsEnum.Javascript]
		}
	},
	{
		title: 'Send Transaction w/ AWS KMS',
		author: {
			name: 'Jacob Tucker',
			socialMediaUrl: 'https://twitter.com/jacobmtucker',
			avatarUrl: 'https://pbs.twimg.com/profile_images/1529533498847109128/td04l9Ra_400x400.jpg',
			isVerified: true,
			walletAddress: '0x99bd48c8036e2876'
		},
		excerpt: 'How to Send/Authorize a Transaction Using AWS KMS on Flow',
		link: 'https://www.youtube.com/watch?v=abrDQ1xMQKc',
		contentType: ContentTypeEnum.YouTube,
		metadata: {
			expertise: ExpertiseEnum.Advanced,
			duration: '25 minutes',
			prerequisites: [],
			subjects: [SubjectsEnum.DApp]
		}
	}
];
