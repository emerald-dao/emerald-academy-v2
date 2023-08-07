import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SubjectOverview } from '$lib/types/content/subjects.interface';

export const overview: SubjectOverview = {
	name: SubjectsEnum.DApp,
	title: 'DApp Dev',
	description:
		'去中心化应用程序 (DApps) 是在去中心化网络而非单个计算机或服务器上运行的数字应用程序或程序。它们建立在区块链技术之上，并使用加密货币作为交换手段。',
	shortcuts: [
		{
			name: '查看示例 DApps',
			url: '/en/quickstarts'
		},
		{
			name: 'DApp SDKs',
			url: 'https://developers.flow.com/tools#sdks'
		}
	],
	icon: 'tabler:app-window'
};
