import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Pass a Struct Arg to Cadence in FCL',
  contentType: ContentTypeEnum.Snippet,
  author: {
    name: 'Jacob Tucker',
    socialMediaUrl: 'https://twitter.com/jacobmtucker',
    avatarUrl: '/avatars/jacob.jpeg',
    isVerified: true,
    walletAddress: '0x99bd48c8036e2876'
  },
  excerpt: 'Learn how to pass a struct argument to a Cadence script or transaction in FCL.',
  metadata: {
    subjects: [SubjectsEnum.Javascript]
  },
  codeLink: 'https://codesandbox.io/s/fcl-struct-arg-lp6yqq?file=/src/index.js:283-311'
};
