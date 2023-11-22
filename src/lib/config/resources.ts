export const youtube: Resources[] = [
	{
		image: '/Jacob.jpeg',
		title: "Jacob Tucker's Youtube Channel",
		excerpt: 'The best way to learn Cadence / Flow in video format.',
		link: 'https://www.youtube.com/channel/UCf6DzMRwj7SJ3nPrZqd5hHw'
	},
	{
		image: '/flow-logo.png',
		title: "Flow's YouTube Channel",
		excerpt: 'The (far inferior but) official Flow YouTube channel.',
		link: 'https://www.youtube.com/c/flowblockchain'
	}
]

export const blogs: Resources[] = [
	{
		image: '/amethyst.jpeg',
		title: "Amethyst's Blog",
		excerpt: 'Very organized & clear threads on Flow.',
		link: 'https://amethystcodes.hashnode.dev/'
	},
]

export const developerResources: Resources[] = [
	{
		image: 'https://play.flow.com/flow_logo.jpg',
		title: 'Flow Playground',
		excerpt: 'Mess around with Cadence code in a browser emulator.',
		link: 'https://play.onflow.org'
	},
	{
		image: 'https://agaric.coop/sites/default/files/2019-04/Terminalicon2.png',
		title: 'Flow CLI',
		excerpt: 'Install the Flow CLI.',
		link: 'https://developers.flow.com/tools/flow-cli'
	},
	{
		image: '/flow-logo.png',
		title: 'Flow Docs',
		excerpt: 'Official link to all documentation related to Flow & Cadence.',
		link: 'https://docs.flow.com'
	},
	{
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png',
		title: 'Cadence VS Code Extension',
		excerpt: 'Receive syntax highlighting and live compile erorrs.',
		link: 'https://developers.flow.com/tools/vscode-extension'
	}
]

export const networkDiscovery: Resources[] = [
	{
		image: 'https://flowscan.org/images/flowscan-logo-only.svg',
		title: 'Flowdiver',
		excerpt: 'Block explorer.',
		link: 'https://flowdiver.io'
	},
	{
		image: '/flow-logo.png',
		title: 'Flow View Source',
		excerpt: 'Browse contract code, account, and key information.',
		link: 'https://f.dnz.dev'
	},
	{
		image: 'https://contractbrowser.com/logo.png',
		title: 'Contract Browser',
		excerpt: 'Discover contracts.',
		link: 'https://contractbrowser.com/'
	},
	{
		image: 'https://www.flowview.app/_next/image?url=%2Flogo.png&w=384&q=75',
		title: 'Flowview',
		excerpt: 'Explore Flow account information.',
		link: 'https://contractbrowser.com/'
	}
];

interface Resources {
	image: string;
	title: string;
	excerpt: string;
	link: string;
}
