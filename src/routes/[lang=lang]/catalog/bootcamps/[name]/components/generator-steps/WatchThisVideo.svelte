<script>
	// import { Button } from "@emerald-dao/component-library";
	// import { onBoardingActiveStep } from "$stores/onBoarding/OnBoardingSteps";
	import StepButton from '../atoms/StepButton.svelte';
</script>

<div class="main-wrapper">
	<div class="title-wrapper">
		<h3>Watch This Video</h3>
	</div>
	<div class="video-wrapper">
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/N5wpD9Ov_To"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</div>

	<StepButton active={true} />
</div>

<style type="scss">
	.main-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;

		.title-wrapper {
			margin-bottom: 3rem;
		}
	}
</style>
