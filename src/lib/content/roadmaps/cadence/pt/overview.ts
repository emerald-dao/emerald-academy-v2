import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';

export const overview: RoadmapOverview = {
	title: 'Cadence',
	contentType: ContentTypeEnum.Roadmap,
	excerpt: 'Vá do zero ao herói em Cadence.',
	metadata: {
		duration: '11 capítulos',
		prerequisites: ['Nenhum'],
		subjects: [SubjectsEnum.Cadence]
	},
	contents: [
		{
			title: 'Cadence por Exemplo',
			excerpt: 'Aprenda Cadence através de exemplos simples.',
			contentType: ContentTypeEnum.External,
			duration: '1 semana',
			subjects: [SubjectsEnum.Cadence],
			url: 'cadence-by-example'
		},
		{
			title: 'Curso Básico de Cadence',
			excerpt: 'Obtenha uma introdução ao Cadence.',
			contentType: ContentTypeEnum.Course,
			duration: '6 capítulos',
			subjects: [SubjectsEnum.Cadence],
			url: 'catalog/courses/beginner-cadence'
		},
		{
			title: 'Curso Intermediário de Cadence',
			excerpt: 'Domine os elementos mais complicados do Cadence.',
			contentType: ContentTypeEnum.Course,
			duration: '5 capítulos',
			subjects: [SubjectsEnum.Cadence],
			url: 'catalog/courses/intermediate-cadence'
		}
	]
};
