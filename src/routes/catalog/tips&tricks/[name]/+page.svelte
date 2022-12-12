<script>
	export let data;
	console.log(data);
</script>

<section>
	<div class="container" width="small">
		<article>
			<h1>{data.title}</h1>
			<svelte:component this={data.content} />
		</article>
	</div>
</section>
