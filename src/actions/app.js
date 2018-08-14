export const getProductsAction = (callback) => dispatch => {
    fetch("http://api.open-notify.org/iss-now.json", {
		method:'GET'
			}).then((response) =>
		{
			return response.json()
		}).then((d) =>
		{
            console.log(d);
			dispatch({type:'SET_PRODUCTS', data:d});
			callback ? callback() : '';
		});
}