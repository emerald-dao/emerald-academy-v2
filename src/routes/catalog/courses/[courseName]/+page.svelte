<script type="ts">
	import type { CourseOverview } from '$lib/types/content/course.interface';
	import CurriculumOverview from '$lib/components/cards/CurriculumOverview.svelte';
	import Faqs from '$lib/components/faqs/Faqs.svelte';
	import SpecificContentCard from '$lib/components/cards/SpecificContentCard.svelte';
	import { Button } from '@emerald-dao/component-library';
	export let data: Data;
	console.log(data);

	interface Data {
		thisCourse: ThisCourse[];
		overview: CourseOverview;
	}

	interface ThisCourse {
		meta: any; // TODO: Tipear a este
		path: string;
		week: number;
	}
</script>

<section>
	<div class="container">
		<div class="row">
			<div class="col1">
				<SpecificContentCard overview={data.overview} />
			</div>
			<div class="col">
				<div>
					<CurriculumOverview overview={data.overview} />
				</div>
			</div>
			<Button href={data.thisCourse[0].path.replace('content', 'catalog')}>Start</Button>
		</div>
		<div>
			<div class="flex">
				{#if data.overview.metadata.faqs}
					<Faqs questionAnswer={data.overview.metadata.faqs} />
				{/if}
			</div>
		</div>
	</div>
</section>

<style type="scss">
	.flex {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 4em;
	}
	.row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
	.col1 {
		grid-column: auto;
		padding-right: var(--space-8);
	}
	.col {
		grid-column: auto;
	}
</style>
