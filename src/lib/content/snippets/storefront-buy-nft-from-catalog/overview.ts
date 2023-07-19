import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Buy an NFT in Cadence',
  contentType: ContentTypeEnum.Snippet,
  author: {
    name: 'Brian Min',
    socialMediaUrl: 'https://twitter.com/BrianMin_',
    avatarUrl: 'https://flowverse.myfilebase.com/ipfs/bafybeige6rafun3hfyhamxxl44q6yqox4krrlyvjvr2k2ktiulnevdf74e?img-width=400&img-height=400',
    isVerified: true,
    walletAddress: '0xf5e083ba056886de'
  },
  excerpt: 'Buy an NFT listed on NFTStorefrontV2 via NFT Catalog.',
  metadata: {
    subjects: [SubjectsEnum.DApp]
  },
  codeLink: 'https://github.com/bymi15/flow-code-snippets/blob/main/storefront-buy-nft-from-catalog.cdc'
};
