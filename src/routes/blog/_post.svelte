<script>
	/* 
        INFO: Currently mdsvex doesn't provide typescript in it's layouts!
        ref: https://github.com/pngwn/MDsveX/issues/116#issuecomment-862990150
    */
	import { getTitle } from '$lib/global-functions';

	/** @type {string} */
	export let title;

	/** @type {string} */
	export let description;
</script>

<svelte:head>
	<title>{getTitle(title)}</title>
	<meta name="description" content={description} />
</svelte:head>

<h1>{title}</h1>

<slot />
