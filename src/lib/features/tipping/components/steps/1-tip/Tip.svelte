<script type="ts">
	import { Currency, CurrencyInput } from '@emerald-dao/component-library';
	import validationSuite from './validation';
	import { fade } from 'svelte/transition';
	import { ECurrencies } from '$lib/types/common/enums';
	import { tippingActiveStep } from '$lib/features/tipping/stores/TippingSteps';
	import CurrencySelect from '$lib/components/atoms/CurrencySelect.svelte';
	import { tippingData } from '$lib/features/tipping/stores/TippingData';
	import SpecialMessage from '../../atoms/SpecialMessage.svelte';

	export let isValid = false;

	const handleChange = (input: Event) => {
		const target = input.target as HTMLInputElement;

		res = validationSuite($tippingData, target.name);

		isValid = res.isValid();
	};

	let res = validationSuite.get();
</script>

<form
	id="fund-form"
	on:submit|preventDefault={tippingActiveStep.increment}
	autocomplete="off"
	in:fade={{ duration: 200 }}
>
	<!-- {#if $tippingData.type === 'donation'} -->
	<div class="currency-select-wrapper">
		<CurrencySelect
			currencies={[ECurrencies.FLOW, ECurrencies.USDC]}
			bind:value={$tippingData.currency}
		/>
	</div>
	<!-- {/if} -->
	<div>
		<CurrencyInput
			autofocus
			currency={$tippingData.currency}
			errors={res.getErrors('amount')}
			isValid={res.isValid('amount')}
			fontSize="var(--font-size-7)"
			hasBorder={false}
			on:input={(input) => handleChange(input.detail)}
			bind:value={$tippingData.amount}
		/>
	</div>
	<SpecialMessage />
</form>

<style type="scss">
	form {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-bottom: var(--space-9);

		.currency-select-wrapper {
			margin-bottom: var(--space-4);
		}
	}
</style>
