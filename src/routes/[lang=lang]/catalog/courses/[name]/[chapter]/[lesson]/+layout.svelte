<script type="ts">
	import { page } from '$app/stores';
	import { locale } from '$i18n/i18n-svelte';
	import CourseTitlesHeader from '$lib/components/cards/CourseTitlesHeader.svelte';
	import CourseTitlesOpen from '$lib/components/cards/CourseTitlesOpen.svelte';
	import { Accordion } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';

	export let data;

	let open: boolean;

	const handleClick = () => (open = !open);

	$: $page.params && (open = false);
</script>

<div class="container-large">
	<div class="sidebar">
		<a class="header-link" href={`/${$locale}/catalog/${data.course.overview.slug}`}
			>Course Overview</a
		>
		{#each Object.values(data.course.contents) as chapterContent, index}
			<div class="column-4">
				<p class="chapter small">{`${index + 1}. ${chapterContent.overview.title}`}</p>
				{#each chapterContent.contents as lesson, i}
					<a
						href={`/${lesson.slug}`}
						class="header-link"
						class:active={lesson.slug ===
							`${$page.params.lang}/catalog/courses/${$page.params.name}/${$page.params.chapter}/${$page.params.lesson}`}
					>
						{`${index + 1}.${i + 1} ${lesson.metadata.title}`}
					</a>
				{/each}
			</div>
		{/each}
	</div>
	<div class="accordion">
		<div on:click={handleClick} on:keydown>
			<span>Course Overview</span>
			<Icon icon="tabler:chevron-down" />
		</div>
		{#if open}
			{#each Object.values(data.course.contents) as chapterContent, i}
				<Accordion>
					<div slot="header">
						<CourseTitlesHeader data={chapterContent} {i} />
					</div>
					<div slot="open">
						<CourseTitlesOpen data={chapterContent} {i} />
					</div>
				</Accordion>
			{/each}
		{/if}
	</div>
	<slot />
</div>

<style type="scss">
	.container-large {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
		padding-block: 0;

		@include mq(medium) {
			display: grid;
			grid-template-columns: 2fr 7fr;
			gap: var(--space-14);
		}
	}

	.sidebar {
		display: none;

		@include mq(medium) {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			border-right: var(--border-width-primary) var(--clr-border-primary) solid;
			border-bottom: none;
			padding-right: var(--space-5);
			gap: var(--space-10);
			overflow-y: auto;
			position: sticky;
			top: 0;
			height: 100vh;
			padding-block: var(--space-8);
		}

		.header-link {
			line-height: 1.4;
		}
	}

	.accordion {
		border-bottom: var(--border-width-primary) var(--clr-border-primary) solid;
		padding-block: var(--space-8);
		@include mq(medium) {
			display: none;
		}
	}

	.chapter {
		color: var(--clr-text-off);
		border-bottom: 1px var(--clr-surface-secondary) solid;
		padding-bottom: var(--space-1);
		font-family: var(--font-heading);
		font-size: var(--font-size-2);
	}
</style>
