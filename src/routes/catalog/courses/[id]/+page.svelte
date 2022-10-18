<script>
	import { page } from '$app/stores';
	import { Container, Section } from '@mateoroldos/svelte.bones';

	const getChapter = import(`../../../../lib/content/courses/dapp-courses/${$page.params.id}.md`);
</script>

<Section>
	<Container width="small">
		{#await getChapter}
			Loading chapter...
		{:then chapter}
			<svelte:component this={chapter.default} />
		{:catch}
			Chapter not found
		{/await}
	</Container>
</Section>
