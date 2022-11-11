<script type="ts">
	import { Section, Container } from '@mateoroldos/svelte.bones';
	import { page } from '$app/stores';
	import Card from '$lib/components/atoms/Card.svelte';
	import { overview } from '$lib/content/courses/basic-dapp/overview';
	import Breadcrumbs from '$lib/components/atoms/Breadcrumbs.svelte';
	export let data;

	const takeOutSpaces = (word: string) => {
		const noSpaces = word.split(' ').join('-');
		return noSpaces.toLowerCase();
	};
</script>

<Section>
	<Container>
		<div class="main-wrapper">
			<Breadcrumbs />
			<h3>Courses</h3>
		</div>
	</Container>
	<Container>
		<div class="grid-wrapper">
			<div>
				<h4>menu</h4>
			</div>
			<div class="secondary-wrapper">
				{#each data.courses as oneData}
					<Card
						><a href={`courses/${takeOutSpaces(oneData.body.title)}`}>{oneData.body.title}</a>
						<div class="grid-wrapper2">
							<p>{oneData.body.level}</p>
							<p>{oneData.body.weeks.length - 1}</p>
						</div>

						<p>{oneData.body.excerpt}</p>
					</Card>
				{/each}
			</div>
		</div>
	</Container>
</Section>

<style>
	nav ul li {
		list-style: none;
		float: left;
		margin: 0% 1% 2% 2%;
		vertical-align: middle;
		text-align: center;
		align-items: center;
	}
	div {
		margin-bottom: 5rem;
	}

	.main-wrapper {
		display: flex;
		flex-direction: column;
	}

	.secondary-wrapper {
		display: flex;
		flex-direction: row;
		gap: 3rem;
		justify-content: center;
		text-align: center;
	}

	.grid-wrapper {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}

	.grid-wrapper2 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1em;
	}
</style>
