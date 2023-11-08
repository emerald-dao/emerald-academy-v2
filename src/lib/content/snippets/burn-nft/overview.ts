import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Burn an NFT in Cadence',
  contentType: ContentTypeEnum.Snippet,
  author: {
    name: 'Jacob Tucker',
    socialMediaUrl: 'https://twitter.com/jacobmtucker',
    avatarUrl: '/avatars/jacob.jpeg',
    isVerified: true,
    walletAddress: '0x99bd48c8036e2876'
  },
  excerpt: 'Learn how to burn an NFT in Cadence using the example Avataaars contract.',
  metadata: {
    subjects: [SubjectsEnum.Cadence]
  },
  codeLink: 'https://run.ecdao.org?code=aW1wb3J0IEF2YXRhYWFycyBmcm9tIDB4Y2I5YTgxMjczN2JiYzY3OQoKdHJhbnNhY3Rpb24obmZ0SUQ6IFVJbnQ2NCkgewoKICBsZXQgQ29sbGVjdGlvbjogJkF2YXRhYWFycy5Db2xsZWN0aW9uCgogIHByZXBhcmUoc2lnbmVyOiBBdXRoQWNjb3VudCkgewogICAgLy8gYm9ycm93IGEgcmVmZXJlbmNlIHRvIHRoZSBzaWduZXIncyBjb2xsZWN0aW9uCiAgICBzZWxmLkNvbGxlY3Rpb24gPSBzaWduZXIuYm9ycm93PCZBdmF0YWFhcnMuQ29sbGVjdGlvbj4oZnJvbTogQXZhdGFhYXJzLkNvbGxlY3Rpb25TdG9yYWdlUGF0aCkKICAgICAgICAgICAgICAgICAgICAgICAgPz8gcGFuaWMoIlRoZSBzaWduZXIgZG9lcyBub3QgaGF2ZSBhbiBBdmF0YWFhcnMgY29sbGVjdGlvbiBzZXQgdXAsIGFuZCB0aGVyZWZvcmUgbm8gTkZUcyB0byBidXJuLiIpCiAgfQoKICBleGVjdXRlIHsKICAgIC8vIHdpdGhkcmF3IHRoZSBuZnQgZnJvbSB0aGUgY29sbGVjdGlvbgogICAgbGV0IG5mdCA8LSBzZWxmLkNvbGxlY3Rpb24ud2l0aGRyYXcod2l0aGRyYXdJRDogbmZ0SUQpCiAgICAKICAgIC8vIGRlc3Ryb3ksIG9yICJidXJuIiwgdGhlIG5mdAogICAgZGVzdHJveSBuZnQKICB9Cn0%3D&network=mainnet&args=e30%3D'
};
