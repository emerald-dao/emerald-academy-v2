<script type="ts">
	import { Button } from '@emerald-dao/component-library';
	import BootcampLessons from '$lib/components/cards/BootcampLessons.svelte';
	import SpecificContentCard from '$lib/components/cards/ContentIntro.svelte';
	import type { BootcampOverview } from '$lib/types/content/bootcamp.interface';
	import { onBoardingSteps, onBoardingActiveStep } from '$stores/onBoarding/OnBoardingSteps';
	import { Modal, getModal } from '@emerald-dao/component-library';
	import CourseDetails from '$lib/components/cards/CourseDetails.svelte';

	export let data: Data;

	interface Data {
		overview: BootcampOverview;
	}
</script>

<section class="container-small">
	<SpecificContentCard overview={data.overview}>
		<Button size="large" on:click={() => getModal().open()}>Enroll</Button>
		<Modal>
			<div class="modal-content">
				<svelte:component this={$onBoardingSteps[$onBoardingActiveStep].component} />
			</div>
		</Modal>
	</SpecificContentCard>
</section>
<section class="container-small">
	{#each data.overview.videos as video, i}
		<CourseDetails data={video} {i} typeOfcontent={data.overview.contentType} />
	{/each}
</section>
<section class="container-small">
	<BootcampLessons video={data.overview.videos} />
</section>
