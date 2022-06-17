function randomInt(min: Number, max: number) {
	return Math.floor(Math.random() * (max - min)) + min;
}

/** @type {import('./__types/dynamic').RequestHandler} */
export async function get() {
	return {
		body: {
			randomInt: randomInt(1000000, 99999999)
		}
	};
}
