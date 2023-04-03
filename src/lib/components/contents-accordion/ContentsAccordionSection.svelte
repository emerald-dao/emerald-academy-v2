<script lang="ts">
	import type { BootcampOverview, BootcampVideo } from '$lib/types/content/bootcamp.interface';
	import type { CourseContents, CourseOverview } from '$lib/types/content/course.interface';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { Accordion } from '@emerald-dao/component-library';
	import CourseDetailsHeader from './CourseDetailsHeader.svelte';
	import CourseDetailsOpen from './CourseDetailsOpen.svelte';

	export let contents: CourseContents | BootcampVideo[];
	export let overview: CourseOverview | BootcampOverview;

	$: contentsArray =
		overview.contentType === ContentTypeEnum.Bootcamp
			? (contents as BootcampVideo[])
			: Object.values(contents);
</script>

<section>
	<div class="container-small">
		{#each contentsArray as content, i}
			<div class="accordion">
				<Accordion>
					<div slot="header">
						<CourseDetailsHeader data={content} {i} typeOfcontent={overview.contentType} />
					</div>
					<div slot="open">
						<CourseDetailsOpen data={content} {i} typeOfcontent={overview.contentType} />
					</div>
				</Accordion>
			</div>
		{/each}
	</div>
</section>

<style type="scss">
	section {
		border-top: 0.5px var(--clr-border-primary) solid;

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
	}
</style>
