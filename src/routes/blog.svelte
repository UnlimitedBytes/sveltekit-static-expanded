<script type="ts" context="module">
	import { appName, getTitle } from '$lib/global-functions';

	export type Post = {
		meta: {
			title: string;
			description: string;
		};
		path: string;
	};
</script>

<script type="ts">
	import Icon from '@iconify/svelte';
	export let posts: Post[];
</script>

<svelte:head>
	<title>{getTitle('Blog')}</title>
	<meta name="description" content="Blog of {appName}" />
</svelte:head>

<div class="container">
	<h1>Our Blog</h1>
	<ul class="posts">
		{#each posts as post}
			<li class="post">
				<h3><a href={post.path}>{post.meta.title}</a></h3>
				<p>{post.meta.description}</p>
				<p>
					<a class="go" href={post.path}>
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
