import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { getHeadings } from './src/lib/utilities/remarkPlugins/getHeadings.js';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},
	layout: 'src/routes/catalog/courses/[name]/[week]/[day]/components/CourseLayout.svelte',
	rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
	remarkPlugins: [getHeadings]
});

export default config;
