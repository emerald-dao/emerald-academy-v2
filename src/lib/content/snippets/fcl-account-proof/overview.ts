import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Proving Authentication with FCL (Account Proof)',
  contentType: ContentTypeEnum.Snippet,
  author: {
    name: 'Jacob Tucker',
    socialMediaUrl: 'https://twitter.com/jacobmtucker',
    avatarUrl: '/avatars/jacob.jpeg',
    isVerified: true,
    walletAddress: '0x99bd48c8036e2876'
  },
  excerpt: 'Learn how to verify a users authentication ("account proof") using FCL on testnet and mainnet.',
  metadata: {
    subjects: [SubjectsEnum.DApp, SubjectsEnum.Javascript]
  },
  codeLink: 'https://codesandbox.io/s/fcl-account-proof-2dmv2m?file=/src/App.js'
};
