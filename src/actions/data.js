import { getData } from "./helpers/actionHelper";

export const loadingDataHasErrored = boolean => {
	return {
		type: 'LOADING_DATA_HAS_ERRORED',
		hasErrored: boolean,
	};
};

export const loadingAstrosFetchSuccess = astros => {
	return {
		type: 'LOADING_ASTROS_FETCH_SUCCESS',
		astros,
	};
};

export const loadingLocationFetchSuccess = location => {
	return {
		type: 'LOADING_LOCATION_FETCH_SUCCESS',
		location,
	};
};

export const getLocation = () => dispatch => {
	getData("http://api.open-notify.org/iss-now.json", loadingLocationFetchSuccess, dispatch);
};

export const getAstros = () => dispatch => {
	getData("http://api.open-notify.org/astros.json", loadingAstrosFetchSuccess, dispatch);
};
