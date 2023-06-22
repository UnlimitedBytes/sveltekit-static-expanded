function randomInt(min: number, max: number) {
	return Math.floor(Math.random() * (max - min)) + min;
}

export async function load() {
	return {
		randomInt: randomInt(1000000, 99999999)
	};
}
