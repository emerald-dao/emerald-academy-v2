<script>
	import Card from '$lib/components/atoms/Card.svelte';
	import { Button } from '@emerald-dao/component-library';
	import { onBoardingActiveStep } from '$stores/onBoarding/OnBoardingSteps';
	import StepButton from '../atoms/StepButton.svelte';
	import { Section } from '@mateoroldos/svelte.bones';
	import { Container } from '@mateoroldos/svelte.bones';
</script>

<Section>
	<Container>
		<Card>
			<div class="main-wrapper">
				<div>
					<h3>Welcome aboard</h3>
				</div>
				<div>
					<form action="">
						<label for="txtName">Name</label>
						<input type="text" id="txtName" />
						<label for="txtMail">Mail</label>
						<input type="text" id="txtMail" />
					</form>
				</div>
			</div>
			<div class="main-wrapper">
				<StepButton />
			</div>
		</Card>
	</Container>
</Section>

<style type="scss">
	@use '../../../lib/styles/utils' as *;

	.main-wrapper {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	.secondary-wrapper {
		display: flex;
		flex-direction: row;
		gap: 3rem;
		justify-content: center;
		text-align: center;
	}
	h3 {
		margin-bottom: 3rem;
	}
</style>
