import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Execute a Transaction w/ FCL (Non-Custodial Wallet)',
  contentType: ContentTypeEnum.Snippet,
  author: {
    name: 'Max Starka',
    socialMediaUrl: 'https://twitter.com/MaxStalker',
    avatarUrl: 'https://pbs.twimg.com/profile_images/1476344533172510722/5Bka7etN_400x400.jpg',
    isVerified: true,
  },
  excerpt: 'Learn how to execute a basic transaction with FCL using a non-custodial wallet (aka with a private key).',
  metadata: {
    subjects: [SubjectsEnum.DApp, SubjectsEnum.Javascript]
  },
  codeLink: 'https://codesandbox.io/s/fcl-non-custodial-transaction-v1-zjp3pr'
};
