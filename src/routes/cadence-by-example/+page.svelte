<script type="ts">
	import Filters from '$lib/components/filters/Filters.svelte';
	import ContentCard from '$lib/components/cards/ContentCard.svelte';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
	import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import type { Filter } from '$lib/types/content/filters/filter.interface';

	export let data;
	console.log(data);
</script>

<section class="container">
	<div class="sidebar column-10">Hola</div>
	<div class="main">
		{#each data.content as content}
			<ContentCard overview={content} />
		{/each}
	</div>
</section>
