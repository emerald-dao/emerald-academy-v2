import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SubjectOverview } from '$lib/types/content/subjects.interface';

export const overview: SubjectOverview = {
	name: SubjectsEnum.DApp,
	title: 'Desarrollo de DApps',
	description:
		'Las aplicaciones descentralizadas (DApps) son aplicaciones o programas digitales que se ejecutan en una red descentralizada, en lugar de en un solo ordenador o servidor. Se construyen con tecnología de blockchain y utilizan criptomonedas como medio de intercambio.',
	shortcuts: [
		{
			name: 'Ver DApps de ejemplo',
			url: '/en/quickstarts'
		},
		{
			name: 'DApp SDKs',
			url: 'https://developers.flow.com/tools#sdks'
		}
	],
	icon: 'tabler:app-window'
};
