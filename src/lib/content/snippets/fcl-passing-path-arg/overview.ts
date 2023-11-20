import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Pass a Storage/Public Path Arg to Cadence in FCL',
  contentType: ContentTypeEnum.Snippet,
  author: {
    name: 'Jacob Tucker',
    socialMediaUrl: 'https://twitter.com/jacobmtucker',
    avatarUrl: '/avatars/jacob.jpeg',
    isVerified: true,
    walletAddress: '0x99bd48c8036e2876'
  },
  excerpt: 'Learn how to pass a storage/public path arg to a Cadence script or transaction in FCL.',
  metadata: {
    subjects: [SubjectsEnum.Javascript]
  },
  codeLink: 'https://codesandbox.io/s/fcl-path-arg-cng36l?file=/src/index.js'
};
