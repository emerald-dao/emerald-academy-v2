<script type="ts">
	export let data;

	console.log(data.templates);
</script>

<section class="container">
	{#each data.templates as template}
		<div>
			<span>
				{template.title}
			</span>
		</div>
	{/each}
</section>
