<script lang="ts">
	import Icon from '@iconify/svelte';
	import { darkMode } from '$lib/global-store';
</script>

<button
	on:click={() => ($darkMode = !$darkMode)}
	title="Change theme to {$darkMode ? 'light' : 'dark'} mode"
>
	<Icon icon={$darkMode ? 'ri:sun-fill' : 'ri:moon-fill'} style="font-size: 24px" />
</button>

<style lang="scss">
	button {
		border: none;
		background: transparent;
		color: inherit;
		padding: 0 1rem;

		&:active,
		&:focus,
		&:hover {
			background: transparent;
			color: inherit;
		}
	}
</style>
