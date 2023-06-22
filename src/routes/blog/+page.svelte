<script lang="ts" context="module">
	export type Post = {
		meta: {
			title: string;
			description: string;
		};
		path: string;
	};
</script>

<script type="ts">
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import { getTitle } from '$lib/global-functions';
	import Icon from '@iconify/svelte';
	export let data;
	const { posts } = data;
</script>

<svelte:head>
	<title>{getTitle('Blog')}</title>
	<meta name="description" content="Blog of {PUBLIC_APP_NAME}" />
</svelte:head>

<div class="container">
	<h1>Our Blog</h1>
	<ul class="posts">
		{#each posts as post}
			{@const url = '/blog' + post.path}

			<li class="post">
				<h3><a href={url}>{post.meta.title}</a></h3>
				<p>{post.meta.description}</p>
				<p>
					<a class="go" href={url}>
						<span>Check it out</span>
						<Icon icon="eva:arrow-forward-fill" style="margin-left: 0.3rem" />
					</a>
				</p>
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		list-style: none;
	}

	ul li {
		padding: 0.5rem 0;
	}

	.go {
		font-size: 1rem;
		display: flex;
		align-items: center;
	}
</style>
