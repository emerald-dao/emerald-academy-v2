<script type="ts">
	export let data: Data;
	interface Data {
		thisCourse: ThisCourse[];
	}

	interface ThisCourse {
		meta: any; // TODO: Tipear a este
		path: string;
		week: number;
	}
	let getAmountWeeks = () => {
		let objectsArray = data.thisCourse.length;
		let amountOfWeeks = data.thisCourse[objectsArray - 1].week;
		return amountOfWeeks;
	};
	console.log(data);
	let weeks = getAmountWeeks();
</script>

<section>
	<div class="container">
		<div class="grid-wrapper">
			<div class="sidebar">
				<p>Course Overview</p>
				{#each Array(weeks) as _, index (index)}
					<div class="column">
						<p>Week: {index + 1}</p>
						{#each data.thisCourse as dayInfo}
							{#if dayInfo.week === index + 1}
								<a class="menu-link" href={dayInfo.path.replace('content', 'catalog')}>
									{dayInfo.meta.title}
								</a>
								<br />
							{/if}
						{/each}
					</div>
				{/each}
			</div>

			<slot />
		</div>
	</div>
</section>

<style type="scss">
	.grid-wrapper {
		display: grid;
		grid-template-columns: 1fr 3fr;
	}

	.column {
		margin-bottom: var(--space-5);
		margin-top: var(--space-3);
	}
	.sidebar {
		border-right: var(--border-width-primary) var(--clr-border-primary) solid;
		height: fit-content;
		margin-right: var(--space-12);
		position: sticky;
		top: 100px;
	}
</style>
