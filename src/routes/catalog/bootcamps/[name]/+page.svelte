<script type="ts">
	import { Button } from '@emerald-dao/component-library';
	import BootcampLessons from '$lib/components/cards/BootcampLessons.svelte';
	import CurriculumOverview from '$lib/components/cards/CurriculumOverview.svelte';
	import SpecificContentCard from '$lib/components/cards/SpecificContentCard.svelte';
	import type { BootcampOverview } from '$lib/types/content/bootcamp.interface';
	import { onBoardingSteps, onBoardingActiveStep } from '$stores/onBoarding/OnBoardingSteps';
	import Modal, { getModal } from '$lib/components/atoms/Modal.svelte';
	import { Breadcrumbs } from '@emerald-dao/component-library';
	import { page } from '$app/stores';
	import { transformUrlToHeading } from '$lib/utilities/dataTransformation/transformUrlToHeading';

	export let data: Data;

	interface Data {
		overview: BootcampOverview;
	}
	console.log($page.params);

	let routes = [
		{
			path: '/catalog',
			label: 'Catalog'
		},
		{
			path: `/catalog/${$page.params.name}`,
			label: transformUrlToHeading($page.params.name)
		}
	];
</script>

<section>
	<div class="container grid-wrapper">
		<div class="content">
			<Breadcrumbs {routes} />
			<SpecificContentCard overview={data.overview} />
			<Button on:click={() => getModal().open()}>Enroll</Button>
		</div>

		<div>
			<CurriculumOverview overview={data.overview} />
		</div>
	</div>
	<section>
		<div class="container">
			<BootcampLessons video={data.overview.videos} />
		</div>
	</section>
</section>
<Modal>
	<div class="modal-content">
		<svelte:component this={$onBoardingSteps[$onBoardingActiveStep].component} />
	</div>
</Modal>

<style type="scss">
	.grid-wrapper {
		display: grid;
		grid-template-columns: 2fr 1fr;
	}
	.content {
		padding-right: var(--space-10);
	}
</style>
