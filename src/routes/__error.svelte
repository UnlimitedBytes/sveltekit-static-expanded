<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error?.message}`
			}
		};
	}
</script>

<script type="ts">
	export let title: string;
</script>

<div class="container">
	<h1>{title}</h1>
</div>
