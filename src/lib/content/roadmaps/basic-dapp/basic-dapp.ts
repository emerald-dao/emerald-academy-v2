import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';

export const overview: RoadmapOverview = {
	title: 'Begginer Dapp Roadmap',
	contentType: ContentTypeEnum.Roadmap,
	slug: 'roadmaps/basic-dapp',
	excerpt: 'Lorem ipsum dolor sit amet.',
	metadata: {
		expertise: ExpertiseEnum.begginer,
		duration: '3 weeks',
		prerequisites: ['javascript'],
		subjects: [SubjectsEnum.Backend, SubjectsEnum.Frontend]
	},
	contents: [
		{
			title: 'Begginer Cadence Course',
			excerpt: 'Lorem ipsum',
			contentType: ContentTypeEnum.Course,
			duration: '4 weeks',
			subjects: [SubjectsEnum.Cadence],
			url: 'catalog/courses/begginer-cadence'
		},
		{
			title: 'Basic Dapp',
			excerpt: 'Lorem ipsum',
			contentType: ContentTypeEnum.Course,
			duration: '4 weeks',
			subjects: [SubjectsEnum.Cadence],
			url: 'catalog/courses/basic-dapp'
		}
	],
	weeks: [
		{
			excerpt: 'This is the first week'
		},
		{
			excerpt: 'This is the second week'
		},
		{
			excerpt: 'This is the third week'
		}
	]
};
