<script type="ts">
	import { page } from '$app/stores';
	import { npm_command } from '$env/static/private';
	import { Section } from '@mateoroldos/svelte.bones';
	let navigation = $page.url.pathname;
	let navigationPath = navigation.split('/');
	console.log(navigationPath);

	const getPreviousRoutes = (i: number) => {
		let previousRoutes = ''; // '/courses/curso...
		// console.log(i);

		for (let index = 0; index < i; index++) {
			previousRoutes = previousRoutes + `${navigationPath[index]}/`;
		}

		return previousRoutes;
	};
	getPreviousRoutes(1);
</script>

<nav>
	<ul>
		{#each navigationPath as np, i}
			{#if i > 0}
				<li>
					<a href={`${$page.url.origin}${getPreviousRoutes(i)}${np}`}>{np}</a>
					{#if i < navigationPath.length - 1}
						<div>></div>
					{/if}
				</li>
			{/if}
		{/each}
	</ul>
</nav>

<style>
	nav ul li {
		list-style: none;
		float: left;
		margin: 0% 1% 2% 2%;
		vertical-align: middle;
		text-align: center;
		align-items: center;
		display: flex;
		flex-direction: row;
	}
</style>
