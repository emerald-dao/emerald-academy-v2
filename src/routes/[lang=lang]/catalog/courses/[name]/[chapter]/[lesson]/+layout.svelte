<script type="ts">
	import { page } from '$app/stores';
	import { locale } from '$i18n/i18n-svelte';
	import CourseTitlesHeader from '$lib/components/cards/CourseTitlesHeader.svelte';
	import CourseTitlesOpen from '$lib/components/cards/CourseTitlesOpen.svelte';
	import { Accordion } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';
	import { setContext } from 'svelte';

	export let data;
	let open: boolean;

	const handleClick = () => (open = !open);

	$: $page.params && (open = false);

	setContext('author-context', data.course.overview.author);
</script>

<div class="container-large">
	<div class="sidebar">
		<a class="header-link" href={`/${$locale}/catalog/${data.course.overview.slug}`}
			>Course Overview</a
		>
		{#each Object.values(data.course.contents) as chapterContent, index}
			<div class="column-3">
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
			grid-template-columns: 1fr 4fr;
			gap: var(--space-16);
		}
	}

	.sidebar {
		display: none;

		@include mq(medium) {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			border-right: 0.5px var(--clr-border-primary) solid;
			border-bottom: none;
			padding-right: var(--space-12);
			gap: var(--space-11);
			overflow-y: auto;
			position: sticky;
			top: 0;
			height: 100vh;
			padding-block: var(--space-8);
			// background-color: var(--clr-background-secondary);
		}

		.header-link {
			line-height: 1.4;
			font-size: 0.83rem;
			color: var(--clr-text-off);

			&.active {
				color: var(--clr-heading-main);
			}
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
		color: var(--clr-text-main);
		border-bottom: 1px var(--clr-neutral-badge) solid;
		padding-bottom: var(--space-2);
		font-family: var(--font-heading);
		font-size: 0.9rem;
	}

	::-webkit-scrollbar {
		width: 7px;
	}

	::-webkit-scrollbar-thumb {
		background: var(--clr-neutral-badge);
		border-radius: 3px;
		transition: 1.7s;
		cursor: pointer;
	}
</style>
