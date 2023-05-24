import type { CadenceChallenge } from '$lib/types/content/cadence-challenge.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: CadenceChallenge = {
	title: 'Simple Profile',
	contentType: ContentTypeEnum.Challenge,
	prize: 5,
	link: 'https://play.flow.com/',
	description: 'Define a contract that has a Profile resource in it. The Profile must have an id (incremental based on a total supply), name, and address. Allow the owner of the Profile to store it in their account and change their name, and allow public users to read all the information about a users profile.',
	image: 'https://media.discordapp.net/attachments/1054775421671055390/1105958730799005876/Mateo_Roldos_An_avatar_for_the_Emerald_City_student._Emerald_Ci_0d9c4a87-8861-4779-bd9a-080ef0c838a5.png?width=662&height=662',
	subjects: [SubjectsEnum.Cadence]
};
