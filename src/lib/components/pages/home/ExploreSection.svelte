<script>
	import { Section, Container, Card } from '@mateoroldos/svelte.bones';
</script>

<Section>
	<Container>
		<Card>
			<div class="main-wrapper">
				<h4>Explore series of </h4>
				<h3>Flow educational resources through time</h3>
			</div>
			
			<div class="secondary-wrapper">
				<Card>1</Card>
				<Card>2</Card>
				<Card>3</Card>
			</div>
			
		</Card>
	</Container>
</Section>

<style type="scss">
	@use '../../../../lib/styles/utils' as *;

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

	
</style>
