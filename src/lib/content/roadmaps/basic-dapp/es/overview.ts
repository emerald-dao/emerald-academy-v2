import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';

export const overview: RoadmapOverview = {
	title: 'Dapps para principiantes',
	contentType: ContentTypeEnum.Roadmap,
	excerpt: 'Lorem ipsum dolor sit amet.',
	metadata: {
		expertise: ExpertiseEnum.Beginner,
		duration: '3 chapters',
		prerequisites: ['javascript'],
		subjects: [SubjectsEnum.Cadence]
	},
	contents: [
		{
			title: 'Beginner Cadence Course',
			excerpt: 'Lorem ipsum',
			contentType: ContentTypeEnum.Course,
			duration: '4 chapters',
			subjects: [SubjectsEnum.Cadence],
			url: 'catalog/courses/beginner-cadence'
		},
		{
			title: 'Basic Dapp',
			excerpt: 'Lorem ipsum',
			contentType: ContentTypeEnum.Course,
			duration: '4 chapters',
			subjects: [SubjectsEnum.Cadence],
			url: 'catalog/courses/basic-dapp'
		}
	],
	chapters: [
		{
			excerpt: 'This is the first chapter'
		},
		{
			excerpt: 'This is the second chapter'
		},
		{
			excerpt: 'This is the third chapter'
		}
	]
};
