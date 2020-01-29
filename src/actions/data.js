export const loadingDataHasErrored = boolean => {
	return {
		type: 'LOADING_DATA_HAS_ERRORED',
		hasErrored: boolean,
	}
}

export const dataIsLoading = boolean => {
	return {
		type: 'DATA_IS_LOADING',
		isLoading: boolean,
	}
}

export const loadingAstrosFetchSuccess = astros => {
	return {
		type: 'LOADING_ASTROS_FETCH_SUCCESS',
		astros,
	}
}

export const loadingLocationFetchSuccess = location => {
	return {
		type: 'LOADING_LOCATION_FETCH_SUCCESS',
		location,
	}
}

const getData = (url, action, dispatch) => {
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


export const getLocation = () => dispatch => {
	getData("http://api.open-notify.org/iss-now.json", loadingLocationFetchSuccess, dispatch)
}

export const getAstros = () => dispatch => {
	getData("http://api.open-notify.org/astros.json", loadingAstrosFetchSuccess, dispatch)
}
