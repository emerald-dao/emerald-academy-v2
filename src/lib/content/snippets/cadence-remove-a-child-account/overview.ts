import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Account Linking - Remove a Child Account',
  contentType: ContentTypeEnum.Snippet,
  author: {
    name: 'Jacob Tucker',
    socialMediaUrl: 'https://twitter.com/jacobmtucker',
    avatarUrl: 'https://avatars.githubusercontent.com/u/15198786?v=4',
    isVerified: true,
    walletAddress: '0x99bd48c8036e2876'
  },
  excerpt: "Learn how to remove a child account for account linking.",
  metadata: {
    subjects: [SubjectsEnum.Cadence]
  },
  codeLink: 'https://run.ecdao.org/?code=aW1wb3J0IEh5YnJpZEN1c3RvZHkgZnJvbSAweGQ4YTdlMDVhN2FjNjcwYzAKCnRyYW5zYWN0aW9uKGNoaWxkOiBBZGRyZXNzKSB7CiAgICBwcmVwYXJlIChhY2N0OiBBdXRoQWNjb3VudCkgewogICAgICAgIGxldCBtYW5hZ2VyID0gYWNjdC5ib3Jyb3c8Jkh5YnJpZEN1c3RvZHkuTWFuYWdlcj4oZnJvbTogSHlicmlkQ3VzdG9keS5NYW5hZ2VyU3RvcmFnZVBhdGgpCiAgICAgICAgICAgID8%2FIHBhbmljKCJtYW5hZ2VyIG5vdCBmb3VuZCIpCiAgICAgICAgbWFuYWdlci5yZW1vdmVDaGlsZChhZGRyOiBjaGlsZCkKICAgIH0KfQ%3D%3D&network=mainnet&args=eyJjaGlsZCI6IjB4Q2hpbGRBZGRyZXNzSGVyZSJ9'
};
