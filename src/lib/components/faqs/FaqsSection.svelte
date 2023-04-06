<script lang="ts">
	import type { Faq } from '$lib/types/content/content-overview.interface';
	import { Accordion } from '@emerald-dao/component-library';
	import Answers from './Answers.svelte';
	import Questions from './Questions.svelte';

	export let faqs: Faq[];

	let open: boolean;
</script>

<section class="container-small">
	<h3 class="h4">Frequently asked questions</h3>
	{#each faqs as faq, i}
		<Accordion {open}>
			<Questions slot="header" question={faq.question} {open} />
			<Answers slot="open" answer={faq.answer} />
		</Accordion>
	{/each}
</section>

<style lang="scss">
	h3 {
		margin-bottom: var(--space-11);
		text-align: center;
	}
</style>
