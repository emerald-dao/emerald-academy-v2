<script type="ts">
	import StepButton from '../atoms/StepButton.svelte';
	import { InputWrapper } from '@emerald-dao/component-library';
	import welcomeAboardSuite from '../../validations/welcomeAboardSuite';
	import { redirect } from '@sveltejs/kit';

	const handleChange = (input: Event) => {
		const target = input.target as HTMLInputElement;

		res = welcomeAboardSuite(formData, target.name);
	};

	let formData = {
		email: '',
		name: ''
	};

	let res = welcomeAboardSuite.get();
</script>

<div class="main-wrapper">
	<div>
		<h3>Welcome aboard</h3>
	</div>
	<div class="form-wrapper">
		<form action="">
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
					bind:value={formData.name}
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
					bind:value={formData.email}
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

		.form-wrapper {
			width: 100%;
		}
	}
	h3 {
		margin-bottom: 3rem;
	}
</style>
