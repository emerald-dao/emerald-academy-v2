export const resources: Resources[] = [
	{
		image: '/Jacob.jpeg',
		title: "Jacob Tucker's Youtube Channel",
		excerpt: 'The best way to learn Cadence / Flow in video format.',
		link: 'https://www.youtube.com/channel/UCf6DzMRwj7SJ3nPrZqd5hHw'
	},
	{
		image: '/flow-logo.png',
		title: 'Flow Docs',
		excerpt: 'Official link to all documentation related to Flow & Cadence.',
		link: 'https://docs.flow.com'
	},
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
		image: 'https://flowscan.org/images/flowscan-logo-only.svg',
		title: 'Flowscan',
		excerpt: 'Discover network information such as transaction data.',
		link: 'https://flowscan.org/'
	},
	{
		image: '/flow-logo.png',
		title: 'Flow View Source',
		excerpt: 'Browse contract code, account, and key information',
		link: 'https://flow-view-source.com/mainnet/account/'
	},
	{
		image: '/flow-logo.png',
		title: "Flow's YouTube Channel",
		excerpt: 'The (far inferior but) official Flow YouTube channel.',
		link: 'https://www.youtube.com/c/flowblockchain'
	},
	{
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png',
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
