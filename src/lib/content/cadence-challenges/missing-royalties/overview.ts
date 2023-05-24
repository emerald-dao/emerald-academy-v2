import type { CadenceChallenge } from '$lib/types/content/cadence-challenge.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: CadenceChallenge = {
	title: 'Missing Royalties',
	contentType: ContentTypeEnum.Challenge,
	prize: 2,
	link: 'https://play.flow.com/8b898b01-cc6e-4947-8ad7-ffb6a85aa71d?type=contract&id=84ec9b85-db6a-475a-80f9-ba6ce60defe7',
	description: 'An NFT contract called ExampleNFT has been created. However, the contract creator forgot to configure Royalties for the NFT! Using MetadataViews, add Royalties to your NFT so third party marketplaces can discover them.',
	image: 'https://media.discordapp.net/attachments/1054775421671055390/1105958730799005876/Mateo_Roldos_An_avatar_for_the_Emerald_City_student._Emerald_Ci_0d9c4a87-8861-4779-bd9a-080ef0c838a5.png?width=662&height=662',
	subjects: [SubjectsEnum.Cadence]
};
