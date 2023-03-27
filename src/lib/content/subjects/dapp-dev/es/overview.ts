import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SubjectOverview } from '$lib/types/content/subjects.interface';

export const overview: SubjectOverview = {
	name: SubjectsEnum.DApp,
	description:
		'Las aplicaciones descentralizadas (dApps) son aplicaciones o programas digitales que se ejecutan en una red descentralizada, en lugar de en un solo ordenador o servidor. Se construyen con tecnología de blockchain y utilizan criptomonedas como medio de intercambio.',
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
			name: 'Referencia del lenguaje Cadence',
			url: 'https://docs.onflow.org/cadence/language/'
		}
	],
	icon: 'tabler:app-window'
};
