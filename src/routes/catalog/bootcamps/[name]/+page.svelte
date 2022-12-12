<script type="ts">
	import BootcampLessons from '$lib/components/cards/BootcampLessons.svelte';
	import CurriculumOverview from '$lib/components/cards/CurriculumOverview.svelte';
	import SpecificContentCard from '$lib/components/cards/SpecificContentCard.svelte';
	import type { BootcampOverview } from '$lib/types/content/bootcamp.interface';

	export let data: Data;

	interface Data {
		overview: BootcampOverview;
	}

	console.log(data);
</script>

<section>
	<div class="container grid-wrapper">
		<div class="content">
			<SpecificContentCard overview={data.overview} />
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

<style type="scss">
	.grid-wrapper {
		display: grid;
		grid-template-columns: 2fr 1fr;
	}
	.content {
		padding-right: var(--space-10);
	}
</style>
