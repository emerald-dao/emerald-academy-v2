import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Create an Account in Cadence',
  contentType: ContentTypeEnum.Snippet,
  author: {
    name: 'Jacob Tucker',
    socialMediaUrl: 'https://twitter.com/jacobmtucker',
    avatarUrl: 'https://avatars.githubusercontent.com/u/15198786?v=4',
    isVerified: true,
    walletAddress: '0x99bd48c8036e2876'
  },
  excerpt: 'Learn how to create an account directly in Cadence.',
  metadata: {
    subjects: [SubjectsEnum.Cadence]
  },
  codeLink: 'https://run.ecdao.org?code=dHJhbnNhY3Rpb24ocHVibGljS2V5OiBTdHJpbmcpIHsKICAgIHByZXBhcmUoc2lnbmVyOiBBdXRoQWNjb3VudCkgewogICAgICAgIGxldCBrZXkgPSBQdWJsaWNLZXkoCiAgICAgICAgICAgIHB1YmxpY0tleTogcHVibGljS2V5LmRlY29kZUhleCgpLAogICAgICAgICAgICBzaWduYXR1cmVBbGdvcml0aG06IFNpZ25hdHVyZUFsZ29yaXRobS5FQ0RTQV9QMjU2CiAgICAgICAgKQoKICAgICAgICBsZXQgYWNjb3VudCA9IEF1dGhBY2NvdW50KHBheWVyOiBzaWduZXIpCgogICAgICAgIGFjY291bnQua2V5cy5hZGQoCiAgICAgICAgICAgIHB1YmxpY0tleToga2V5LAogICAgICAgICAgICBoYXNoQWxnb3JpdGhtOiBIYXNoQWxnb3JpdGhtLlNIQTNfMjU2LAogICAgICAgICAgICB3ZWlnaHQ6IDEwMDAuMAogICAgICAgICkKICAgIH0KfQ%3D%3D&network=testnet&args=e30%3D'
};
