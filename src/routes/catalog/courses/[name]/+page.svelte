<script type="ts">
	import type { CourseDay, CourseOverview } from '$lib/types/content/course.interface';
	import Faqs from '$lib/components/faqs/Faqs.svelte';
	import ContentIntro from '$lib/components/cards/ContentIntro.svelte';
	import { Button } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import CourseDetails from '$lib/components/cards/CourseDetails.svelte';
	import { getWeeksFromCourse } from '$lib/utilities/dataTransformation/getWeeksFromCourse';

	export let data: Data;

	interface Data {
		thisCourse: CourseDay[];
		overview: CourseOverview;
	}

	let weeks = getWeeksFromCourse(data.thisCourse);

	const getDaysFromWeek = (i: number) => {
		for (let index = 0; index < data.thisCourse.length; index++) {
			const element = array[index];
		}
	};
</script>

<section class="container-small">
	<ContentIntro overview={data.overview}>
		<Button size="large" href={data.thisCourse[0].path.replace('content', 'catalog')}>
			Start<Icon icon="tabler:arrow-right" />
		</Button>
	</ContentIntro>
</section>
<!-- <section class="container-small">
	{#each Array(weeks) as week, i}
		<CourseDetails data={week} {i} />
	{/each}
</section> -->
<section class="container-small">
	{#if data.overview.metadata.faqs}
		<Faqs questionAnswer={data.overview.metadata.faqs} />
	{/if}
</section>
