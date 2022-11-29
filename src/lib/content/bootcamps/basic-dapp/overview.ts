import type { BootcampOverview } from '$lib/types/content/bootcamp.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: BootcampOverview = {
	title: 'Basic Dapp',
	contentType: ContentTypeEnum.Bootcamp,
	slug: 'bootcamps/basic-dapp',
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
	videos: [
		{
			name: 'First Lesson',
			excerpt: 'Loremn ipsum',
			link: 'https://www.youtube/test',
			subjects: [SubjectsEnum.Webdev],
			date: new Date(10 / 10 / 2002)
		}
	]
};
