export const resources: Resources[] = [
	{
		image:
			'https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png',
		title: 'Jacob Tucker official Youtube Channel',
		excerpt: 'This is my official yotube channel where you can find all of my best content',
		link: 'example.com'
	},
	{
		image:
			'https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png',
		title: 'Jacob Tucker official Social Media',
		excerpt: 'This is my official Social Media channels where you can find all of my best content',
		link: 'example.com'
	},
	{
		image:
			'https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png',
		title: 'Cadence official documentation',
		excerpt: 'Official documentation',
		link: 'example.com'
	}
];

interface Resources {
	image: string;
	title: string;
	excerpt: string;
	link: string;
}
