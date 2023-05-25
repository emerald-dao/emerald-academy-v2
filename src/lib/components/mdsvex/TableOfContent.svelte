<script type="ts">
	import { transformHeadingToUrl } from '$lib/utilities/dataTransformation/transformHeadingToUrl';
	import { getContext, onMount, tick } from 'svelte';
	import { ProgressSteps } from '@emerald-dao/component-library';
	import type { ProgressStates } from '@emerald-dao/component-library/components/ProgressStep/progress-states.type';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import EditContent from '../atoms/EditContent.svelte';
	import Author from '../atoms/Author.svelte';

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
	const metadata = getContext('metadata-context');

	let questsExist = false;
	$: questsExist = headings.some((item) => item.title === 'Quests');

	onMount(() => {
		grabElements();
		trackScroll();
		tranformHeadingsToSteps();
	});
</script>

<svelte:window on:scroll={trackScroll} />

<div class="column-10">
	{#if author}
		<Author
			name={author.name}
			avatarUrl={author.avatarUrl}
			socialMediaUrl={author.socialMediaUrl}
			isVerified={author.isVerified}
		/>
	{/if}
	<div class="steps-wrapper">
		<ProgressSteps
			{steps}
			diameter={0.5}
			direction="column-reverse"
			fontSize="xsmall"
			gap={0.4}
			cutLineEnds={false}
			lineHeight="1"
		/>
	</div>
	<div class="column-6 bottom-links-wrapper">
		{#if metadata.lessonVideoUrl || metadata.quizUrl || questsExist}
			<div class="column-3">
				{#if metadata.lessonVideoUrl}
					<a href="#" class={`header-link row-2 align-center`}>
						<Icon icon="bi:camera-video" />
						<p class="w-small no-margin">Video lesson</p>
					</a>
				{/if}
				{#if metadata.quizUrl}
					<a
						href={metadata.quizUrl}
						target="_blank"
						rel="noopener noreferrer"
						class={`header-link row-2 align-center`}
					>
						<Icon icon="tabler:zoom-question" />
						<p class="w-small no-margin">Quiz</p>
					</a>
				{/if}
				{#if questsExist}
					<a href="#quests" class={`header-link row-2 align-center`}>
						<Icon icon="tabler:diamond" />
						<p class="w-small no-margin">Quests</p>
					</a>
				{/if}
			</div>
		{/if}
		<EditContent
			href={`https://github.com/emerald-dao/emerald-academy-v2/tree/main/src/lib/content/courses/${$page.params.name}/${$page.params.lang}/${$page.params.chapter}/${$page.params.lesson}.md`}
			target="_blank"
		/>
	</div>
</div>

<style lang="scss">
	.no-margin {
		margin: 0px;
	}
	a {
		color: var(--clr-heading-main);
	}

	.steps-wrapper {
		margin-left: 10px;
	}
	.bottom-links-wrapper {
		margin-left: var(--space-4);
	}
</style>
