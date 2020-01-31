import { combineReducers } from 'redux';

import { astros, location, dataHasErrored } from './data';

export default combineReducers({
    astros,
    location,
    dataHasErrored
});
