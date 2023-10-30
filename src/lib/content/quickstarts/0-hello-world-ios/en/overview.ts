import type { Quickstart } from '$lib/types/content/quickstart.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: Quickstart = {
	title: 'Hello World',
	id: 0,
	isRecommended: false,
	contentType: ContentTypeEnum.Quickstart,
	audited: true,
	techstack: ['swiftui'],
	author: {
		name: 'BoiseITGuru',
		socialMediaUrl: 'https://twitter.com/boise_it_guru',
		avatarUrl:
			'https://avatars.githubusercontent.com/u/3641594?s=400&u=044fd05bc61270527c4da99212f143595d6fa4a1&v=4',
		isVerified: true,
		walletAddress: '0x76d988a29af9ea8d'
	},
	quickstartRepositoryUrl: 'https://github.com/boiseitguru/0-hello-world-ios',
	excerpt: 'A mobile DApp that lets users read and change a greeting field on Flow testnet.',
	metadata: {
		subjects: [SubjectsEnum.DApp, SubjectsEnum.Swift]
	}
};
