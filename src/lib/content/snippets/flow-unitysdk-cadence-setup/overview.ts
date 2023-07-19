import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Cadence Setup using UnitySDK',
  contentType: ContentTypeEnum.Snippet,
  excerpt: 'Learn how to setup cadence using Flow Unity SDK.',
  author: {
    name: 'Memxor',
    socialMediaUrl: 'https://twitter.com/memxor_',
    avatarUrl: 'https://imgur.com/Nfww3sn',
    isVerified: true,
    walletAddress: '0x22f61baed6c7eede'
  },
  metadata: {
    subjects: [SubjectsEnum.DApp]
  }
};