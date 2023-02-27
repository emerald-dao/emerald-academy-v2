<script type="ts">
	import { slide } from 'svelte/transition';

	export let questionAnswer: any;
</script>

<div class="answers" transition:slide>
	<p>{@html questionAnswer.answer}</p>
</div>

<style type="scss">
	.answers {
		padding-left: var(--space-8);
		padding-right: var(--space-5);
		padding-bottom: var(--space-4);
	}
</style>
