<script type="ts">
	import Prism from 'prismjs';
	import { onMount } from 'svelte';
	import 'prismjs/plugins/toolbar/prism-toolbar.css';
	import 'prismjs/plugins/toolbar/prism-toolbar';
	import 'prismjs/plugins/line-numbers/prism-line-numbers';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
	import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
	import 'prismjs/components/prism-swift';

	export let codeBlockTitle: string;
	export let codeStyle: string;
	export let code: string;

	if (codeStyle === 'cadence') {
		codeStyle = 'swift';
	}

	onMount(() => {
		Prism.highlightAll();
	});
</script>

<div class="code" data-prismjs-copy-timeout="1000">
	<div class="language-wrapper">{codeBlockTitle}</div>
	<pre class={`language-${codeStyle} line-numbers copy-to-clipboard`}>
		<code class={`language-${codeStyle}`} data-prismjs-copy="Click to copy code!">
			{@html Prism.highlight(code, Prism.languages[codeStyle])}
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

<style>
	.language-wrapper {
		padding: var(--space-4);
		border-right: 1px var(--clr-border-primary) solid;
		border-top: 1px var(--clr-border-primary) solid;
		border-left: 1px var(--clr-border-primary) solid;
		border-top-right-radius: var(--radius-2);
		border-top-left-radius: var(--radius-2);
	}

	pre {
		border-right: 1px var(--clr-border-primary) solid;
		border-bottom: 1px var(--clr-border-primary) solid;
		border-left: 1px var(--clr-border-primary) solid;
		border-bottom-right-radius: var(--radius-2);
		border-bottom-left-radius: var(--radius-2);
		padding: 0;
		margin: 0;
	}

	code[class*='language-'],
	pre[class*='language-'] {
		color: var(--clr-text-main);
	}

	:not(pre) > code[class*='language-'],
	pre[class*='language-'] {
		background: var(--clr-surface-primary);
	}
</style>
