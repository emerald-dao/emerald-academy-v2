<script type="ts">
	export let resource: Resource;

	interface Resource {
		image: string;
		title: string;
		excerpt: string;
		link: string;
	}
</script>

<div class="card-primary">
	<a href={resource.link}>
		<div class="main-wrapper">
			<div class="image">
				<img src={resource.image} alt="" class="specific-image" />
			</div>
			<div>
				<h5>{resource.title}</h5>
				<p>{resource.excerpt}</p>
			</div>
		</div>
	</a>
</div>

<style type="scss">
	.main-wrapper {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
	.image {
		width: 100px;
		height: 100px;
		overflow: hidden;
		border-radius: 50%;
		margin: auto;
	}
	.specific-image {
		height: 100%;
	}
	h5 {
		margin: var(--space-2) 0 var(--space-2) 0;
	}
	a {
		text-decoration: none;
	}
	p {
		color: var(--clr-text-main);
	}
</style>
