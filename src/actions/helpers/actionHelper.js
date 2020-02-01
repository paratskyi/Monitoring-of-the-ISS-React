import { loadingDataHasErrored } from "../data";

export const getData = (url, action, dispatch) => {

	fetch(url)
		.then(response => {
			if (!response.ok) throw Error(response.statusText);

			return response;

		})
		.then(response => response.json())
		.then(data => dispatch(action(data)))
		.catch(() => dispatch(loadingDataHasErrored(true)));
};