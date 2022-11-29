<script>
	import { Section, Container } from '@mateoroldos/svelte.bones';
	import Card from '$lib/components/atoms/Card.svelte';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
</script>

<Section>
	<Container>
		<div class="main-wrapper">
			<div>
				<h3 class="right-align">Courses</h3>
				<p class="right-align">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus veritatis iusto quasi
					laboriosam commodi consequuntur aperiam, amet beatae laudantium. Nulla, eaque?
					Reprehenderit deleniti minima sapiente culpa vel ipsa laboriosam quisquam.
				</p>
				<button class="right-align">learn more</button>
			</div>

			<div class="secondary-wrapper">
				<Splide
					hasTrack={false}
					options={{
						rewind: true,
						width: 500,
						gap: '0.5rem',
						perPage: 3,
						perMove: 1
					}}
				>
					<div>
						<SplideTrack>
							<SplideSlide><Card background="secondary">1</Card></SplideSlide>
							<SplideSlide><Card background="secondary">2</Card></SplideSlide>
							<SplideSlide><Card background="secondary">3</Card></SplideSlide>
							<SplideSlide><Card background="secondary">4</Card></SplideSlide>
							<SplideSlide><Card background="secondary">5</Card></SplideSlide>
							<SplideSlide><Card background="secondary">6</Card></SplideSlide>
						</SplideTrack>

						<div class="splide__arrows arrows-center">
							<button class="splide__arrow splide__arrow--prev" />
							<button class="splide__arrow splide__arrow--next" />
						</div>
					</div>
				</Splide>
			</div>
		</div>
	</Container>

	<Container>
		<Card width="100%">
			<div class="center">
				<h4>Join Bootcamps</h4>
				<h3>Live</h3>
			</div>

			<div class="main-wrapper center">
				<Card background="secondary" width="100%">1</Card>
				<Card background="secondary" width="100%">2</Card>
			</div>
		</Card>
	</Container>

	<Container>
		<div class="secondary-wrapper center">
			<div>
				<h3>Follow one of our recommended Roadmaps</h3>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus veritatis iusto quasi
					laboriosam commodi consequuntur aperiam, amet beatae laudantium. Nulla, eaque?
					Reprehenderit deleniti minima sapiente culpa vel ipsa laboriosam quisquam.
				</p>
				<div class="secondary-wrapper center">
					<Card>Cadence smart contract developer</Card>
					<Card>DAPP developer</Card>
				</div>
			</div>
		</div>
	</Container>
</Section>

<style type="scss">
	.main-wrapper {
		display: flex;
		flex-direction: column;
		gap: 3rem;

		@include mq(medium) {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}
	.secondary-wrapper {
		display: flex;
		flex-direction: row;
		gap: 3rem;
		justify-content: center;
		text-align: center;
	}

	.center {
		justify-content: center;
		text-align: center;
	}
	.arrows-center {
		vertical-align: center;
	}
	.right-align {
		text-align: right;
	}

	h3,
	p,
	div,
	button {
		margin-bottom: 3rem;
		margin-top: 3rem;
	}
</style>
