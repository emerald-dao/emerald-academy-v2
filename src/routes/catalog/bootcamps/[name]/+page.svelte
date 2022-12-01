<script type="ts">
	import CurriculumOverview from '$lib/components/cards/CurriculumOverview.svelte';
	import SpecificContentCard from '$lib/components/cards/SpecificContentCard.svelte';
	import Faqs from '$lib/components/faqs/Faqs.svelte';
	import { overview } from '$lib/content/bootcamps/basic-dapp/overview';
	import type { BootcampOverview } from '$lib/types/content/bootcamp.interface';
	import { Label } from '@emerald-dao/component-library';

	export let data: Data;

	interface Data {
		overview: BootcampOverview;
	}

	console.log(data);
</script>

<section>
	<div class="container grid-wrapper">
		<div class="content">
			<SpecificContentCard overview={data.overview} />
		</div>

		<div>
			<CurriculumOverview overview={data.overview} />
		</div>
	</div>
	<section>
		<div class="container card-primary">
			{#each data.overview.videos as video}
				<div class="grid-wrapper">
					<div>
						<p class="w-bold">{video.name}</p>
						<p>{video.excerpt}</p>
						{#each video.subjects as subject}
							<Label>{subject}</Label>
						{/each}
					</div>
					<div>
						<Label><a href={video.link}>View Video</a></Label>
					</div>
				</div>
			{/each}
		</div>
	</section>
</section>

<style type="scss">
	.grid-wrapper {
		display: grid;
		grid-template-columns: 2fr 1fr;
	}
	.content {
		padding-right: var(--space-10);
	}
	p {
		padding: var(--space-2) 0 var(--space-2) 0;
	}
</style>
