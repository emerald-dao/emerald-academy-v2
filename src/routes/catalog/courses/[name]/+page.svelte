<script type="ts">
	import type { CourseOverview } from '$lib/types/content/course.interface';
	import Faqs from '$lib/components/faqs/Faqs.svelte';
	import ContentIntro from '$lib/components/cards/ContentIntro.svelte';
	import { Button } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';

	export let data: Data;

	interface Data {
		thisCourse: ThisCourse[];
		overview: CourseOverview;
	}

	interface ThisCourse {
		meta: any; // TODO: Tipear a este
		path: string;
		week: number;
	}
</script>

<section class="container-small">
	<ContentIntro overview={data.overview}>
		<Button size="large" href={data.thisCourse[0].path.replace('content', 'catalog')}>
			Start<Icon icon="tabler:arrow-right" />
		</Button>
	</ContentIntro>
</section>

<section class="container-small">
	{#if data.overview.metadata.faqs}
		<Faqs questionAnswer={data.overview.metadata.faqs} />
	{/if}
</section>
