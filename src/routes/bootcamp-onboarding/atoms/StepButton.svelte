<script>
	import { onBoardingActiveStep } from '$stores/onBoarding/OnBoardingSteps';
	import { Button } from '@emerald-dao/component-library';
</script>

<div class="step-buttons">
	<div>
		<Button on:click={onBoardingActiveStep.decrement}>Backwards</Button>
	</div>
	<div>
		<Button on:click={onBoardingActiveStep.increment}>Forward</Button>
	</div>
</div>

<style type="scss">
	.step-buttons {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 2rem;
		gap: 2rem;
	}
</style>
