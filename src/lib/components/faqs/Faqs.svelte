<script type="ts">
	export let questionAnswer: Question[];
	interface Question {
		question: string;
		answer: string;
	}

	let number = 0;
	const getIndex = (i: number) => {
		number = i;
		console.log(number);

		return number;
	};
</script>

<div class="card-primary grid-wrapper">
	<div class="questions">
		{#each questionAnswer as data, i}
			<div on:click={() => getIndex(i)} class="clickable-div" class:selected={i === number}>
				<p>{data.question}</p>
			</div>
			<hr />
		{/each}
	</div>
	<div class="answers">
		<p>{questionAnswer[number].answer}</p>
	</div>
</div>

<style type="scss">
	.card-primary {
		background-color: var(--clr-neutral-90);
	}
	.grid-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.clickable-div {
		cursor: pointer;
		&:hover {
			color: var(--clr-heading-main);
		}
		padding-bottom: var(--space-3);
		padding-top: var(--space-3);
		color: var(--clr-text-off);
	}
	.selected {
		color: var(--clr-heading-main);
	}
	.questions,
	.answers {
		margin: var(--space-3);
	}
	hr {
		border: 1px solid var(--clr-neutral-800);
	}
</style>
