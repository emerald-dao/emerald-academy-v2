<script lang="ts">
	export let currencies: string[];
	export let value: string;
</script>

<div class="radio-tabs" id="currencies">
	{#each currencies as currency}
		<label>
			<span>{`$${currency}`}</span>
			<input type="radio" id={currency} name="currency" value={currency} bind:group={value} />
		</label>
	{/each}
</div>
