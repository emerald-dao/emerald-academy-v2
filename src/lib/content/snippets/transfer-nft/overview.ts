import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
    title: 'Transfer an NFT in Cadence',
    contentType: ContentTypeEnum.Snippet,
    author: {
        name: 'Jacob Tucker',
        socialMediaUrl: 'https://twitter.com/jacobmtucker',
        avatarUrl: 'https://avatars.githubusercontent.com/u/15198786?v=4',
        isVerified: true,
        walletAddress: '0x99bd48c8036e2876'
    },
    excerpt: 'Transfer a NonFungibleToken-implementing NFT in Cadence.',
    metadata: {
        subjects: [SubjectsEnum.Cadence]
    },
    codeLink: 'https://github.com/onflow/flow-nft/blob/master/transactions/transfer_nft.cdc'
};
