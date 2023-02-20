<script type="ts">
	import { locale } from '$i18n/i18n-svelte';
	import type { CourseData } from '$lib/types/content/course.interface';
	import Faqs from '$lib/components/faqs/Faqs.svelte';
	import ContentIntro from '$lib/components/cards/ContentIntro.svelte';
	import { Button } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';
	import CourseDetails from '$lib/components/cards/CourseDetails.svelte';

	export let data: CourseData;
</script>

<section class="container-small">
	<ContentIntro overview={data.overview}>
		<Button size="large" href={`/${Object.values(data.contents)[0][0].slug}`}>
			Start<Icon icon="tabler:arrow-right" />
		</Button>
	</ContentIntro>
</section>
<section class="container-small">
	{#each Object.values(data.contents) as chapter, i}
		<CourseDetails data={chapter} {i} typeOfcontent={data.overview.contentType} />
	{/each}
</section>
<section class="container-small">
	{#if data.overview.metadata.faqs}
		<Faqs questionAnswer={data.overview.metadata.faqs} />
	{/if}
</section>
