import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Dynamically Import a Contract',
  contentType: ContentTypeEnum.Snippet,
  author: {
    name: 'Jacob Tucker',
    socialMediaUrl: 'https://twitter.com/jacobmtucker',
    avatarUrl: '/avatars/jacob.jpeg',
    isVerified: true,
    walletAddress: '0x99bd48c8036e2876'
  },
  excerpt: 'Learn how to import a Cadence contract at run-time in a script or transaction.',
  metadata: {
    subjects: [SubjectsEnum.Cadence]
  },
  codeLink: 'https://run.ecdao.org?code=aW1wb3J0IE5vbkZ1bmdpYmxlVG9rZW4gZnJvbSAweDFkN2U1N2FhNTU4MTc0NDgKCnB1YiBmdW4gbWFpbihjb250cmFjdEFkZHJlc3M6IEFkZHJlc3MsIGNvbnRyYWN0TmFtZTogU3RyaW5nKTogVUludDY0IHsKICBsZXQgY29udHJhY3QgPSBnZXRBY2NvdW50KGNvbnRyYWN0QWRkcmVzcykuY29udHJhY3RzLmJvcnJvdzwmTm9uRnVuZ2libGVUb2tlbj4obmFtZTogY29udHJhY3ROYW1lKQogICAgICAgICAgICAgICAgICAgID8%2FIHBhbmljKCJUaGlzIGNvbnRyYWN0IGRvZXMgbm90IGV4aXN0IGluIHRoaXMgYWNjb3VudC4iKQoKICByZXR1cm4gY29udHJhY3QudG90YWxTdXBwbHkKfQ%3D%3D&network=mainnet&args=eyJjb250cmFjdEFkZHJlc3MiOiIweDJkNGMzY2FmZmJlYWI4NDUiLCJjb250cmFjdE5hbWUiOiJGTE9BVCJ9'
};
