import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Execute Scripts using Unity SDK',
  contentType: ContentTypeEnum.Snippet,
  excerpt: 'Learn how to execute scripts using Flow Unity SDK.',
  author: {
    name: 'Memxor',
    socialMediaUrl: 'https://twitter.com/memxor_',
    avatarUrl: 'https://i.imgur.com/Nfww3sn.png',
    isVerified: true,
    walletAddress: '0x22f61baed6c7eede'
  },
  metadata: {
    subjects: [SubjectsEnum.DApp, SubjectsEnum.Unity]
  }
};