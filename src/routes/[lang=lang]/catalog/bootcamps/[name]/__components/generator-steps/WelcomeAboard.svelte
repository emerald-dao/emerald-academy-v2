<script type="ts">
	import StepButton from '../atoms/StepButton.svelte';
	import { InputWrapper } from '@emerald-dao/component-library';
	import welcomeAboardSuite from '../../__validations/welcomeAboardSuite';
	import { createBootcampOnboardingStore } from '$stores/BootcampOnboardingStore';

	const handleChange = (input: Event) => {
		const target = input.target as HTMLInputElement;

		res = welcomeAboardSuite($createBootcampOnboardingStore, target.name);
	};

	let res = welcomeAboardSuite.get();
</script>

<div class="main-wrapper">
	<div>
		<h3>Welcome aboard</h3>
	</div>
	<div class="form-wrapper">
		<form action="" autocomplete="off">
			<InputWrapper
				name="name"
				label="Name"
				errors={res.getErrors('name')}
				isValid={res.isValid('name')}
			>
				<input
					name="name"
					type="text"
					placeholder="John"
					bind:value={$createBootcampOnboardingStore.name}
					on:input={handleChange}
				/>
			</InputWrapper>
			<InputWrapper
				name="email"
				label="Email"
				errors={res.getErrors('email')}
				isValid={res.isValid('email')}
			>
				<input
					name="email"
					type="email"
					placeholder="example@example.com"
					bind:value={$createBootcampOnboardingStore.email}
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

		.form-wrapper {
			width: 100%;
		}
	}
	h3 {
		margin-bottom: 3rem;
	}
</style>
