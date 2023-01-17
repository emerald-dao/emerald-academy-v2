<script type="ts">
	export let data;

	const content = data.content;
</script>

<section class="container">
	<div class="column-4">
		{#each data.content as content}
			<span>
				{content.meta.title}
			</span>
		{/each}
	</div>
</section>
