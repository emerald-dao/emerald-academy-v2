<script type="ts">
	import { slide } from 'svelte/transition';

	export let questionAnswer: any;
</script>

<div class="answers" transition:slide={{ duration: 600 }}>
	<p class="small">{@html questionAnswer.answer}</p>
</div>

<style type="scss">
	.answers {
		padding-left: var(--space-2);
		padding-right: var(--space-2);
		padding-bottom: var(--space-4);
	}
</style>
