<script type="ts">
	export let data;
</script>

<section class="container-small">
	<article>
		<svelte:component this={data.content} />
	</article>
</section>
