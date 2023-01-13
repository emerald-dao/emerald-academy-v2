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

	let number = 0;

	const getIndex = (i: number) => {
		number = i;

		return number;
	};

	let weeks = getAmountWeeks();
</script>

<section>
	<div class="container-large">
		<div class="grid-wrapper">
			<div class="sidebar">
				<p>Course Overview</p>
				{#each Array(weeks) as _, index (index)}
					<div class="column">
						<p class="week">Week: {index + 1}</p>
						{#each data.thisCourse as dayInfo, i}
							{#if dayInfo.week === index + 1}
								<div
									on:click={() => getIndex(i)}
									class:selected={i === number}
									class="each-content"
								>
									<a class="menu-link" href={dayInfo.path.replace('content', 'catalog')}>
										{dayInfo.meta.title}
									</a>
								</div>
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
		grid-template-columns: 1fr 4fr;
		gap: var(--space-14);
	}

	.column {
		margin-bottom: var(--space-8);
		margin-top: var(--space-8);
	}

	.sidebar {
		border-right: var(--border-width-primary) var(--clr-border-primary) solid;
		height: fit-content;
		position: sticky;
		top: 100px;
		padding-block: var(--space-8);
	}
	.menu-link {
		text-decoration: none;
		cursor: pointer;
		&:hover {
			color: var(--clr-primary-300);
		}
		color: var(--clr-text-main);
	}
	.selected {
		color: red;
	}
	.week {
		color: var(--clr-text-off);
	}
	.each-content {
		margin: var(--space-2) 0;
	}
</style>
