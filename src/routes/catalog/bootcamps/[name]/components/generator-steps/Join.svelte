<script>
	// import { Button } from "@emerald-dao/component-library";
	// import { onBoardingActiveStep } from "$stores/onBoarding/OnBoardingSteps";
	import StepButton from '../atoms/StepButton.svelte';
</script>

<div class="main-wrapper">
	<div class="title-wrapper">
		<h3>Join us on Discord</h3>
	</div>
	<div class="logo-wrapper">
		<img src="/discord-icon.png" alt="Discord Logo" />
	</div>

	<StepButton />
</div>

<style type="scss">
	.main-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;

		.title-wrapper {
			margin-bottom: 3em;
		}

		.logo-wrapper {
			margin-bottom: 1em;
		}
	}
</style>
