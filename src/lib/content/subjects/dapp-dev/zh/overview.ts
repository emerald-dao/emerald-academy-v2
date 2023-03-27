import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SubjectOverview } from '$lib/types/content/subjects.interface';

export const overview: SubjectOverview = {
	name: SubjectsEnum.DApp,
	description:
		'Decentralized applications (dApps) are digital applications or programs that run on a decentralized network, rather than a single computer or server. They are built on blockchain technology and use cryptocurrency as a means of exchange.',
	shortcuts: [
		{
			name: 'Official Cadence Documentation',
			url: 'https://docs.onflow.org/cadence'
		},
		{
			name: 'Cadence Playground',
			url: 'https://play.onflow.org'
		},
		{
			name: 'Cadence Language Reference',
			url: 'https://docs.onflow.org/cadence/language/'
		}
	],
	icon: 'tabler:app-window'
};
