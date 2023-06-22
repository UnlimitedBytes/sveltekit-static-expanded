import { PUBLIC_APP_NAME, PUBLIC_APP_TITLE } from '$env/static/public';

export const getTitle = (title: string) => {
	let response = PUBLIC_APP_TITLE;
	response = response.replaceAll('%appName%', PUBLIC_APP_NAME);
	response = response.replaceAll('%title%', title);
	return response;
};
