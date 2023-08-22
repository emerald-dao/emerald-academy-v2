import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Proving Authentication with FCL',
  contentType: ContentTypeEnum.Snippet,
  author: {
    name: 'Jacob Tucker',
    socialMediaUrl: 'https://twitter.com/jacobmtucker',
    avatarUrl: 'https://avatars.githubusercontent.com/u/15198786?v=4',
    isVerified: true,
    walletAddress: '0x99bd48c8036e2876'
  },
  excerpt: 'Learn how to verify a users authentication using FCL on testnet and mainnet.',
  metadata: {
    subjects: [SubjectsEnum.DApp, SubjectsEnum.Javascript]
  },
  codeLink: 'https://codesandbox.io/s/fcl-account-proof-2dmv2m?file=/src/App.js'
};
