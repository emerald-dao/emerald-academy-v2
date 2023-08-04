import type { TutorialOverview } from '$lib/types/content/tutorial.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: TutorialOverview = {
	title: 'ToDo App in Cadence',
	contentType: ContentTypeEnum.Tutorial,
	excerpt: 'Learn Cadence with this simple ToDo tutorial.',
	author: {
		name: 'Chase Fleming',
		socialMediaUrl: 'https://twitter.com/chasefleming',
		avatarUrl: 'https://pbs.twimg.com/profile_images/1640120827135021056/0paOJYnu_400x400.jpg',
		isVerified: true
	},
	metadata: {
		expertise: ExpertiseEnum.Beginner,
		duration: '5 mins',
		prerequisites: [],
		subjects: [SubjectsEnum.Cadence]
	}
};