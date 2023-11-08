import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Random Number in Cadence',
  contentType: ContentTypeEnum.Snippet,
  author: {
    name: 'Jacob Tucker',
    socialMediaUrl: 'https://twitter.com/jacobmtucker',
    avatarUrl: '/avatars/jacob.jpeg',
    isVerified: true,
    walletAddress: '0x99bd48c8036e2876'
  },
  excerpt: 'Generate a random number bewteen min & max in Cadence using the built-in revertibleRandom function.',
  metadata: {
    subjects: [SubjectsEnum.Cadence]
  },
  codeLink: 'https://run.ecdao.org?code=cHViIGZ1biBtYWluKG1pbjogVUludDY0LCBtYXg6IFVJbnQ2NCk6IFVJbnQ2NCB7CiAgbGV0IHJhbmRvbU51bWJlcjogVUludDY0ID0gcmV2ZXJ0aWJsZVJhbmRvbSgpCiAgcmV0dXJuIChyYW5kb21OdW1iZXIgJSAobWF4ICsgMSAtIG1pbikpICsgbWluCn0%3D&network=mainnet&args=eyJtaW4iOjUsIm1heCI6MTB9'
};
