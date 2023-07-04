import type { Template } from '$lib/types/content/templates.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

export const overview: Template = {
	title: 'Hello World - Swift (iOS/iPadOS)',
	contentType: ContentTypeEnum.MobileQuickstart,
	audited: true,
	web: 'SwiftUI',
	author: {
		name: 'BoiseITGuru',
		socialMediaUrl: 'https://twitter.com/boiseitguru',
		avatarUrl:
			'https://avatars.githubusercontent.com/u/3641594?s=400&u=044fd05bc61270527c4da99212f143595d6fa4a1&v=4',
		isVerified: true
	},
	templateRepositoryUrl: 'github.com/boiseitguru/0-hello-world-ios',
	description: 'A mobile DApp that lets users read and change a greeting field on Flow testnet.'
};
