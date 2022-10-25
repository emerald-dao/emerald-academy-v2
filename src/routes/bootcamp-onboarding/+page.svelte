<!-- Page that dynamically renders each step -->
<script>
	import { onBoardingSteps, onBoardingActiveStep } from '$stores/onBoarding/OnBoardingSteps';
	// import MoreAboutYou from './generator-steps/MoreAboutYou.svelte';
	import Modal, { getModal } from '$lib/components/atoms/Modal.svelte';
	import { Button } from '@emerald-dao/component-library';
	import { Section, Container } from '@mateoroldos/svelte.bones';
</script>

<Section>
	<Container>
		<Button on:click={() => getModal().open()}>Open Modal</Button>
	</Container>
</Section>
<Modal>
	<div class="modal-content">
		<svelte:component this={$onBoardingSteps[$onBoardingActiveStep].component} />
	</div>
</Modal>

<!-- <MoreAboutYou/> -->
