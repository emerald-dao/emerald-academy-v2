import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SubjectOverview } from '$lib/types/content/subjects.interface';

export const overview: SubjectOverview = {
	name: SubjectsEnum.Cadence,
	title: 'Cadence',
	description:
		'Cadence 是一种面向资源的编程语言，它为智能合约编程引入了新特性，帮助开发人员确保他们的代码安全、可靠、清晰且易于理解。',
	shortcuts: [
		{
			name: 'Cadence 文档',
			url: 'https://docs.onflow.org/cadence'
		},
		{
			name: 'Cadence 测试环境',
			url: 'https://play.onflow.org'
		},
		{
			name: '初学者课程',
			url: '/en/catalog/courses/beginner-cadence'
		}
	],
	icon: 'tabler:file-code'
};
