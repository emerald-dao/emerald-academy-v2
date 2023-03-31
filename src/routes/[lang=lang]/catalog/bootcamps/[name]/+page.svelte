<script type="ts">
	import { Accordion, Button } from '@emerald-dao/component-library';
	import ContentIntro from '$lib/components/cards/ContentIntro.svelte';
	import { onBoardingSteps, onBoardingActiveStep } from '$stores/onBoarding/OnBoardingSteps';
	import { Modal, getModal } from '@emerald-dao/component-library';
	import CourseDetailsHeader from '$lib/components/cards/CourseDetailsHeader.svelte';
	import CourseDetailsOpen from '$lib/components/cards/CourseDetailsOpen.svelte';
	import Questions from '$lib/components/faqs/Questions.svelte';
	import Answers from '$lib/components/faqs/Answers.svelte';
	import Seo from '$lib/components/seo/Seo.svelte';

	export let data;
</script>

<ContentIntro overview={data.overview} showBreadcrumbs={true}>
	<Button size="large" width="extended" on:click={() => getModal().open()}>Enroll</Button>
	<Modal>
		<div class="modal-content">
			<svelte:component this={$onBoardingSteps[$onBoardingActiveStep].component} />
		</div>
	</Modal>
</ContentIntro>
<section class="container-small">
	{#each data.overview.videos as video, i}
		<div class="accordion">
			<Accordion>
				<div slot="header">
					<CourseDetailsHeader data={video} {i} typeOfcontent={data.overview.contentType} />
				</div>
				<div slot="open">
					<CourseDetailsOpen data={video} {i} typeOfcontent={data.overview.contentType} />
				</div>
			</Accordion>
		</div>
	{/each}
</section>
<section class="container-small">
	{#if data.overview.metadata.faqs}
		{#each data.overview.metadata.faqs as questionAnswer}
			<div class="accordion">
				<Accordion>
					<div slot="header">
						<Questions {questionAnswer} />
					</div>
					<div slot="open">
						<Answers {questionAnswer} />
					</div>
				</Accordion>
			</div>
		{/each}
	{/if}
</section>

<Seo
	title={`${data.overview.title} | Bootcamp | Emerald Academy`}
	description={data.overview.excerpt}
	type="WebPage"
/>

<style type="scss">
	.accordion {
		display: flex;
		flex-direction: column;
		border-inline: var(--border-width-primary) var(--clr-border-primary) solid;
		border-bottom: var(--border-width-primary) var(--clr-border-primary) solid;
		background: var(--clr-surface-primary);

		&:first-child {
			border-radius: var(--space-5) var(--space-5) 0 0;
			border-top: var(--border-width-primary) var(--clr-border-primary) solid;
		}

		&:last-child {
			border-radius: 0 0 var(--space-5) var(--space-5);
		}
	}
</style>
