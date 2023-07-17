<script type="ts">
	import { transformHeadingToUrl } from '$lib/utilities/dataTransformation/transformHeadingToUrl';
	import { getContext, onMount, tick } from 'svelte';
	import { Button, ProgressSteps } from '@emerald-dao/component-library';
	import type { ProgressStates } from '@emerald-dao/component-library/components/ProgressStep/progress-states.type';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import EditContent from '../atoms/EditContent.svelte';
	import type { Author as IAuthor } from '$lib/types/content/content-overview.interface';
	import Author from '../atoms/Author.svelte';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

	export let headings: Heading[];
	export let contentType:
		| ContentTypeEnum.Quickstart
		| ContentTypeEnum.Tutorial
		| ContentTypeEnum.Snippet
		| ContentTypeEnum.Course = ContentTypeEnum.Course;
	export let externalUrl: string | undefined = undefined;

	function getEditContentUrl() {
		if (contentType === ContentTypeEnum.Course) {
			return `https://github.com/emerald-dao/emerald-academy-v2/tree/main/src/lib/content/courses/${$page.params.name}/${$page.params.lang}/${$page.params.chapter}/${$page.params.lesson}.md`;
		} else if (contentType === ContentTypeEnum.Quickstart) {
			return `https://github.com/emerald-dao/emerald-academy-v2/tree/main/src/lib/content/quickstarts/${$page.params.name}/${$page.params.lang}/readme.md`;
		} else if (contentType === ContentTypeEnum.Tutorial) {
			return `https://github.com/emerald-dao/emerald-academy-v2/tree/main/src/lib/content/tutorials/${$page.params.name}/${$page.params.lang}/readme.md`;
		} else if (contentType === ContentTypeEnum.Snippet) {
			return `https://github.com/emerald-dao/emerald-academy-v2/tree/main/src/lib/content/snippets/${$page.params.name}/readme.md`;
		} else {
			return `https://github.com/emerald-dao/emerald-academy-v2/tree/main`;
		}
	}

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
		url?: string;
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

	const author: IAuthor = getContext('author-context');
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
			walletAddress={author.walletAddress}
		/>
	{/if}
	{#if steps.length > 0}
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
	{/if}
	<div class="column-6 bottom-links-wrapper">
		{#if contentType === ContentTypeEnum.Course || contentType === ContentTypeEnum.Tutorial}
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
		{:else if contentType === ContentTypeEnum.Snippet}
			<Button size="small" color="primary" target="_blank" width="full-width" href={externalUrl}>
				<Icon icon="tabler:link" />
				View Code
			</Button>
		{:else if contentType === ContentTypeEnum.Quickstart}
			<Button
				size="small"
				color="primary"
				target="_blank"
				width="full-width"
				href={externalUrl + '/fork'}
			>
				<Icon icon="tabler:brand-github" />
				Fork Quickstart
			</Button>
		{/if}
		<EditContent href={getEditContentUrl()} target="_blank" />
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
