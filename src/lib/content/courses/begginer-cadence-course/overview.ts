import type { CourseOverview } from '$lib/types/content/course.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: CourseOverview = {
	title: 'Begginer Cadence',
	contentType: ContentTypeEnum.Course,
	slug: 'courses/begginer-cadence',
	excerpt: 'Lorem ipsum dolor sit amet',
	metadata: {
		expertise: ExpertiseEnum.begginer,
		duration: '3 weeks',
		prerequisites: ['javascript'],
		subjects: [SubjectsEnum.Backend, SubjectsEnum.Frontend],
		faqs: [
			{ question: 'First Question', answer: 'First Answer' },
			{ question: 'Second Question', answer: 'Second Answer' }
		]
	},
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
