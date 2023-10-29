import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SubjectOverview } from '$lib/types/content/subjects.interface';

export const overview: SubjectOverview = {
	name: SubjectsEnum.DApp,
	title: 'DApp Development',
	description:
		'Decentralized applications (DApps) are just like regular applications except they use the blockchain in some way, most likely through the use of smart contracts.',
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
