<script type="ts">
	import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';

	export let data: Data;

	interface Data {
		roadmap: RoadmapOverview;
		postPath: string;
	}
</script>

<section>
	<div class="container">
		<div class="wrapper">aaa</div>
	</div>
</section>

<style>
	.wrapper {
		margin-bottom: 3em;
	}
</style>
