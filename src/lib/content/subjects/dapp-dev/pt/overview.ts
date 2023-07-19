import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SubjectOverview } from '$lib/types/content/subjects.interface';

export const overview: SubjectOverview = {
	name: SubjectsEnum.DApp,
	title: 'Desenvolvimento de DApps',
	description:
		'As aplicações descentralizadas (DApps) são aplicações ou programas digitais que são executados em uma rede descentralizada, em vez de em um único computador ou servidor. São construídas com tecnologia de blockchain e utilizam criptomoedas como meio de troca.',
	shortcuts: [
		{
			name: 'Ver DApps de exemplo',
			url: '/pt/quickstarts'
		},
		{
			name: 'DApp SDKs',
			url: 'https://developers.flow.com/tools#sdks'
		}
	],
	icon: 'tabler:app-window'
};
