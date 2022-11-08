<script>
	import { Section, Container, Row } from '@mateoroldos/svelte.bones';
</script>

<Section>
	<Container>
		<Row>
			<nav />
			<slot />
		</Row>
	</Container>
</Section>
