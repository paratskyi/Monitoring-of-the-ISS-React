export const getLocationAction = (callback) => dispatch => {
    fetch("http://api.open-notify.org/iss-now.json", {
		method:'GET'
			}).then((response) =>
		{
			return response.json()
		}).then((d) =>
		{
            console.log(d);
			dispatch({type:'SET_LOCATION', data:d});
			callback ? callback() : '';
		});
}

export const getAstrosAction = (callback) => dispatch => {
    fetch("http://api.open-notify.org/astros.json", {
		method:'GET'
			}).then((response) =>
		{
			return response.json()
		}).then((d) =>
		{
            console.log(d);
			dispatch({type:'SET_ASTROS', data:d});
			callback ? callback() : '';
		});
}