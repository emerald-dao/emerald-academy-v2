<script type="ts">
	import { createBootcampOnboardingStore } from '$stores/BootcampOnboardingStore';
	import { InputWrapper } from '@emerald-dao/component-library';
	import mediaDataSuite from '../../__validations/mediaDataSuite';
	import StepButton from '../atoms/StepButton.svelte';

	const handleChange = (input: Event) => {
		const target = input.target as HTMLInputElement;

		res = mediaDataSuite($createBootcampOnboardingStore, target.name);
	};

	let res = mediaDataSuite.get();
</script>

<div class="main-wrapper">
	<div>
		<h3>Almost there...</h3>
	</div>
	<div class="form-wrapper">
		<form action="" autocomplete="off">
			<InputWrapper
				name="discord-handle"
				label="What's your Discord handle?"
				errors={res.getErrors('discord-handle')}
				isValid={res.isValid('discord-handle')}
			>
				<input
					name="discord-handle"
					type="text"
					placeholder="tsnakjake#233"
					bind:value={$createBootcampOnboardingStore.discordHandle}
					on:input={handleChange}
				/>
			</InputWrapper>

			<InputWrapper
				name="wallet-address"
				label="What's your wallet address?"
				errors={res.getErrors('wallet-address')}
				isValid={res.isValid('wallet-address')}
			>
				<input
					name="wallet-address"
					type="text"
					placeholder="0x99bd48c8035kdjeu504"
					bind:value={$createBootcampOnboardingStore.walletAddress}
					on:input={handleChange}
				/>
			</InputWrapper>
		</form>
	</div>
	<StepButton active={res.isValid()} />
</div>

<style type="scss">
	.main-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	h3 {
		margin-bottom: 3rem;
	}
</style>
