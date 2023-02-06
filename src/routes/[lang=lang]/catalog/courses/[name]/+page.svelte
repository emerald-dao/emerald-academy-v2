<script type="ts">
	import { locale } from '$i18n/i18n-svelte';
	import type { CourseData } from '$lib/types/content/course.interface';
	import Faqs from '$lib/components/faqs/Faqs.svelte';
	import ContentIntro from '$lib/components/cards/ContentIntro.svelte';
	import { Button } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';
	import CourseDetails from '$lib/components/cards/CourseDetails.svelte';

	export let data: CourseData;

	console.log(data);
</script>

<section class="container-small">
	<ContentIntro overview={data.overview}>
		<Button size="large" href={`/${$locale}/catalog/${data.overview.slug}/week1/day1`}>
			Start<Icon icon="tabler:arrow-right" />
		</Button>
	</ContentIntro>
</section>
<section class="container-small">
	{#each Object.values(data.contents) as week, i}
		<CourseDetails data={week} {i} typeOfcontent={data.overview.contentType} />
	{/each}
</section>
<section class="container-small">
	{#if data.overview.metadata.faqs}
		<Faqs questionAnswer={data.overview.metadata.faqs} />
	{/if}
</section>
