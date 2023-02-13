<script type="ts">
	import { InputWrapper } from '@emerald-dao/component-library';
	import mediaDataSuite from '../../__validations/mediaDataSuite';
	import StepButton from '../atoms/StepButton.svelte';

	let formData = {
		discordHandle: '',
		bloctoAddress: ''
	};

	const handleChange = (input: Event) => {
		const target = input.target as HTMLInputElement;

		res = mediaDataSuite(formData, target.name);
	};

	let res = mediaDataSuite.get();
</script>

<div class="main-wrapper">
	<div>
		<h3>One more thing to do</h3>
	</div>
	<div class="form-wrapper">
		<form action="">
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
					bind:value={formData.discordHandle}
					on:input={handleChange}
				/>
			</InputWrapper>

			<InputWrapper
				name="blocto-address"
				label="What's your Blocto address"
				errors={res.getErrors('blocto-address')}
				isValid={res.isValid('blocto-address')}
			>
				<input
					name="blocto-address"
					type="text"
					placeholder="0x99bd48c8035kdjeu504"
					bind:value={formData.bloctoAddress}
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
		text-align: center;
	}
	h3 {
		margin-bottom: 3rem;
	}
</style>
