import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Create an Account with FCL',
  contentType: ContentTypeEnum.Snippet,
  author: {
    name: 'Max Starka',
    socialMediaUrl: 'https://twitter.com/MaxStalker',
    avatarUrl: 'https://pbs.twimg.com/profile_images/1476344533172510722/5Bka7etN_400x400.jpg',
    isVerified: true,
  },
  excerpt: 'Learn how to take a public key and create an account with it using FCL.',
  metadata: {
    subjects: [SubjectsEnum.DApp]
  },
  codeLink: 'https://codesandbox.io/s/fcl-create-account-2y4w7z?file=/src/index.js:0-1396'
};
