<script type="ts">
	import { slide } from 'svelte/transition';

	export let answer: string;
</script>

<div class="answers" transition:slide={{ duration: 600 }}>
	<p class="small">{@html answer}</p>
</div>

<style type="scss">
	.answers {
		padding-inline: var(--space-6);
		padding-bottom: var(--space-4);
	}
</style>
