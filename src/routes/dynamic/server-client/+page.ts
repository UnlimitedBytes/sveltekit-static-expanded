export async function load() {
	const joke = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single').then((resp) =>
		resp.json()
	);

	return {
		hydratedContent: joke ?? { error: true }
	};
}
