import type { BootcampOverview } from '$lib/types/content/bootcamp.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import { generateSlug } from '$lib/utilities/dataTransformation/generateSlug';

export const overview: BootcampOverview = {
	title: 'Basic Dapp',
	contentType: ContentTypeEnum.Bootcamp,
	slug: generateSlug(import.meta.url),
	excerpt:
		'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
	metadata: {
		expertise: ExpertiseEnum.intermediate,
		duration: '3 chapters',
		prerequisites: ['javascript'],
		subjects: [SubjectsEnum.Backend, SubjectsEnum.Cadence],
		faqs: [
			{
				question: 'First Question',
				answer:
					'First Answer lorem ipsum sit amet First Answer lorem ipsum sit amet First Answer lorem ipsum sit amet First Answer lorem ipsum sit amet First Answer lorem ipsum sit amet First Answer lorem ipsum sit amet'
			},
			{
				question: 'Second Question',
				answer:
					'Second Answer lorem ipsum sit amet Second Answer lorem ipsum sit amet Second Answer lorem ipsum sit amet Second Answer lorem ipsum sit amet Second Answer lorem ipsum sit amet Second Answer lorem ipsum sit amet'
			},
			{
				question: 'Third Question',
				answer:
					'Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet'
			},
			{
				question: 'Forth Question',
				answer:
					'Forth Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet'
			},
			{
				question: 'Fifth Question',
				answer:
					'Fifth Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet'
			},
			{
				question: 'Sixth Question',
				answer:
					'Sixth Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet'
			}
		]
	},
	videos: [
		{
			name: 'First Lesson',
			excerpt: ' ipsum',
			link: 'https://www.youtube/test',
			subjects: [SubjectsEnum.Webdev],
			date: new Date(2023, 0, 20, 13, 30),
			chapters: [
				{
					name: 'Chapter 1, Lesson 1 - Introduction to Flow',
					link: '/catalog/courses/basic-dapp/chapter1/lesson1.md	'
				},
				{
					name: 'Chapter 2, Lesson 1 - Introduction to Flow',
					link: '/catalog/courses/basic-dapp/chapter1/lesson2.md'
				}
			]
		},
		{
			name: 'Second Lesson',
			excerpt: 'Loremn ipsum',
			link: 'https://www.youtube/test',
			subjects: [SubjectsEnum.Webdev],
			date: new Date(2023, 1, 17, 15, 30),
			chapters: [
				{
					name: 'Chapter 1, Lesson 2 - Introduction to Flow',
					link: '/catalog/courses/basic-dapp/chapter2/lesson1.md'
				},
				{
					name: 'Chapter 2, Lesson 2 - Introduction to Flow',
					link: '/catalog/courses/basic-dapp/chapter2/lesson2.md'
				}
			]
		}
	]
};
