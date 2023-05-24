import type { CadenceChallenge } from '$lib/types/content/cadence-challenge.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: CadenceChallenge = {
	title: 'Simple Profile',
	contentType: ContentTypeEnum.Challenge,
	prize: 5,
	link: 'https://play.flow.com/',
	description: 'Define a contract that has a Profile resource in it. The Profile must have an id (incremental based on a total supply), name, and address. Allow the owner of the Profile to store it in their account and change their name, and allow public users to read all the information about a users profile.',
	image: 'https://cdn.discordapp.com/attachments/1054775421671055390/1105958725711319201/tsnakejake_A_cartoon_man_reading_a_mystical_book_with_an_emeral_d5f03067-6692-4152-8ade-37621c0776b5.png',
	subjects: [SubjectsEnum.Cadence]
};
