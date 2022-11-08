<script type="ts">
	import { Section, Container } from '@mateoroldos/svelte.bones';
	import Card from '$lib/components/atoms/Card.svelte';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
</script>

<Section>
	<Container>
		<Card width="100%">
			<div class="main-wrapper">
				<p>Explore our content</p>
				<h3>Flow free educational resources</h3>
			</div>

			<div class="secondary-wrapper">
				<Card background="secondary">Bootcamps</Card>
				<Card background="secondary">Courses</Card>
			</div>
			<div class="secondary-wrapper">
				<Card background="secondary">Cadence By Example</Card>
				<Card background="secondary">Resources</Card>
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
		margin-bottom: 3em;
	}
	h3 {
		margin-bottom: 3rem;
	}
	.grid-wrapper {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
</style>
