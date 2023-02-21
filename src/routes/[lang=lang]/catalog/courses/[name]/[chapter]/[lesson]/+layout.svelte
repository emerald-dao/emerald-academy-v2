<script type="ts">
	import { page } from '$app/stores';
	import { locale } from '$i18n/i18n-svelte';
	import type { CourseData } from '$lib/types/content/course.interface';

	export let data: CourseData;
</script>

<div class="container-large">
	<div class="sidebar">
		<a class="header-link" href={`/${$locale}/catalog/${data.overview.slug}`}>Course Overview</a>
		{#each Object.values(data.contents) as chapterContent, index}
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
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: var(--space-5);
		border-bottom: var(--border-width-primary) var(--clr-border-primary) solid;
		padding-block: var(--space-8);

		@include mq(medium) {
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
		}

		.header-link {
			line-height: 1.4;
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
