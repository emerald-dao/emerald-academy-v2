<!-- <script type="ts">
	import { Slidy } from 'svelte-slidy';
	import cards from './cards';
	let name = 'Slidy';
	export let cardss;

	// export let slideo = [];

	const slidy_cards = {
		slides: cardss,
		wrap: {
			id: 'slidy_cards',
			width: '100vw',
			height: '100vh',
			padding: '50px 0 50px',
			align: 'middle',
			alignmargin: 0
		},
		slide: {
			gap: 50,
			width: '80vw',
			height: '100vh',
			backimg: false,
			imgsrckey: 'src',
			objectfit: 'contain'
		},
		controls: {
			dots: false,
			dotsnum: false,
			dotsarrow: false,
			dotspure: false,
			arrows: true,
			keys: false,
			drag: false,
			wheel: false
		},
		options: {
			axis: 'x',
			loop: false,
			duration: 350
		}
	};
</script>

<Slidy slides={cardss} let:item>
	<div class="slide">
		{item.name}
	</div>
</Slidy>

<style>
	@media screen and (min-width: 500px) {
		:global(#slidy_cards .slidy-ul li) {
			width: 70vw;
		}
	}
	@media screen and (min-width: 600px) {
		:global(#slidy_cards .slidy-ul li) {
			width: 50vw;
		}
	}
	@media screen and (min-width: 700px) {
		:global(#slidy_cards .slidy-ul li) {
			width: 33vw;
		}
	}
	:global(#slidy_cards .slidy-ul li img) {
		transform: scale(1);
		transition: transform 350ms, box-shadow 350ms;
	}
	:global(#slidy_cards .slidy-ul li) {
		overflow: visible;
	}
	:global(#slidy_cards .slidy-ul li.active img) {
		transform: scale(1.15);
		box-shadow: 0 14px 25px rgba(0, 0, 0, 0.36);
	}
	:global(body) {
		margin: 0;
		padding: 0;
	}
	.slide {
		position: relative;
		display: flex;
		flex-flow: column;
		text-align: center;
		align-content: center;
		justify-content: center;
		height: 100%;
		border-radius: 1rem;
	}
	.slide img {
		max-height: 200px;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		vertical-align: middle;
		object-fit: cover;
		position: relative;
		z-index: 1;
		border-radius: 1rem;
		box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);
	}
	.slide article {
		padding: 1rem;
	}
	h1 {
		text-align: center;
	}
	h1 span {
		color: red;
	}
</style> -->
