import { combineReducers } from 'redux';

import { astros, location, dataIsLoading, dataHasErrored } from './data';

export default combineReducers({
    astros,
    location,
    dataIsLoading,
    dataHasErrored
});
