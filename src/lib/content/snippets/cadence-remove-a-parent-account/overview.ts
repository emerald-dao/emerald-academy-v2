import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Account Linking - Remove a Parent Account',
  contentType: ContentTypeEnum.Snippet,
  author: {
    name: 'Austin',
    socialMediaUrl: 'https://twitter.com/austin_flowty',
    avatarUrl: 'https://i.imgur.com/UzTJ6oW.png',
    isVerified: true,
    walletAddress: '0x4a03a8d4a234aa26'
  },
  excerpt: "Learn how to remove a parent account for account linking.",
  metadata: {
    subjects: [SubjectsEnum.Cadence]
  },
  codeLink: 'https://run.ecdao.org/?code=aW1wb3J0IEh5YnJpZEN1c3RvZHkgZnJvbSAweGQ4YTdlMDVhN2FjNjcwYzAKCnRyYW5zYWN0aW9uKHBhcmVudDogQWRkcmVzcykgewogICAgcHJlcGFyZSAoYWNjdDogQXV0aEFjY291bnQpIHsKICAgICAgICBsZXQgb3duZWRBY2NvdW50ID0gYWNjdC5ib3Jyb3c8Jkh5YnJpZEN1c3RvZHkuT3duZWRBY2NvdW50Pihmcm9tOiBIeWJyaWRDdXN0b2R5Lk93bmVkQWNjb3VudFN0b3JhZ2VQYXRoKQogICAgICAgICAgICA%2FPyBwYW5pYygib3duZWQgYWNjb3VudCBub3QgZm91bmQiKQogICAgICAgIG93bmVkQWNjb3VudC5yZW1vdmVQYXJlbnQoYWRkcjogcGFyZW50KQogICAgfQp9&network=mainnet&args=eyJwYXJlbnQiOiIweFBhcmVudEFkZHJlc3NIZXJlIn0%3D'
};
