import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';

export const overview: RoadmapOverview = {
	title: 'Cadence',
	contentType: ContentTypeEnum.Roadmap,
	excerpt: 'Go from zero to hero in Cadence. Note you do not have to complete all of the following to be good at Cadence. Even Cadence by Example alone will get you up to speed.',
	metadata: {
		duration: '1 month',
		prerequisites: ['None'],
		subjects: [SubjectsEnum.Cadence]
	},
	contents: [
		{
			title: 'Cadence by Example',
			excerpt: 'Learn Cadence through simple examples.',
			contentType: ContentTypeEnum.Tutorial,
			duration: '1-2 days',
			subjects: [SubjectsEnum.Cadence],
			url: 'cadence-by-example'
		},
		{
			title: 'Beginner Cadence Course',
			excerpt: 'Get an introduction to Cadence.',
			contentType: ContentTypeEnum.Course,
			duration: '2 weeks',
			subjects: [SubjectsEnum.Cadence],
			url: 'catalog/courses/beginner-cadence'
		},
		{
			title: 'Intermediate Cadence Course',
			excerpt: 'Master the more complicated elements of Cadence.',
			contentType: ContentTypeEnum.Course,
			duration: '2 weeks',
			subjects: [SubjectsEnum.Cadence],
			url: 'catalog/courses/intermediate-cadence'
		},
		{
			title: 'Flownaut',
			excerpt: 'A Web3/Cadence based wargame inspired by Ethernaut. Hack your way through smart contracts to complete all the levels.',
			contentType: ContentTypeEnum.External,
			duration: '3 days-1 week',
			subjects: [SubjectsEnum.Cadence],
			url: 'https://flownaut.ecdao.org'
		}
	]
};
