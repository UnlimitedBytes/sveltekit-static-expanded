<script lang="ts">
	export let type = 'article';
	export let src: string;

	let active = false;
</script>

<div class="listen">
	{#if active}
		<audio controls autoplay {src} />
	{:else}
		<button on:click={() => (active = true)}>Listen to {type}</button>
	{/if}
</div>

<style>
	.listen {
		width: 100%;
		display: flex;
		justify-content: end;
		margin-bottom: 1rem;
	}
</style>
