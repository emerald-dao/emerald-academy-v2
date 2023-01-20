<script type="ts">
	import type { Template } from '$lib/types/content/templates.interface';
	export let data: Data;

	interface Data {
		overview: Template;
	}

	const thisTemplate = data.overview;
</script>

<section class="container">
	<div>
		{thisTemplate.title}
	</div>
</section>
