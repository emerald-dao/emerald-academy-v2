<script type="ts">
	import LL from '$i18n/i18n-svelte';
	import EmptyQuickstartCard from '$lib/components/cards/EmptyQuickstartCard.svelte';
	import QuickstartCard from '$lib/components/cards/QuickstartCard.svelte';
	import {
		ITERABLE_TECHSTACKS,
		QUICKSTART_TECHSTACKS
	} from '$lib/types/content/quickstart.interface';
	import { Seo } from '@emerald-dao/component-library';

	const QUICKSTARTS_DESCRIPTIONS = [
		{
			name: 'Hello World',
			description: 'A DApp that lets users read and change a greeting field on Flow testnet.'
		},
		{
			name: 'Non Fungible Token',
			description:
				'A DApp that lets users create an empty collection, mint some pre-loaded NFTs, and transfer them to another account on Flow testnet.'
		},
		{
			name: 'Fungible Token',
			description:
				'A DApp that lets users create their own fungible token and transfer them to another account on Flow testnet.'
		},
		{
			name: 'NFT Minting',
			description:
				'A DApp that lets an admin create an NFT Collection and display available NFTs for purchase on a minting site. Users will be able to see their purchased NFTs as well.'
		},
		{
			name: 'Voting',
			description:
				'A DApp that spins up an open DAO that lets community members create proposals and vote within it based on token holdings that govern the DAO.'
		},
		{
			name: 'Multisign',
			description:
				'A DApp that allows anyone to deposit $FLOW to a DAO Treasury, of which admins must multisign actions to withdraw that $FLOW from the Treasury.'
		},
		{
			name: 'Groups',
			description:
				'A DApp that allows users to create Groups, join & leave them, discover Groups, and chat inside of them.'
		}
	];

	export let data;
	console.log(data);
</script>

<section class="section-large container column-17 column align-center">
	<div class="heading-wrapper column-3 align-center">
		<h1 class="w-medium">Quickstarts</h1>
		<p class="large">
			Start your adventure on the Flow Blockchain and Cadence by hacking real dapps.
		</p>
	</div>
	<div class="column-15">
		{#if data.quickstarts.length > 0}
			{#each QUICKSTARTS_DESCRIPTIONS as quickstartDescription, i}
				<div class="column-7">
					<div class="column-2 quickstart-intro">
						<h4>{`${i}. ${quickstartDescription.name}`}</h4>
						<p>{quickstartDescription.description}</p>
					</div>
					<div class="quickstarts-cards-wrapper">
						{#each ITERABLE_TECHSTACKS as techstack}
							{@const quickstart = data.quickstarts.find(
								(quickstr) => quickstr.id === i && quickstr.techstack.includes(techstack)
							)}
							{#if quickstart}
								<QuickstartCard quickstartData={quickstart} />
							{:else}
								<EmptyQuickstartCard title={quickstartDescription.name} techstack={[techstack]} />
							{/if}
						{/each}
					</div>
				</div>
			{/each}
		{:else}
			<p><em>{$LL.NO_QUICKSTARTS_FOUND()}</em></p>
		{/if}
	</div>
</section>

<Seo
	title="Quickstarts | Emerald Academy"
	description="Some codes for quick implementation"
	type="WebPage"
	image="https://academy.ecdao.org/favicon.png"
/>

<style lang="scss">
	.heading-wrapper {
		max-width: 70ch;
		text-align: center;

		p {
			font-size: var(--font-size-5);
		}
	}

	.quickstarts-cards-wrapper {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);

		@include mq(medium) {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: var(--space-8);
		}
	}

	.quickstart-intro {
		p {
			max-width: 60ch;
		}
	}
</style>
