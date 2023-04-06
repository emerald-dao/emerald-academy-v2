import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SubjectOverview } from '$lib/types/content/subjects.interface';

export const overview: SubjectOverview = {
	name: SubjectsEnum.Cadence,
	title: 'Cadence',
	description:
		'Cadence is a resource-oriented programming language that introduces new features to smart contract programming that help developers ensure that their code is safe, secure, clear, and approachable.',
	shortcuts: [
		{
			name: 'Cadence Documentation',
			url: 'https://docs.onflow.org/cadence'
		},
		{
			name: 'Cadence Playground',
			url: 'https://play.onflow.org'
		},
		{
			name: 'Beginner Course',
			url: '/en/catalog/courses/beginner-cadence'
		}
	],
	icon: 'tabler:file-code'
};
