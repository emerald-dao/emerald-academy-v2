<script type="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let description: string;
	export let type: string;
	export let image: string = 'https://academy.ecdao.org/favicon.png';

	$: url = $page.url.href;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="image" content={image} />
	{@html `<script type="application/ld+json">
        {
         "@context": "https://schema.org/",
         "@type": "${type}",
         "name": "${title}",
         "description": "${description}",
         "url": "${url}"
       }
       </script>`}
</svelte:head>
