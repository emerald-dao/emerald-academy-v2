import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Sign & Verify a User Message On Chain',
  contentType: ContentTypeEnum.Snippet,
  author: {
    name: 'Jacob Tucker',
    socialMediaUrl: 'https://twitter.com/jacobmtucker',
    avatarUrl: '/avatars/jacob.jpeg',
    isVerified: true,
    walletAddress: '0x99bd48c8036e2876'
  },
  excerpt: 'Sign a user message with FCL and verify it on chain in Cadence.',
  metadata: {
    subjects: [SubjectsEnum.DApp, SubjectsEnum.Javascript, SubjectsEnum.Cadence]
  },
  codeLink: 'https://codesandbox.io/s/verify-signature-on-chain-vk7mt7?file=/src/index.js'
};
