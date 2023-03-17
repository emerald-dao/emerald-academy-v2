<script type="ts">
	import Prism from 'prismjs';
	import { onMount } from 'svelte';
	import 'prismjs/plugins/toolbar/prism-toolbar.min.css';
	import 'prismjs/plugins/toolbar/prism-toolbar.min';
	import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.min';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.min.css';
	import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min';

	export let code: string;
	export let lang: string;

	const decodedCode = decodeURIComponent(code);

	let formatLang = lang === 'cadence' || undefined ? 'js' : lang;

	onMount(() => {
		Prism.highlightAll();
	});
</script>

<div class="code" data-prismjs-copy-timeout="1000">
	<div class="language-wrapper">{lang}</div>
	<pre class={`language-${formatLang} line-numbers copy-to-clipboard`}>
		<code class={`language-${formatLang}`} data-prismjs-copy="Click to copy code!">
			{decodedCode}
		</code> 
	</pre>
</div>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-night-owl.min.css"
		integrity="sha512-MXRiGOm1i9a1yooXJgIZhA+q5XHvP+iHXn0ardNqqdE3ixpQBvjR0NCkFTR0Jic6jmhhnpviB87P+tK3zuzuSg=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
</svelte:head>

<style lang="scss">
	.code {
		border-radius: var(--radius-1);
		border: 1px var(--clr-border-primary) solid;
		margin-bottom: var(--space-4);
		background: var(--clr-background-secondary);

		.language-wrapper {
			padding: var(--space-4);
			background-color: var(--clr-background-primary);
			border-top-left-radius: var(--radius-1);
			border-top-right-radius: var(--radius-1);
		}

		pre {
			padding: var(--space-6) var(--space-14);
			margin: var(--space-1);
		}

		code[class*='language-'],
		pre[class*='language-'] {
			color: var(--clr-text-main);
		}

		:not(pre) > code[class*='language-'],
		pre[class*='language-'] {
			background: var(--clr-background-secondary);
			border-bottom-left-radius: var(--radius-1);
			border-bottom-right-radius: var(--radius-1);
		}
	}

	// edit scrollbar styling
	::-webkit-scrollbar {
		height: 0.4rem;
		margin-inline: var(--space-2);
		&-thumb {
			background-color: var(--clr-surface-secondary);
		}
	}
</style>
