export const resources: Resources[] = [
	{
		image:
			'https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png',
		title: "Jacob Tucker's Youtube Channel",
		excerpt: 'The best way to learn Cadence / Flow in video format.',
		link: 'https://www.youtube.com/channel/UCf6DzMRwj7SJ3nPrZqd5hHw'
	},
	{
		image:
			'https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png',
		title: 'Flow Docs',
		excerpt: 'Official link to all documentation related to Flow & Cadence.',
		link: 'https://docs.flow.com'
	},
	{
		image:
			'https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png',
		title: 'Flow Playground',
		excerpt: 'Mess around with Cadence code in a browser emulator.',
		link: 'https://play.onflow.org'
	},
	{
		image:
			'https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png',
		title: 'Flow CLI',
		excerpt: 'Install the Flow CLI.',
		link: 'https://developers.flow.com/tools/flow-cli'
	},
	{
		image:
			'https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png',
		title: 'Flowscan',
		excerpt: 'Discover network information such as transaction data.',
		link: 'https://flowscan.org/'
	},
	{
		image:
			'https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png',
		title: 'Flow View Source',
		excerpt: 'Browse contract code, account, and key information',
		link: 'https://flow-view-source.com/mainnet/account/'
	},
	{
		image:
			'https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png',
		title: "Flow's YouTube Channel",
		excerpt: 'The (far inferior but) official Flow YouTube channel.',
		link: 'https://www.youtube.com/c/flowblockchain'
	},
	{
		image:
			'https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png',
		title: 'Cadence VS Code Extension',
		excerpt: 'Receive syntax highlighting and live compile erorrs.',
		link: 'https://developers.flow.com/tools/vscode-extension'
	}
];
//cambiar imageUrl

interface Resources {
	image: string;
	title: string;
	excerpt: string;
	link: string;
}
