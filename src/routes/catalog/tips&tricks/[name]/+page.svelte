<script>
	import { Container, Section } from '@mateoroldos/svelte.bones';
	export let data;
	console.log(data);
</script>

<Section>
	<Container width="small">
		<article>
			<h1>{data.title}</h1>
			<p>Day: {data.day}</p>
			<svelte:component this={data.content} />
		</article>
	</Container>
</Section>
