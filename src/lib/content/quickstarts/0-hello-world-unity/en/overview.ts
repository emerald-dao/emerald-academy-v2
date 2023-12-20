import type { Quickstart } from '$lib/types/content/quickstart.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: Quickstart = {
	title: 'Hello World',
	id: 0,
	isRecommended: false,
	contentType: ContentTypeEnum.Quickstart,
	audited: true,
	techstack: ['unity'],
	author: {
		name: 'Memxor',
		socialMediaUrl: 'https://twitter.com/memxor_',
		avatarUrl: 'https://i.imgur.com/Nfww3sn.png',
		isVerified: true,
		walletAddress: '0x22f61baed6c7eede'
	},
	quickstartRepositoryUrl: 'https://github.com/memxor/FlowGreetingsUnity/',
	excerpt: 'Change and read a greeting field on Flow Testnet.',
	metadata: {
		subjects: [SubjectsEnum.DApp]
	}
};
