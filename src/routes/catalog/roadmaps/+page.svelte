<script type="ts">
	// are we gonna use this page?

	import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';

	export let data;

	interface Data {
		roadmap: RoadmapOverview;
		postPath: string;
	}

	console.log(data);
</script>

<section>
	<div class="container">
		<div class="wrapper">aaa</div>
		<!-- {/each} -->
	</div>
</section>

<style>
	.wrapper {
		margin-bottom: 3em;
	}
</style>
