import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { getHeadings } from './src/lib/utilities/remarkPlugins/getHeadings.js';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],
	smartypants: {
		dashes: 'oldschool'
	},
	layout: {
		_: 'src/lib/components/mdsvex/CourseLayout.svelte',
		examples: 'src/lib/components/mdsvex/ExamplesLayout.svelte'
	},
	rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
	remarkPlugins: [getHeadings],
	highlight: {
		highlighter: (code, lang) => {
			return `<Components.block code={\`${escape(code)}\`} lang={\`${lang}\`} />`;
		}
	}
});

export default config;
