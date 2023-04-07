import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SubjectOverview } from '$lib/types/content/subjects.interface';

export const overview: SubjectOverview = {
	name: SubjectsEnum.Cadence,
	title: 'Cadence',
	description:
		'Cadence — это ресурсо-ориентированный язык программирования, который вводит новые функции в программирование смарт-контрактов, которые помогают разработчикам обеспечивать безопасность, надежность, ясность и доступность их кода.',
	shortcuts: [
		{
			name: 'Cadence Документация',
			url: 'https://docs.onflow.org/cadence'
		},
		{
			name: 'Cadence Тестовая среда',
			url: 'https://play.onflow.org'
		},
		{
			name: 'курс для начинающих',
			url: '/en/catalog/courses/beginner-cadence'
		}
	],
	icon: 'tabler:file-code'
};
