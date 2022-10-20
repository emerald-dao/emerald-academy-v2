<script type="ts">
	import {achievements} from "$lib/stores/AchievementsPrueba"
	import Card from "$lib/components/atoms/Card.svelte"
	import { Section } from "@mateoroldos/svelte.bones";
	import { Container } from "@mateoroldos/svelte.bones";
</script>


<Section>
	<Container>
		<div class="in-a-row">
			{#each achievements as achievement}
			<Card>
				<h4>{achievement.title}</h4>
				<p>{achievement.description}</p>
			</Card>
			{/each}
		</div>
		
	</Container>
</Section>


<style>
	.in-a-row {
		display: flex;
		flex-direction: row;
		gap: 3rem;
		justify-content: center;
		text-align: center;
	}
</style>
