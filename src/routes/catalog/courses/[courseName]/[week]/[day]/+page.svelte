<script>
	import { page } from '$app/stores';
	import { Container, Section } from '@mateoroldos/svelte.bones';
	export let data;
	// const getChapter = import(
	// 	`../../../../../../lib/content/courses/${$page.params.courseName}/${$page.params.chapter}/${$page.params.day}.md`
	// );
</script>

<Section>
	<Container width="small">
		<article>
			<h1>{data.title}</h1>
			<p>Day: {data.day}</p>
			<svelte:component this={data.content} />
		</article>
		<!-- {#await getChapter}
			Loading chapter...
		{:then chapter}
			<svelte:component this={chapter.default} />
		{:catch}
			Chapter not found
		{/await} -->
	</Container>
</Section>
