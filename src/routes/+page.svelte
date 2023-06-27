<script type="ts">
    import { PUBLIC_APP_NAME } from '$env/static/public';
    import { getTitle } from '$lib/global-functions';
</script>

<svelte:head>
    <title>{getTitle('Home')}</title>
    <meta name="description" content="Landing page of {PUBLIC_APP_NAME}" />
</svelte:head>

<div class="container">
    <div class="content">
        <img src="/images/logo.webp" alt="UnlimitedBytes Logo" />
        <h1>This project is still in active development.</h1>
        <p>
            I'm currently still actively developing and optimizing this webapp.
            <br />
            It's just an early pilot remember this while checking it out.
        </p>
        <p>This webapp is also full mobile compatible, try it out!</p>
    </div>
</div>

<style style="scss">
    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        padding-top: 3rem;
    }
</style>
