<script type="ts">
	import ContentIntro from '$lib/components/cards/ContentIntro.svelte';
	import { Accordion, Button } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';
	import CourseDetailsHeader from '$lib/components/cards/CourseDetailsHeader.svelte';
	import CourseDetailsOpen from '$lib/components/cards/CourseDetailsOpen.svelte';
	import Seo from '$lib/components/seo/Seo.svelte';
	import FaqsSection from '$lib/components/faqs/FaqsSection.svelte';

	export let data;

	$: courseContents = Object.values(data.course.contents);
</script>

<ContentIntro overview={data.course.overview} showBreadcrumbs={true}>
	<Button size="large" width="extended" href={`/${courseContents[0].contents[0].slug}`}>
		Start<Icon icon="tabler:arrow-right" />
	</Button>
</ContentIntro>
<section class="container-small">
	{#each Object.values(data.course.contents) as chapter, i}
		<div class="accordion">
			<Accordion>
				<div slot="header">
					<CourseDetailsHeader
						data={chapter}
						{i}
						typeOfcontent={data.course.overview.contentType}
					/>
				</div>
				<div slot="open">
					<CourseDetailsOpen data={chapter} {i} typeOfcontent={data.course.overview.contentType} />
				</div>
			</Accordion>
		</div>
	{/each}
</section>
{#if data.course.overview.metadata.faqs}
	<FaqsSection faqs={data.course.overview.metadata.faqs} />
{/if}

<Seo
	title={`${data.course.overview.title} | Course | Emerald Academy`}
	description={data.course.overview.excerpt}
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
