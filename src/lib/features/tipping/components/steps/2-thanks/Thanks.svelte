<script type="ts">
	import Icon from '@iconify/svelte';
	import { Button, Currency, Divider } from '@emerald-dao/component-library';
	import { fade } from 'svelte/transition';
	import { tippingData } from '../../../stores/TippingData';
	import StepTitle from './StepTitle.svelte';
</script>

<div in:fade={{ duration: 200 }} class="main-wrapper">
	<div class="column align-center">
		<StepTitle title="Thanks!" authorAvatar={$tippingData.authorAvatar} />
		<p>
			{`You donated`}
			<span class="strong">
				{`${$tippingData.amount} $${$tippingData.currency}`}
			</span>
			to
			<span class="strong">
				{`${$tippingData.authorName}.`}
			</span>
		</p>
	</div>
	<div class="column-4">
		<Divider text="Share" />
		<div class="share-buttons-wrapper">
			<Button
				href={`https://twitter.com/intent/tweet?text=Just%20tipped%20${$tippingData.amount}%20$${$tippingData.currency}%20to%20${$tippingData.authorName}%20on%20Emerald%20Academy!`}
				target="_blank"
				type="ghost"
				color="neutral"
				size="small"><Icon icon="tabler:brand-twitter" />Twitter</Button
			>
		</div>
	</div>
</div>

<style type="scss">
	.main-wrapper {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.share-buttons-wrapper {
			display: flex;
			justify-content: center;
			gap: var(--space-4);
		}

		p {
			text-align: center;
			max-width: 30ch;
			font-size: var(--fs-300);
			margin-block: var(--space-5);

			span.strong {
				color: var(--clr-heading-main);
			}
		}
	}
</style>
