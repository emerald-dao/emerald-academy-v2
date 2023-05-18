import type { CadenceChallenge } from '$lib/types/content/cadence-challenge.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

export const overview: CadenceChallenge = {
	title: 'Third Challenge example',
	contentType: ContentTypeEnum.Challenge,
	prize: 10,
	link: 'https://www.google.com',
	description: 'This is a challenge example',
	image:
		'https://cdn.discordapp.com/attachments/1054775421671055390/1105958725711319201/tsnakejake_A_cartoon_man_reading_a_mystical_book_with_an_emeral_d5f03067-6692-4152-8ade-37621c0776b5.png'
};
