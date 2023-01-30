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
	<a href={resource.link} target="_blank">
		<div class="main-wrapper">
			<div class="image">
				<img src={resource.image} alt="" class="specific-image" />
			</div>
			<div class="data-wrapper">
				<h5>{resource.title}</h5>
				<p>{resource.excerpt}</p>
			</div>
		</div>
	</a>
</div>

<style type="scss">
	a {
		text-decoration: none;
	}

	.main-wrapper {
		display: grid;
		grid-template-columns: 1fr 2fr;

		.image {
			width: 80px;
			height: 80px;
			overflow: hidden;
			border-radius: 50%;
			margin: auto;

			@include mq(small) {
				width: 100px;
				height: 100px;
			}

			.specific-image {
				height: 100%;
			}
		}

		.data-wrapper {
			margin-left: var(--space-2);

			@include mq(small) {
				margin-left: 0;
			}

			h5 {
				margin: var(--space-2) 0 var(--space-2) 0;
			}

			p {
				color: var(--clr-text-main);
			}
		}
	}
</style>
