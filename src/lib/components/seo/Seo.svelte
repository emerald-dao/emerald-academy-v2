<script type="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let description: string;
	export let type: string;
  export let image: string = "https://academy.ecdao.org/favicon.png";

	$: url = $page.url.href;
</script>

<svelte:head>
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
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
