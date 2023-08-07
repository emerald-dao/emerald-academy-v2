import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Time in Cadence',
  contentType: ContentTypeEnum.Snippet,
  author: {
    name: 'Jacob Tucker',
    socialMediaUrl: 'https://twitter.com/jacobmtucker',
    avatarUrl: 'https://avatars.githubusercontent.com/u/15198786?v=4',
    isVerified: true,
    walletAddress: '0x99bd48c8036e2876'
  },
  excerpt: 'Learn how to get and calculate time in Cadence.',
  metadata: {
    subjects: [SubjectsEnum.Cadence]
  },
  codeLink: 'https://run.ecdao.org?code=cHViIGZ1biBtYWluKCk6IFVGaXg2NCB7CiAgLy8gaW4gc2Vjb25kcwogIGxldCBjdXJyZW50VGltZTogVUZpeDY0ID0gZ2V0Q3VycmVudEJsb2NrKCkudGltZXN0YW1wCgogIC8vIDEgbWludXRlIGZyb20gbm93CiAgbGV0IG9uZU1pbnV0ZUZyb21Ob3c6IFVGaXg2NCA9IGN1cnJlbnRUaW1lICsgNjAuMAoKICAvLyAxIGhvdXIgZnJvbSBub3cKICBsZXQgb25lSG91ckZyb21Ob3c6IFVGaXg2NCA9IGN1cnJlbnRUaW1lICsgKDYwLjAgKiA2MC4wKQoKICAvLyAxIGRheSBmcm9tIG5vdwogIGxldCBvbmVEYXlGcm9tTm93OiBVRml4NjQgPSBjdXJyZW50VGltZSArICg2MC4wICogNjAuMCAqIDI0LjApCgogIC8vIGFuZCBzbyBvbi4uLgoKICByZXR1cm4gY3VycmVudFRpbWUKfQo%3D&network=mainnet&args=e30%3D'
};
