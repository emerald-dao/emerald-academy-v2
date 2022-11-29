<script type="ts">
	import { logIn } from '$flow/actions';
	import type { Question } from '$lib/types/faqs.interface';
	export let questionAnswer: Question[];
	let number = 0;
	const getIndex = (i: number) => {
		number = i;
		console.log(number);

		return number;
	};
</script>

<div class="card-secondary grid-wrapper">
	<div>
		{#each questionAnswer as data, i}
			<div on:click={() => getIndex(i)} class="clickable-div" class:selected={i === number}>
				{data.question}
				<hr size="1" color="white" />
			</div>
		{/each}
	</div>
	<div>
		<p>{questionAnswer[number].answer}</p>
	</div>
</div>

<style type="scss">
	.grid-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.clickable-div {
		cursor: pointer;
		&:hover {
			color: var(--clr-primary-main);
		}
		padding-right: 1em;
	}
	.selected {
		color: var(--clr-primary-main);
	}
</style>
