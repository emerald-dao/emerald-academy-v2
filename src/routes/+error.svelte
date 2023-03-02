<script type="ts">
	import { page } from '$app/stores';
	console.log($page);
</script>

<section class="container-small">
	{#if $page.status === 404}
		<h1 class="status-code">{$page.status}</h1>
		<h1>You must be lost</h1>
		<h5>{$page.error.message}</h5>
		<a href="/">Go home</a>
	{:else if $page.status === 500}
		<h1 class="status-code">{$page.status}</h1>
		<h1>Whoops. We weren't expecting that</h1>
		<p>We're investigating the issue</p>
		<a href="/">Go home</a>
	{/if}
</section>

<style type="scss">
	section {
		text-align: center;

		.status-code {
			font-size: 10rem;
		}
	}
</style>
