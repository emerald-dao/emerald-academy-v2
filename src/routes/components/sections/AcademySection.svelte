<script>
	import { Section, Container } from '@mateoroldos/svelte.bones';
	import Card from '$lib/components/atoms/Card.svelte';
</script>

<Section>
	<Container>
		<div class="main-wrapper">
			<div>
				<h3>Challenges</h3>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus veritatis iusto quasi
					laboriosam commodi consequuntur aperiam, amet beatae laudantium. Nulla, eaque?
					Reprehenderit deleniti minima sapiente culpa vel ipsa laboriosam quisquam.
				</p>
				<button>learn more</button>
			</div>
			
				<div class="secondary-wrapper">
				<Card >x</Card>
				<Card>x</Card>
				<Card>x</Card>
				</div>
				
		</div>
	</Container>

	<Container>
		<div class="main-wrapper">
			<div class="secondary-wrapper">
				<Card>x</Card>
				<Card>x</Card>
				<Card>x</Card>
			</div>
			<div>
				<h3>Courses</h3>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus veritatis iusto quasi
					laboriosam commodi consequuntur aperiam, amet beatae laudantium. Nulla, eaque?
					Reprehenderit deleniti minima sapiente culpa vel ipsa laboriosam quisquam.
				</p>
				<button>learn more</button>
			</div>
		</div>
	</Container>

	<Container>
		

		
		<Card width='100%'>
			<div class="center">
				<h4>Join Bootcamps</h4>
				<h3>Live</h3>
			</div>

			<div class="main-wrapper center">
				<Card background='secondary' width='100%'>1</Card>
				<Card background='secondary' width='100%'>2</Card>
			</div>
		</Card>
	
	</Container>

	<Container>
		<div class="main-wrapper">
			<div>
				<h3>Resources</h3>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus veritatis iusto quasi
					laboriosam commodi consequuntur aperiam, amet beatae laudantium. Nulla, eaque?
					Reprehenderit deleniti minima sapiente culpa vel ipsa laboriosam quisquam.
				</p>
				<button>learn more</button>
			</div>
			<div class="secondary-wrapper">
				<Card>IMAGEN</Card>
				
			</div>
		</div>
	</Container>
</Section>

<style type="scss">
	@use '../../../lib/styles/utils' as *;

	.main-wrapper {
		display: flex;
		flex-direction: column;
		gap: 3rem;

		@include mq(medium) {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}

		.secondary-wrapper {
			display: flex;
			flex-direction: row;
			gap: 3rem;
			justify-content: center;
			text-align: center;
		}
	}

	
	.center {
		justify-content: center;
		text-align: center;
	}

	h3, p, div{
		margin-bottom: 3rem;
		margin-top: 3rem;
	}
</style>
