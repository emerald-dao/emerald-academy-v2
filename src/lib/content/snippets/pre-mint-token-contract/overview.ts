import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
    title: 'Token Contract with Pre-Mint Capability',
    contentType: ContentTypeEnum.Snippet,
    author: {
        name: 'Opeyemi Oginni',
        socialMediaUrl: 'https://github.com/OpeOginni',
        avatarUrl: 'https://avatars.githubusercontent.com/u/107570612?v=4',
        // isVerified: true, // I dont think Im verified lol
        walletAddress: '0x33d022757904914e'
    },
    metadata: {
        subjects: [SubjectsEnum.Cadence]
    },
    codeLink: 'https://github.com/OpeOginni/your-flow-token/blob/master/cadence/contracts/TokenWithInitMint.cdc'
};
