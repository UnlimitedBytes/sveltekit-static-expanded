export const appName = import.meta.env.VITE_APP_NAME;

export const getTitle = (title: string) => {
	let response = import.meta.env.VITE_APP_TITLE;
	response = response.replaceAll('%appName%', appName);
	response = response.replaceAll('%title%', title);
	return response;
};
