import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SubjectOverview } from '$lib/types/content/subjects.interface';

export const overview: SubjectOverview = {
	name: SubjectsEnum.DApp,
	title: 'DApp Dev',
	description:
		'Децентрализованные приложения (DApps) — это цифровые приложения или программы, которые работают в децентрализованной сети, а не на одном компьютере или сервере. Они построены на технологии блокчейн и используют криптовалюту в качестве средства обмена.',
	shortcuts: [
		{
			name: 'посмотреть пример DApps',
			url: '/en/quickstarts'
		},
		{
			name: 'DApp SDKs',
			url: 'https://developers.flow.com/tools#sdks'
		}
	],
	icon: 'tabler:app-window'
};
