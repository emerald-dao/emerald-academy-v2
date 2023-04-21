<script type="ts">
	import { transformHeadingToUrl } from '$lib/utilities/dataTransformation/transformHeadingToUrl';
	import { getContext, onMount, tick } from 'svelte';
	import { ProgressSteps } from '@emerald-dao/component-library';
	import type { ProgressStates } from '@emerald-dao/component-library/components/ProgressStep/progress-states.type';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import EditContent from '../atoms/EditContent.svelte';

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
		<div class="row-2">
			{#if author.avatarUrl}
				<img src={author.avatarUrl} alt="User avatar" />
			{:else}
				<img src="/new-avatar.png" alt="Generic avatar" />
			{/if}
			<div class="column">
				<p>Author</p>
				<a
					href={author.socialMediaUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="header-link row-2 align-center"
				>
					<p>{author.name} ↗</p>
				</a>
			</div>
		</div>
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
		{#if metadata.videoId || metadata.quizUrl || questsExist}
			<div class="column-3">
				{#if metadata.videoId}
					<a href="#video" class={`header-link row-2 align-center`}>
						<Icon icon="bi:camera-video" />
						<p class="w-small">Video lesson</p>
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
						<p class="w-small">Quiz</p>
					</a>
				{/if}
				{#if questsExist}
					<a href="#quests" class={`header-link row-2 align-center`}>
						<Icon icon="tabler:diamond" />
						<p class="w-small">Quests</p>
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
	a {
		color: var(--clr-heading-main);
	}
	.row-2 {
		align-items: center;

		img {
			width: 40px;
			height: 40px;
			border-radius: 50%;
			margin-block: 0;
		}
		p {
			margin-bottom: 0px;
			margin-top: 0px;
		}
	}

	.steps-wrapper {
		margin-left: 10px;
	}
	.bottom-links-wrapper {
		margin-left: var(--space-4);
	}
</style>
