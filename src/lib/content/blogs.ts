import type { BlogOverview } from '$lib/types/content/blog.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const blogs: BlogOverview[] = [
	{
		image: 'https://static.wixstatic.com/media/1e611b_17fb3256b319426caef0325494610c15~mv2.png/v1/fill/w_499,h_375,fp_0.50_0.50,q_95,enc_auto/1e611b_17fb3256b319426caef0325494610c15~mv2.png',
		title: 'Flow Wallets and Account Addresses: Understanding Non-Custodial and Custodial Accounts',
		author: 'RMT Books',
		authorLink: 'https://www.rmtbooks.com/',
		excerpt:
			'The article discusses the difference between wallets and account addresses in the context of digital asset storage and exchange, and explains the concept of custodial and non-custodial accounts, with a focus on the Flow blockchain, including how to create both types of assets, and how collectors and developers use account addresses for different purposes.',
		link: 'https://www.rmtbooks.com/post/custodial-vs-non-custodial-wallets-on-flow',
		contentType: ContentTypeEnum.Blog,
		slug: 'blogs',
		metadata: {
			expertise: ExpertiseEnum.Beginner,
			duration: '5 minutes',
			prerequisites: [],
			subjects: [SubjectsEnum.Cadence]
		}
	}
];
