<script>
	import { page } from '$app/stores';
	import { Column, Container, Section } from '@mateoroldos/svelte.bones';

	export let data;
	console.log(data);

	let getAmountWeeks = () => {
		let objectsArray = data.thisCourse.length;
		let amountOfWeeks = data.thisCourse[objectsArray - 1].week;
		return amountOfWeeks;
	};
	let weeks = getAmountWeeks();

	let courseRendering = $page.params.courseName;
</script>

<div class="grid-wrapper">
	<Column align="flex-start" gap="small">
		<h4>Course Overview</h4>
		{#each Array(weeks) as _, index (index)}
			<li>Week: {index + 1}</li>
			<Column gap="small" align="flex-start">
				{#each data.thisCourse as dayInfo}
					{#if dayInfo.week === index + 1}
						<a href={dayInfo.path.replace('content', 'catalog')}>
							{dayInfo.meta.title}
						</a>
					{/if}
				{/each}
			</Column>
		{/each}
	</Column>

	<div>
		<h1>
			{data.overview.title}
		</h1>
		<p>
			{data.overview.excerpt}
		</p>
	</div>
</div>

<!-- El fetch y la api va a buscar la info de ese curso, un array con todas las weeks, por cada week un objeto y adentro los dias con su respectivo  -->
<style>
	.grid-wrapper {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
</style>
