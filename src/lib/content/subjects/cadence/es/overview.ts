import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SubjectOverview } from '$lib/types/content/subjects.interface';

export const overview: SubjectOverview = {
	name: SubjectsEnum.Cadence,
	title: 'Cadence',
	description:
		'Cadence es un lenguaje de programación orientado a recursos que introduce nuevas características en la programación de contratos inteligentes que ayudan a los desarrolladores a garantizar que su código sea seguro, claro y accesible.',
	shortcuts: [
		{
			name: 'Documentación de Cadence',
			url: 'https://docs.onflow.org/cadence'
		},
		{
			name: 'Ejercitar Cadence',
			url: 'https://play.onflow.org'
		},
		{
			name: 'Curso para Principiantes',
			url: '/en/catalog/courses/beginner-cadence'
		}
	],
	icon: 'tabler:file-code'
};
