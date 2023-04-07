<script type="ts">
	import ContentIntro from '$lib/components/cards/ContentIntro.svelte';
	import { Button } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';
	import Seo from '$lib/components/seo/Seo.svelte';
	import FaqsSection from '$lib/components/faqs/FaqsSection.svelte';
	import ContentsAccordionSection from '$lib/components/contents-accordion/ContentsAccordionSection.svelte';
	import { locale, LL } from '$i18n/i18n-svelte';

	export let data;

	$: courseContents = Object.values(data.course.contents);
</script>

<ContentIntro overview={data.course.overview} showBreadcrumbs={true} stars={data.stars}>
	<Button size="large" width="extended" href={`/${courseContents[0].contents[0].slug}`}>
		{$LL.START()}<Icon icon="tabler:arrow-right" />
	</Button>
</ContentIntro>
<ContentsAccordionSection overview={data.course.overview} contents={data.course.contents} />
{#if data.course.overview.metadata.faqs}
	<FaqsSection faqs={data.course.overview.metadata.faqs} />
{/if}

<Seo
	title={`${data.course.overview.title} | Course | Emerald Academy`}
	description={data.course.overview.excerpt}
	type="WebPage"
/>
