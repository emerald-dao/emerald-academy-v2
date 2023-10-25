import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Fetch Historical Transaction Data',
  contentType: ContentTypeEnum.Snippet,
  author: {
    name: 'Find Labs',
    socialMediaUrl: 'https://twitter.com/findlabs',
    avatarUrl: '/avatars/find-labs.jpg',
    isVerified: true
  },
  excerpt: 'Learn how to fetch transaction data with the Historical API.',
  metadata: {
    subjects: [SubjectsEnum.DApp, SubjectsEnum.Javascript]
  },
  codeLink: 'https://codesandbox.io/s/find-historical-tx-data-qh2vk3'
};
