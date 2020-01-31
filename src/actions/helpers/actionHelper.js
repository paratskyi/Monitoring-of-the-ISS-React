import { dataIsLoading, loadingDataHasErrored } from "../data";

export const getData = (url, action, dispatch) => {
	dispatch(dataIsLoading(true));

	fetch(url)
		.then(response => {
			if (!response.ok) throw Error(response.statusText);

			dispatch(dataIsLoading(false));
			return response;

		})
		.then(response => response.json())
		.then(data => dispatch(action(data)))
		.catch(() => dispatch(loadingDataHasErrored(true)));
}