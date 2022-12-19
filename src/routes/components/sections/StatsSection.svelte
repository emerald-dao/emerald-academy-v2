<section>
	<div>
		<div class="main-wrapper">
			<div>
				<h4 class="join">Join on <br />something big</h4>
			</div>
			<div class="first">
				<h4>50m</h4>
			</div>
			<div class="second">
				<h4>190m</h4>
			</div>
			<div class="third">
				<h4>5.44</h4>
			</div>
		</div>
	</div>
</section>

<style type="scss">
	.main-wrapper {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		justify-content: center;
		text-align: center;
	}
	p {
		color: var(--clr-heading-main);
		padding-right: var(--space-20);
		--font-weight: var(--font-weight-medium);
	}
	.join {
		--font-weight: var(--font-weight-normal);
		text-align: left;
		margin-right: var(--space-15);
	}
	.first,
	.second,
	.third {
		margin-right: var(--space-15);
	}
</style>
