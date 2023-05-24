import type { CadenceChallenge } from '$lib/types/content/cadence-challenge.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: CadenceChallenge = {
	title: 'First Challenge example',
	contentType: ContentTypeEnum.Challenge,
	prize: 10,
	link: 'https://www.google.com',
	description:
		'This is the first challenge description. The first challenge description. This is the first challenge description',
	image:
		'https://media.discordapp.net/attachments/1054775421671055390/1105958730799005876/Mateo_Roldos_An_avatar_for_the_Emerald_City_student._Emerald_Ci_0d9c4a87-8861-4779-bd9a-080ef0c838a5.png?width=662&height=662',
	solved: {
		answerLink: 'https://www.google.com',
		author: {
			name: 'Nacho',
			socialMediaUrl: 'https://www.google.com',
			isVerified: false
		},
		answerDescription:
			'This is the first challenge description. The first challenge description. This is the first challenge description.This is the first challenge description. The first challenge description. This is the first challenge description'
	},
	subjects: [SubjectsEnum.Cadence, SubjectsEnum.Backend]
};
