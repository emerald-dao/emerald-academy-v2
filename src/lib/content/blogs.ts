import type { BlogOverview } from '$lib/types/content/blog.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const blogs: BlogOverview[] = [
	{
		image: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1666188602240/0RuRrh87k.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
		title: 'Flow Playground: Getting Started',
		author: {
			name: 'Amethyst',
			socialMediaUrl: 'https://twitter.com/AmethystCodes',
			avatarUrl: 'https://pbs.twimg.com/profile_images/1533718381425197062/qVzq1q2z_400x400.jpg',
			isVerified: true,
			walletAddress: '0x1ab55f0b6fda6ba9'
		},
		excerpt: 'Covers the basics of the Flow Playground, how to deploy a contract and how to interact with deployed contracts using transactions and scripts.',
		link: 'https://amethystcodes.hashnode.dev/flow-playground-getting-started',
		contentType: ContentTypeEnum.Blog,
		metadata: {
			expertise: ExpertiseEnum.Beginner,
			duration: '5 minutes',
			prerequisites: [],
			subjects: [SubjectsEnum.Cadence]
		}
	},
	{
		image: 'https://static.wixstatic.com/media/1e611b_17fb3256b319426caef0325494610c15~mv2.png/v1/fill/w_499,h_375,fp_0.50_0.50,q_95,enc_auto/1e611b_17fb3256b319426caef0325494610c15~mv2.png',
		title: 'Flow Wallets and Account Addresses: Understanding Non-Custodial and Custodial Accounts',
		author: {
			name: 'RMT Books',
			socialMediaUrl: 'https://twitter.com/books_rmt',
			avatarUrl: 'https://pbs.twimg.com/profile_images/1631577606825861121/D7NOiQWx_400x400.jpg',
			isVerified: true,
			walletAddress: '0xc67642a8dd697e51'
		},
		excerpt: 'The article discusses the difference between wallets and account addresses in the context of digital asset storage and exchange, and explains the concept of custodial and non-custodial accounts, with a focus on the Flow blockchain, including how to create both types of assets, and how collectors and developers use account addresses for different purposes.',
		link: 'https://www.rmtbooks.com/post/custodial-vs-non-custodial-wallets-on-flow',
		contentType: ContentTypeEnum.Blog,
		metadata: {
			expertise: ExpertiseEnum.Beginner,
			duration: '5 minutes',
			prerequisites: [],
			subjects: []
		}
	},
	{
		image: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1689341854607/6284b68f-3fe1-4ac0-811d-e916967e1512.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
		title: 'Demystifying the Flow.json File: A Comprehensive Guide',
		author: {
			name: 'Devsuite',
			socialMediaUrl: 'https://twitter.com/Dev_suite',
			avatarUrl: 'https://pbs.twimg.com/profile_images/1652017863954186243/QC486Y6B_400x400.jpg',
			isVerified: true,
			walletAddress: '0x751f799b8e4cb967'
		},
		excerpt: 'The article is all about flow.json file which is a crucial component in Flow blockchain development. It provides the necessary configuration and structure for your project, allowing you to define accounts, contracts, and deployment settings.',
		link: 'https://devsuite.hashnode.dev/demystifying-the-flowjson-file-a-comprehensive-guide',
		contentType: ContentTypeEnum.Blog,
		metadata: {
			expertise: ExpertiseEnum.Beginner,
			duration: '5 minutes',
			prerequisites: [],
			subjects: []
		}
	}
];
