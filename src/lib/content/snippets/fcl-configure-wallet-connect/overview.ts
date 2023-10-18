import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Configure WalletConnect w/ FCL',
  contentType: ContentTypeEnum.Snippet,
  author: {
    name: 'Jacob Tucker',
    socialMediaUrl: 'https://twitter.com/jacobmtucker',
    avatarUrl: 'https://avatars.githubusercontent.com/u/15198786?v=4',
    isVerified: true,
    walletAddress: '0x99bd48c8036e2876'
  },
  excerpt: 'Configure WalletConnect and mobile wallets with FCL.',
  metadata: {
    subjects: [SubjectsEnum.DApp, SubjectsEnum.Javascript]
  },
  codeLink: 'https://codesandbox.io/s/fcl-configure-wallet-connect-nd7qxr?file=/src/App.js'
};
