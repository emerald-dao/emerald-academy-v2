import type { CourseOverview } from '$lib/types/content/course.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import { generateSlug } from '$lib/utilities/dataTransformation/generateSlug';

export const overview: CourseOverview = {
	title: 'Dapp Basica',
	contentType: ContentTypeEnum.Course,
	slug: generateSlug(import.meta.url),
	excerpt: 'Este es el curso para hacer dapps con Flow de forma decentralizada',
	metadata: {
		expertise: ExpertiseEnum.begginer,
		duration: '3 semanas',
		prerequisites: ['javascript'],
		subjects: [SubjectsEnum.Backend],
		faqs: [
			{
				question: 'Primera Pregunta',
				answer:
					'First Answer lorem ipsum sit amet First Answer lorem ipsum sit amet First Answer lorem ipsum sit amet First Answer lorem ipsum sit amet First Answer lorem ipsum sit amet First Answer lorem ipsum sit amet'
			},
			{
				question: 'Segunda Pregunta',
				answer:
					'Second Answer lorem ipsum sit amet Second Answer lorem ipsum sit amet Second Answer lorem ipsum sit amet Second Answer lorem ipsum sit amet Second Answer lorem ipsum sit amet Second Answer lorem ipsum sit amet'
			},
			{
				question: 'Tercera Pregunta',
				answer:
					'Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet'
			},
			{
				question: 'Cuarta Pregunta',
				answer:
					'Forth Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet'
			},
			{
				question: 'Quinta Pregunta',
				answer:
					'Fifth Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet'
			},
			{
				question: 'Sexta Pregunta',
				answer:
					'Sixth Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet Third Answer lorem ipsum sit amet'
			}
		]
	}
};
