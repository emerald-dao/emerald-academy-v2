<script type="ts">
	import { transformHeadingToUrl } from '$lib/utilities/dataTransformation/transformHeadingToUrl';
	import { getContext, onMount, tick } from 'svelte';
	import { Button, ProgressSteps } from '@emerald-dao/component-library';
	import type { ProgressStates } from '@emerald-dao/component-library/components/ProgressStep/progress-states.type';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	export let headings: Heading[];

	interface Heading {
		level: number;
		title: string;
	}

	let elements: HTMLElement[] = [];

	function grabElements() {
		if (headings.length > 0) {
			headings.forEach((headingElement) => {
				const el = document.getElementById(`${transformHeadingToUrl(headingElement.title)}`);
				if (el) {
					elements = [...elements, el];
				}
			});
		}
	}

	let active = 0;

	async function trackScroll() {
		await tick();

		elements.forEach(async (element, i) => {
			const { top, width } = element.getBoundingClientRect();
			if (width === 0) grabElements(); // fixes weird bug where rects are all 0
			if (top < 200) {
				steps.forEach((step, index) => {
					if (i > index) {
						step.state = 'success';
					} else if (i === index) {
						step.state = 'active';
					} else {
						step.state = 'inactive';
					}
					steps = steps;
				});
			}
		});
	}

	let steps: Step[] = [];

	interface Step {
		name: string;
		state: ProgressStates;
	}

	function tranformHeadingsToSteps() {
		headings.forEach((heading) => {
			if (heading.level > 1) {
				steps.push({
					name: heading.title,
					state: 'inactive',
					url: `#${transformHeadingToUrl(heading.title)}`
				});
				steps = steps;
			}
		});
	}

	const author = getContext('author-context');

	onMount(() => {
		grabElements();
		trackScroll();
		tranformHeadingsToSteps();
	});
</script>

<svelte:window on:scroll={trackScroll} />

<div class="column-5">
	<ProgressSteps
		{steps}
		diameter={0.5}
		direction="column-reverse"
		fontSize="xsmall"
		gap={0.4}
		cutLineEnds={false}
		lineHeight="1"
	/>
	{#if author}
		<a
			href={author.authorLink}
			target="_blank"
			rel="noopener noreferrer"
			class="header-link row-2 align-center"
		>
			<Icon icon="tabler:pencil" />
			{author.authorName}
		</a>
	{/if}
	<a
		href={`https://github.com/emerald-dao/emerald-academy-v2/tree/main/src/lib/content/courses/${$page.params.name}/${$page.params.lang}/${$page.params.chapter}/${$page.params.lesson}.md`}
		target="_blank"
		rel="noopener noreferrer"
		class="header-link row-2 align-center"
	>
		<Icon icon="tabler:brand-github" />
		Edit content
	</a>
</div>

<style lang="scss">
	span {
		font-size: var(--font-size-0);
		margin-left: var(--space-1);
	}

	a {
		margin-left: var(--space-1);
	}
</style>
