import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';

export const overview: RoadmapOverview = {
	title: 'Cadence',
	contentType: ContentTypeEnum.Roadmap,
	excerpt: 'Go from zero to hero in Cadence.',
	metadata: {
		duration: '11 chapters',
		prerequisites: ['None'],
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
			title: 'Intermediate Cadence Course',
			excerpt: 'Master the more complicated elements of Cadence.',
			contentType: ContentTypeEnum.Course,
			duration: '5 chapters',
			subjects: [SubjectsEnum.Cadence],
			url: 'catalog/courses/intermediate-cadence'
		}
	]
};
