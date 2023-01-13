<script type="ts">
	export let questionAnswer: Question[];

	interface Question {
		question: string;
		answer: string;
	}

	let number = 0;

	const getIndex = (i: number) => {
		number = i;

		return number;
	};
</script>

<div class="card-primary">
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
		display: grid;
		grid-template-columns: 2fr 5fr;
		gap: var(--space-4);
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
		border: 0.5px solid var(--clr-border-primary);
	}
</style>
