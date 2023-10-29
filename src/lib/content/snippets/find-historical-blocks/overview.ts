import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Fetch Historical Blocks',
  contentType: ContentTypeEnum.Snippet,
  author: {
    name: 'Find Labs',
    socialMediaUrl: 'https://twitter.com/findlabs',
    avatarUrl: '/avatars/find-labs.jpg',
    isVerified: true
  },
  excerpt: 'Learn how to fetch blocks with the Historical API.',
  metadata: {
    subjects: [SubjectsEnum.DApp, SubjectsEnum.Javascript]
  },
  codeLink: 'https://codesandbox.io/s/find-historical-blocks-ky689v?file=/src/index.js:0-333'
};
