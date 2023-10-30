import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SubjectOverview } from '$lib/types/content/subjects.interface';

export const overview: SubjectOverview = {
	name: SubjectsEnum.Cadence,
	title: 'Cadence',
	description:
		'Cadence is the most composable, easiest to write, and safest smart contract language.',
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
