import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SubjectOverview } from '$lib/types/content/subjects.interface';

export const overview: SubjectOverview = {
	name: SubjectsEnum.Cadence,
	title: 'Cadence',
	description:
		'Cadence é uma linguagem de programação orientada a recursos que introduz novos recursos na programação de contratos inteligentes, ajudando os desenvolvedores a garantir que seu código seja seguro, claro e acessível.',
	shortcuts: [
		{
			name: 'Documentação da Cadence',
			url: 'https://docs.onflow.org/cadence'
		},
		{
			name: 'Praticar Cadence',
			url: 'https://play.onflow.org'
		},
		{
			name: 'Curso para Iniciantes',
			url: '/pt/catalog/courses/beginner-cadence'
		}
	],
	icon: 'tabler:file-code'
};
