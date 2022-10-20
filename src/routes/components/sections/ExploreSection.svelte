<script>
	import { Section, Container } from '@mateoroldos/svelte.bones';
	import Card from '$lib/components/atoms/Card.svelte';
</script>

<Section>
	<Container>
		<Card width=100%>
			<div class="main-wrapper">
				<h4>Explore series of</h4>
				<h3>Flow educational resources through time</h3>
			</div>

			<div class="secondary-wrapper">
				<Card background='secondary'>1</Card>
				<Card background='secondary'>2</Card>
				<Card background='secondary'>3</Card>
			</div>
		</Card>
	</Container>
</Section>

<style type="scss">
	@use '../../../lib/styles/utils' as *;

	.main-wrapper {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		align-items: center;
		justify-content: center;
		text-align: center;

		//  @include mq(medium) {
		//  	display: grid;
		//  	grid-template-columns: 1fr;
		//  }
	}
	.secondary-wrapper {
		display: flex;
		flex-direction: row;
		gap: 3rem;
		justify-content: center;
		text-align: center;
	}
	h3{
		margin-bottom: 3rem;
	}
</style>
