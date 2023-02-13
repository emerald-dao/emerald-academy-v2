<script type="ts">
	import { createBootcampOnboardingStore } from '$stores/BootcampOnboardingStore';
	import StepButton from '../atoms/StepButton.svelte';
	console.log($createBootcampOnboardingStore);
</script>

<div class="main-wrapper">
	<div>
		<h3>More About You</h3>
	</div>
	<div class="secondary-wrapper">
		<div>
			<form action="">
				<p>What is your coding experience level? *</p>
				<div class="form-group">
					<label name="level">
						<input
							name="level"
							type="radio"
							bind:group={$createBootcampOnboardingStore.codingExperience}
							value="never"
						/>
						I've never coded before</label
					>
				</div>

				<div class="form-group">
					<label name="level">
						<input
							name="level"
							type="radio"
							bind:group={$createBootcampOnboardingStore.codingExperience}
							value="years ago"
						/>
						I used to code many years ago, but I don't anymore.
					</label>
				</div>
				<div class="form-group">
					<label name="level">
						<input
							name="level"
							type="radio"
							bind:group={$createBootcampOnboardingStore.codingExperience}
							value="now and then"
						/>
						I code a little bit here and there</label
					>
				</div>

				<div class="form-group">
					<label name="level">
						<input
							name="level"
							type="radio"
							bind:group={$createBootcampOnboardingStore.codingExperience}
							value="all the time"
						/>
						I code all the time</label
					>
				</div>
			</form>
		</div>
		<div>
			<form action="" class="second-form">
				<p>What is your coding experience level? *</p>
				<div class="form-group">
					<label name="level2">
						<input
							name="level2"
							type="radio"
							bind:group={$createBootcampOnboardingStore.codingExperience2}
							value="never"
						/>
						I've never coded before</label
					>
				</div>
				<div class="form-group">
					<label name="level2">
						<input
							name="level2"
							type="radio"
							bind:group={$createBootcampOnboardingStore.codingExperience2}
							value="years ago"
						/>
						I used to code many years ago, but I don't anymore.</label
					>
				</div>
				<div class="form-group">
					<label name="level2">
						<input
							name="level2"
							type="radio"
							bind:group={$createBootcampOnboardingStore.codingExperience2}
							value="now and then"
						/>
						I code a little bit here and there</label
					>
				</div>
				<div class="form-group">
					<label name="level2">
						<input
							name="level2"
							type="radio"
							bind:group={$createBootcampOnboardingStore.codingExperience2}
							value="all the time"
						/>
						I code all the time</label
					>
				</div>
			</form>
		</div>
	</div>
	<StepButton active={true} />
</div>

<style type="scss">
	.secondary-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
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
