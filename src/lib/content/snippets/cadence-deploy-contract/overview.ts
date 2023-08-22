import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Deploy a Contract in Cadence',
  contentType: ContentTypeEnum.Snippet,
  author: {
    name: 'Jacob Tucker',
    socialMediaUrl: 'https://twitter.com/jacobmtucker',
    avatarUrl: 'https://avatars.githubusercontent.com/u/15198786?v=4',
    isVerified: true,
    walletAddress: '0x99bd48c8036e2876'
  },
  excerpt: 'Learn how to deploy a smart contract directly in Cadence.',
  metadata: {
    subjects: [SubjectsEnum.Cadence]
  },
  codeLink: 'https://run.ecdao.org?code=dHJhbnNhY3Rpb24oCiAgY29udHJhY3RDb2RlOiBTdHJpbmcsIC8vIG11c3QgYmUgYSBoZXggc3RyaW5nIG9mIHlvdXIgY29udHJhY3QgY29kZQogIGNvbnRyYWN0TmFtZTogU3RyaW5nIC8vIG11c3QgbWF0Y2ggdGhlIG5hbWUgb2YgdGhlIGNvbnRyYWN0IHlvdSdyZSBkZXBsb3lpbmcKKSB7CiAgcHJlcGFyZShzaWduZXI6IEF1dGhBY2NvdW50KSB7CiAgICAgIHNpZ25lci5jb250cmFjdHMuYWRkKAogICAgICAgICAgbmFtZTogY29udHJhY3ROYW1lLAogICAgICAgICAgY29kZTogY29udHJhY3RDb2RlLmRlY29kZUhleCgpCiAgICAgICkKICB9Cn0%3D&network=testnet&args=e30%3D'
};
