<script type="ts">
	import { onBoardingActiveStep } from '$stores/onBoarding/OnBoardingSteps';
	import { Button } from '@emerald-dao/component-library';

	export let active: boolean;
</script>

<div class="step-buttons">
	<!-- <div>
		<Button on:click={onBoardingActiveStep.decrement}>Backwards</Button>
	</div> -->

	<Button
		size="full-width"
		state={active ? 'active' : 'disabled'}
		on:click={onBoardingActiveStep.increment}>Next</Button
	>
</div>

<style type="scss">
	.step-buttons {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 2rem;
		gap: 2rem;
		width: 100%;
	}
</style>
