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
				{data.question}
			</div>
			<hr size="1" color="white" />
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
			color: var(--clr-primary-main);
		}
		padding-bottom: var(--space-3);
		padding-top: var(--space-3);
	}
	.selected {
		color: var(--clr-primary-main);
	}
	.questions,
	.answers {
		margin: var(--space-3);
	}
</style>
