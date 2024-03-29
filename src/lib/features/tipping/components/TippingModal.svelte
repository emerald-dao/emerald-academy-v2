<script lang="ts">
	import { Button, getModal, Modal } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';
	import { tippingActiveStep } from '$lib/features/tipping/stores/TippingSteps';
	import { tippingSteps } from '$lib/features/tipping/stores/TippingSteps';
	import { tippingData } from '../stores/TippingData';
	import Tip from './steps/1-tip/Tip.svelte';
	import { fade } from 'svelte/transition';
	import { ECurrencies } from '$lib/types/common/enums';

	export let authorAddress: string;
	export let authorName: string;
	export let authorAvatar: string | undefined;

	const initPayment = () => {
		tippingActiveStep.reset();
		tippingData.set({
			currency: ECurrencies.FLOW,
			amount: 0,
			specialMessage: '',
			authorAddress,
			authorName,
			authorAvatar: authorAvatar || '/new-avatar.png'
		});

		getModal().open();
	};
</script>

<div data-tooltip="Tip this author" on:click={initPayment} on:keydown>
	<Icon icon="material-symbols:attach-money" color="var(--clr-primary-main)" />
</div>

<Modal background="none" unstyled={true}>
	<div class="round-modal-wrapper">
		<div class="main-wrapper column-space-between">
			<div class="title-wrapper column-1">
				<h4>{$tippingSteps[$tippingActiveStep].name}</h4>
			</div>
		</div>
		<div class="form-wrapper">
			<svelte:component this={$tippingSteps[$tippingActiveStep].component} />
			{#each $tippingSteps as step, i}
				{#if $tippingActiveStep === i}
					{#if step.button}
						<div in:fade={{ duration: 300 }}>
							<Button
								size="large"
								width="extended"
								state={step.state === 'loading' ? 'loading' : 'active'}
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
