<script type="ts">
	import { transformHeadingToUrl } from '$lib/utilities/dataTransformation/transformHeadingToUrl';
	import { onMount, tick } from 'svelte';
	import { Button, ProgressSteps } from '@emerald-dao/component-library';
	import type { ProgressStates } from '@emerald-dao/component-library/components/ProgressStep/progress-states.type';
	import { page } from '$app/stores';

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

	onMount(() => {
		grabElements();
		trackScroll();
		tranformHeadingsToSteps();
	});
</script>

<svelte:window on:scroll={trackScroll} />

<div>
	<ProgressSteps
		{steps}
		diameter={0.6}
		direction="column-reverse"
		fontSize="small"
		gap={0.8}
		cutLineEnds={false}
	/>
	<div style="margin-top: var(--space-5);">
		<Button
			href={`https://github.com/emerald-dao/emerald-academy-v2/tree/main/src/lib/content/courses/${$page.params.name}/${$page.params.lang}/${$page.params.chapter}/${$page.params.lesson}.md`}
			target="_blank"
			width="full-width">Edit this page</Button
		>
	</div>
</div>
