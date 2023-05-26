<script lang="ts">
	import { Button, getModal, Modal } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';
	import { tippingActiveStep } from '$lib/features/tipping/stores/TippingSteps';
	import { tippingSteps } from '$lib/features/tipping/stores/TippingSteps';
	import { tippingData } from '../stores/TippingData';
	import Tip from './steps/1-tip/Tip.svelte';
	import { fade } from 'svelte/transition';

	/* export let daoData: DAOProject; */
	export let paymentType = 'donate';

	/* const id = `${paymentType}-${daoData.generalInfo.project_id}`; */
	let title = '';

	const PAYMENT_DATA = {
		donate: {
			title: 'Donate',
			icon: 'tabler:heart-handshake',
			action: () => initPayment('donation')
		}
	};

	const initPayment = (paymentType: 'fund' | 'donation') => {
		tippingActiveStep.reset();

		getModal().open();
	};
</script>

<div data-tooltip="Tip this author" on:click={PAYMENT_DATA[paymentType].action} on:keydown>
	<Icon icon="material-symbols:attach-money" color="var(--clr-primary-main)" />
</div>

<Modal background="none" unstyled={true}>
	<div class="round-modal-wrapper">
		<div class="main-wrapper column-space-between">
			<div class="title-wrapper column-1">
				<h4>Donate</h4>
			</div>
		</div>
		<div class="form-wrapper">
			<Tip />
			{#each $tippingSteps as step, i}
				{#if $tippingActiveStep === i}
					{#if step.button}
						<div in:fade={{ duration: 300 }}>
							<Button
								size="large"
								width="extended"
								state="active"
								on:click={tippingActiveStep.increment}
							>
								{step.button.text}
								{#if step.button.icon && step.state !== 'loading'}
									<Icon icon={step.button.icon} />
								{/if}
							</Button>
						</div>
					{/if}
				{/if}
			{/each}
		</div>
	</div>
</Modal>

<style type="scss">
	div {
		cursor: pointer;
	}
	.round-modal-wrapper {
		display: grid;
		grid-template-columns: 1fr;
		width: auto;

		border: 1px solid var(--clr-neutral-badge);
		border-radius: var(--radius-5);
		overflow: hidden;
		background-color: var(--clr-background-secondary);
		padding: var(--space-9);

		.main-wrapper {
			padding-top: var(--space-4);
			width: 100%;

			.title-wrapper {
				border-bottom: 1px var(--clr-neutral-badge) solid;
				padding-bottom: var(--space-3);

				h4 {
					font-size: var(--font-size-3);
				}
			}
		}

		.form-wrapper {
			padding-top: var(--space-6);
		}
	}
</style>
