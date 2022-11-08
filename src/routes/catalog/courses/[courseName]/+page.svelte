<script>
	import { page } from '$app/stores';
	import { Container, Section } from '@mateoroldos/svelte.bones';

	export let data;
	//esto me trae la metadata de los cuatro cursos

	let getAmountWeeks = () => {
		let objectsArray = data.thisCourse.length;
		let amountOfWeeks = data.thisCourse[objectsArray - 1].week;
		return amountOfWeeks;
	};
</script>

<Section>
	<Container>
		<div class="main-wrapper">
			<h3>{$page.params.courseName}</h3>
			<h4>Course Overview</h4>
		</div>
	</Container>
	<Container>
		<div class="grid-wrapper">
			<div class="secondary-wrapper">semanas {getAmountWeeks({ data })}</div>
		</div>
	</Container>
</Section>

<!-- El fetch y la api va a buscar la info de ese curso, un array con todas las weeks, por cada week un objeto y adentro los dias con su respectivo  -->
<style>
	.main-wrapper {
		display: flex;
		flex-direction: column;
	}

	.secondary-wrapper {
		display: flex;
		flex-direction: row;
		gap: 3rem;
		justify-content: center;
		text-align: center;
	}
	.grid-wrapper {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
</style>
