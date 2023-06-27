<script>
    import { PUBLIC_APP_NAME } from '$env/static/public';
    import { getTitle } from '$lib/global-functions';
</script>

<svelte:head>
    <title>{getTitle('About')}</title>
    <meta name="description" content="Learn more about {PUBLIC_APP_NAME}" />
</svelte:head>

<div class="container">
    <p>Error: no content found.</p>
</div>
