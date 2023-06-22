<script lang="ts">
	import Icon from '@iconify/svelte';
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import { page } from '$app/stores';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import { navigating } from '$app/stores';

	let menuActive = false;
	let menuUl: HTMLUListElement | null = null;

	function ulClick(e: Event) {
		let event = e as PointerEvent;
		if (menuUl && event.offsetX > menuUl.offsetWidth) {
			menuActive = false;
		}
	}

	$: pathnames = $page.url.pathname.split('/').slice(1);
	$: {
		if ($navigating) {
			menuActive = false;
		}
	}
</script>

<header>
	<div class="container">
		<nav>
			<div>
				<a class="brand" href="/">{PUBLIC_APP_NAME}</a>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<ul class:active={menuActive} bind:this={menuUl} on:click={ulClick}>
					<li class:active={pathnames[0] === ''}>
						<a href="/">Home</a>
					</li>

					<li class:active={pathnames[0] === 'about'}>
						<a href="/about">About</a>
					</li>

					<li class:active={pathnames[0] === 'blog'}>
						<a href="/blog">Blog</a>
					</li>

					<li class:active={pathnames[0] === 'dynamic'}>
						<a href="/dynamic">Dynamic</a>
					</li>
				</ul>
			</div>
			<div>
				<ThemeSwitch />

				<button on:click={() => (menuActive = !menuActive)} class="menu-toggle">
					<Icon icon="dashicons:menu" />
				</button>
			</div>
		</nav>
	</div>
</header>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 4rem;
		padding: 1rem;
		background: #fff;
		-webkit-box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.6);
		box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.6);
		box-sizing: border-box;
		z-index: 1;

		nav {
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #212529;

			a {
				color: #212529;
			}

			ul {
				position: fixed;
				background: #fff;
				top: 0;
				left: -200px;
				bottom: 0;
				padding: 0;
				list-style-type: none;
				margin: 4rem 0;
				width: 200px;
				transition: left 0.3s ease-in-out;

				&.active {
					left: 0;

					&::before {
						content: '';
						position: fixed;
						top: 4rem;
						bottom: 4rem;
						left: 200px;
						right: 0;
					}
				}

				li {
					display: block;

					a {
						display: inline-block;
						padding: 8px;
					}

					&.active {
						background: #ddd;
					}

					&.active a {
						color: #6c757d;
					}
				}
			}

			@media screen and (min-width: 720px) {
				ul {
					display: inline;
					position: static;
					-webkit-box-shadow: none;
					box-shadow: none;
					padding: 0 2rem;

					&.active {
						display: inline;

						&::before {
							display: none;
						}
					}

					li {
						display: inline;
						padding: 0;

						&.active {
							background: inherit;
						}
					}
				}

				.menu-toggle {
					display: none;
				}
			}

			.menu-toggle {
				border: none;
				background: transparent;
				font-size: 24px;
				padding: 0;
				color: #212529;
			}
		}
	}

	:global(body[data-theme='dark']) {
		header {
			background: #21252b;

			a {
				color: #107794;
			}

			nav {
				color: #fff;

				ul {
					background: #21252b;

					li.active {
						background: #1b1f24;

						a {
							color: #8fd6e1;
						}
					}
				}

				.menu-toggle {
					color: #fff;
				}

				@media screen and (min-width: 720px) {
					ul li.active {
						&.active {
							background: inherit;
						}
					}
				}
			}
		}
	}
</style>
