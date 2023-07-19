import type { TweetOverview } from '$lib/types/content/tweet.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const tweets: TweetOverview[] = [
	{
		title: 'Cadence: What are attachments?',
		author: {
			name: 'Jacob Tucker',
			socialMediaUrl: 'https://twitter.com/jacobmtucker',
			avatarUrl: 'https://pbs.twimg.com/profile_images/1529533498847109128/td04l9Ra_400x400.jpg',
			isVerified: true,
			walletAddress: '0x99bd48c8036e2876'
		},
		excerpt: 'Overviews an upcoming feature to the Cadence language: Attachments! Learn how to attach composable additions to resources on Flow.',
		link: 'https://twitter.com/jacobmtucker/status/1641218434343026695',
		contentType: ContentTypeEnum.Tweet,
		metadata: {
			expertise: ExpertiseEnum.Beginner,
			duration: '3 minutes',
			prerequisites: [],
			subjects: [SubjectsEnum.Cadence]
		}
	},
	{
		title: 'A storage capacity story',
		author: {
			name: 'alxocity',
			socialMediaUrl: 'https://twitter.com/alxocity',
			avatarUrl: 'https://pbs.twimg.com/profile_images/1645724830359257088/D-6I04ol_400x400.jpg',
			isVerified: true
		},
		excerpt: 'Explaining storage capacity on Flow though a legendary story based on real events.',
		link: 'https://twitter.com/alxocity/status/1646314776744857600',
		contentType: ContentTypeEnum.Tweet,
		metadata: {
			expertise: ExpertiseEnum.Beginner,
			duration: '2 minutes',
			prerequisites: [],
			subjects: [SubjectsEnum.Cadence]
		}
	}
];
