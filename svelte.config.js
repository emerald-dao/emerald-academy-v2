import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
			scss: {
				prependData: `@import './node_modules/@emerald-dao/design-system/styles/utils/mixins';`
			}
		}),
		sveltePreprocess(),
		mdsvex(mdsvexConfig)
	],

	kit: {
		adapter: adapter(),
		alias: {
			$atoms: 'src/lib/components/atoms/index.ts',
			$stores: 'src/lib/stores/',
			$flow: 'src/flow/'
		}
	}
};

export default config;
