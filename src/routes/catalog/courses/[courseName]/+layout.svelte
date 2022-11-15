<script>
	import { Section, Container, Column } from '@mateoroldos/svelte.bones';
	export let data;
	let getAmountWeeks = () => {
		let objectsArray = data.thisCourse.length;
		let amountOfWeeks = data.thisCourse[objectsArray - 1].week;
		return amountOfWeeks;
	};
	let weeks = getAmountWeeks();
</script>

<div class="grid-wrapper">
	<Section>
		<Container>
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
		</Container>
	</Section>
	<slot />
</div>

<style>
	.grid-wrapper {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
</style>
