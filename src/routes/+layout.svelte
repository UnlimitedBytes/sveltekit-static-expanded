<script lang="ts">
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import { browser } from '$app/environment';
	import { darkMode } from '$lib/global-store';

	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import 'nprogress/nprogress.css';
	import '$lib/theme.scss';

	NProgress.configure({
		minimum: 0.16
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}

		if (!$navigating) {
			NProgress.done();
		}
	}

	$: {
		if (browser) {
			const body = document.querySelector('body');
			if (body) {
				body.dataset.theme = $darkMode ? 'dark' : 'light';
			}
		}
	}
</script>

<Nav />

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
	main {
		overflow: auto;
		max-height: calc(100vh - 8rem);
	}
</style>
