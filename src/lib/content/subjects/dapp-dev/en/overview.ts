import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SubjectOverview } from '$lib/types/content/subjects.interface';

export const overview: SubjectOverview = {
	name: SubjectsEnum.DApp,
	title: 'DApp Dev',
	description:
		'Decentralized applications (DApps) are digital applications or programs that run on a decentralized network, rather than a single computer or server. They are built on blockchain technology and use cryptocurrency as a means of exchange.',
	shortcuts: [
		{
			name: 'View Example DApps',
			url: '/en/quickstarts'
		},
		{
			name: 'DApp SDKs',
			url: 'https://developers.flow.com/tools#sdks'
		}
	],
	icon: 'tabler:app-window'
};
