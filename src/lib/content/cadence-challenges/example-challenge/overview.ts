import type { CadenceChallenge } from '$lib/types/content/cadence-challenge.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: CadenceChallenge = {
	title: 'Example Challenge',
	contentType: ContentTypeEnum.Challenge,
	prize: 0,
	link: 'https://play.flow.com',
	description: 'This is an example Challenge!',
	image: 'https://media.discordapp.net/attachments/1054775421671055390/1105958730799005876/Mateo_Roldos_An_avatar_for_the_Emerald_City_student._Emerald_Ci_0d9c4a87-8861-4779-bd9a-080ef0c838a5.png?width=662&height=662',
	subjects: [SubjectsEnum.Cadence],
	solved: {
		answerLink: 'https://play.flow.com',
		answerDescription: 'I fixed the part of the code where...',
		author: {
			name: 'Jacob Tucker',
			socialMediaUrl: 'https://twitter.com/jacobmtucker',
			avatarUrl: 'https://avatars.githubusercontent.com/u/15198786?v=4',
			isVerified: true,
			walletAddress: '0x99bd48c8036e2876'
		},
	}
};
