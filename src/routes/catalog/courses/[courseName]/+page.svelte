<script>
	import CurriculumOverview from '$lib/components/cards/CurriculumOverview.svelte';
	import Faqs from '$lib/components/faqs/Faqs.svelte';
	export let data;
	console.log(data);
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
				<p>{data.overview.level}</p>
				<p>{data.overview.weeks.length}</p>
			</div>
			<div>
				{#each data.overview.tags as tag}
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
			<Faqs questionAnswer={data.overview.faqs} />
		</div>
	</div>
</div>

<style>
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
