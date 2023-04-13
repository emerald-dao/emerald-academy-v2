import type { TweetOverview } from '$lib/types/content/tweet.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const tweets: TweetOverview[] = [
	{
		title: 'Cadence: What are attachments?',
		authorUsername: '@jacobmtucker',
		excerpt: 'Overviews an upcoming feature to the Cadence language: Attachments! Learn how to attach composable additions to resources on Flow.',
		link: 'https://twitter.com/jacobmtucker/status/1641218434343026695',
		contentType: ContentTypeEnum.Tweet,
		metadata: {
			expertise: ExpertiseEnum.Beginner,
			duration: '3 minutes',
			prerequisites: [],
			subjects: [SubjectsEnum.Cadence]
		}
	}
];
