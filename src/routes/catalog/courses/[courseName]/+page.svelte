<script>
	import { page } from '$app/stores';
	import { Container, Section } from '@mateoroldos/svelte.bones';
	import { courseOverview } from '$lib/content/courses/{courseRendering}/courseOverview';

	export let data;

	let getAmountWeeks = () => {
		let objectsArray = data.thisCourse.length;
		let amountOfWeeks = data.thisCourse[objectsArray - 1].week;
		return amountOfWeeks;
	};
	let weeks = getAmountWeeks();
	let courseRendering = $page.params.courseName;
</script>

<Section>
	<Container>
		<div class="grid-wrapper">
			<div class="main-wrapper">
				<h3>{$page.params.courseName}</h3>
				<h4>Course Overview</h4>
				{#each Array(weeks) as _, index (index)}
					<li>Week: {index + 1}</li>
				{/each}
			</div>
			<div />
		</div>
	</Container>
</Section>

<!-- El fetch y la api va a buscar la info de ese curso, un array con todas las weeks, por cada week un objeto y adentro los dias con su respectivo  -->
<style>
	.main-wrapper {
		display: flex;
		flex-direction: column;
	}

	/* .secondary-wrapper {
		display: flex;
		flex-direction: row;
		gap: 3rem;
		justify-content: center;
		text-align: center;
	} */
	.grid-wrapper {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
</style>
