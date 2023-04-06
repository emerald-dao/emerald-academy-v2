<script type="ts">
	import { createBootcampOnboardingStore } from '$stores/BootcampOnboardingStore';
	import StepButton from '../atoms/StepButton.svelte';
</script>

<div class="main-wrapper">
	<div>
		<h3>More About You</h3>
	</div>
	<div class="secondary-wrapper">
		<form action="">
			<p>What is your coding experience level? *</p>
			<div class="form-group">
				<label for="never">
					<input
						name="never"
						type="radio"
						bind:group={$createBootcampOnboardingStore.codingExperience}
						value="never"
					/>
					I've never coded before.</label
				>
			</div>

			<div class="form-group">
				<label for="years ago">
					<input
						name="years ago"
						type="radio"
						bind:group={$createBootcampOnboardingStore.codingExperience}
						value="years ago"
					/>
					I used to code many years ago, but I don't anymore.
				</label>
			</div>
			<div class="form-group">
				<label for="now and then">
					<input
						name="now and then"
						type="radio"
						bind:group={$createBootcampOnboardingStore.codingExperience}
						value="now and then"
					/>
					I code a little bit here and there.</label
				>
			</div>

			<div class="form-group">
				<label for="all the time">
					<input
						name="all the time"
						type="radio"
						bind:group={$createBootcampOnboardingStore.codingExperience}
						value="all the time"
					/>
					I code all the time.</label
				>
			</div>
		</form>
		<form action="" class="second-form">
			<p>Which Emerald City product have you used the most? *</p>
			<div class="form-group">
				<label for="FLOAT">
					<input
						name="FLOAT"
						type="radio"
						bind:group={$createBootcampOnboardingStore.product}
						value="FLOAT"
					/>
					FLOAT
				</label>
			</div>
			<div class="form-group">
				<label for="Emerald bot">
					<input
						name="Emerald bot"
						type="radio"
						bind:group={$createBootcampOnboardingStore.product}
						value="Emerald bot"
					/>
					Emerald bot
				</label>
			</div>
			<div class="form-group">
				<label for="Touchstone">
					<input
						name="Touchstone"
						type="radio"
						bind:group={$createBootcampOnboardingStore.product}
						value="Touchstone"
					/>
					Touchstone
				</label>
			</div>
			<div class="form-group">
				<label for="none">
					<input
						name="none"
						type="radio"
						bind:group={$createBootcampOnboardingStore.product}
						value="N/A"
					/>
					None
				</label>
			</div>
		</form>
	</div>
	<StepButton active={$createBootcampOnboardingStore.product !== '' && $createBootcampOnboardingStore.codingExperience !== ''} />
</div>

<style type="scss">
	.secondary-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;

		form {
			@media all and (max-width: 700px) {
				margin: 0px;
				margin-bottom: 20px;
			}
		}

		@media all and (max-width: 700px) {
			display: flex;
			flex-direction: column;
		}
	}
	h3 {
		text-align: center;
		margin-bottom: 3rem;
	}
	.form-group {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		margin-top: var(--space-3);
	}

	.second-form {
		margin-left: var(--space-3);
	}

	input {
		width: fit-content;
	}

	input[type='radio'] {
		box-sizing: border-box;
		appearance: none;
		background: none;
		border: 0.5px solid var(--clr-neutral-600);
		-webkit-appearance: none;
	}

	input[type='radio']:checked {
		background: white;
	}
</style>
