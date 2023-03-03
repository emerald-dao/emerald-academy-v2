import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';

export const overview: RoadmapOverview = {
	title: 'Cadence',
	contentType: ContentTypeEnum.Roadmap,
	excerpt: 'Go from zero to hero in Cadence.',
	metadata: {
		expertise: ExpertiseEnum.Beginner,
		duration: '3 chapters',
		prerequisites: ['javascript'],
		subjects: [SubjectsEnum.Cadence]
	},
	contents: [
		{
			title: 'Beginner Cadence Course',
			excerpt: 'Get an introduction to Cadence.',
			contentType: ContentTypeEnum.Course,
			duration: '6 chapters',
			subjects: [SubjectsEnum.Cadence],
			url: 'catalog/courses/beginner-cadence'
		},
		{
			title: 'Flow documentation',
			excerpt: 'Lorem ipsum',
			contentType: ContentTypeEnum.External,
			duration: '20 hours',
			subjects: [SubjectsEnum.Cadence],
			url: 'https://developers.flow.com/tools/unity-sdk/guides/dev-wallet'
		},
		{
			title: 'Intermediate Cadence Course',
			excerpt: 'Master the more complicated elements of Cadence.',
			contentType: ContentTypeEnum.Course,
			duration: '5 chapters',
			subjects: [SubjectsEnum.Cadence],
			url: 'catalog/courses/beginner-dapp'
		}
	]
};
