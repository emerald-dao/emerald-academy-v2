<script type="ts">
	import type { CourseOverview } from '$lib/types/content/course.interface';
	import CurriculumOverview from '$lib/components/cards/CurriculumOverview.svelte';
	import Faqs from '$lib/components/faqs/Faqs.svelte';
	import { overview } from '$lib/content/bootcamps/basic-dapp/overview';

	export let data: Data;

	interface Data {
		thisCourse: ThisCourse[];
		overview: CourseOverview;
	}

	interface ThisCourse {
		meta: any; // TODO: Tipear a este
		path: string;
		week: number;
	}

	console.log(data.thisCourse[0].meta);
</script>

<div>
	<div class="row">
		<div class="col">
			<h2>
				{data.overview.title}
			</h2>
			<p>
				{data.overview.excerpt}
			</p>
			<div class="main-wrapper">
				<p>{data.overview.metadata.expertise}</p>
				<p>{data.overview.metadata.duration}</p>
			</div>
			<div>
				{#each data.overview.metadata.subjects as tag}
					<div>
						<p>{tag}</p>
					</div>
				{/each}
			</div>
		</div>
		<div class="col">
			<div>
				<CurriculumOverview overview={data.overview} />
			</div>
		</div>
	</div>
	<div>
		<div class="flex">
			{#if data.overview.metadata.faqs}
				<Faqs questionAnswer={data.overview.metadata.faqs} />
			{/if}
		</div>
	</div>
</div>

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
	.col {
		grid-column: auto;
	}
</style>
