<script type="ts">
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';

	export let data: any;
	export let i: number;
</script>

<div class="details column-2" transition:slide>
	{#each data.contents as content, index}
		<a
			href={`/${content.slug}`}
			class="header-link"
			class:active={content.slug ===
				`${$page.params.lang}/catalog/courses/${$page.params.name}/${$page.params.chapter}/${$page.params.lesson}`}
		>
			{`${i + 1}.${index + 1} ${content.metadata.title}`}
		</a>
	{/each}
</div>

<style type="scss">
	.details {
		padding-bottom: var(--space-2);
	}

	.header-link {
		border-bottom: 1px var(--clr-surface-secondary) solid;
		padding-bottom: var(--space-1);
		font-size: var(--font-size-1);
	}
</style>
