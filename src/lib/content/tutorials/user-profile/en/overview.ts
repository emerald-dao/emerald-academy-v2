import type { TutorialOverview } from '$lib/types/content/tutorial.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: TutorialOverview = {
	title: 'Create a User Profile using Cadence',
	contentType: ContentTypeEnum.Tutorial,
	excerpt:
		'Learn to write and deploy a new contract that can store user information, change user information or read from an account on the flow blockchain.',
	author: {
		name: 'Memxor',
		socialMediaUrl: 'https://twitter.com/memxor_',
		avatarUrl: 'https://imgur.com/a/CtEvT81'
	},
	metadata: {
		expertise: ExpertiseEnum.Beginner,
		duration: '10 mins',
		prerequisites: [],
		subjects: [SubjectsEnum.Cadence]
	}
};