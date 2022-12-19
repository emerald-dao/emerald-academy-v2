<script type="ts">
	import { Button, Label } from '@emerald-dao/component-library';
	export let template: Template;

	interface Template {
		title: string;
		excerpt: string;
		author: string;
		audited: boolean;
	}
</script>

<div class="card-primary">
	<div>
		<h5>{template.title}</h5>
		<p>{template.excerpt}</p>
		<div>
			<Label>{template.author}</Label>
			<Label>{template.audited}</Label>
			<Button>Clone</Button>
		</div>
	</div>
</div>

<style class="scss">
</style>
