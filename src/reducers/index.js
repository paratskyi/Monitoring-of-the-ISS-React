import { combineReducers } from 'redux';

import app from './app';
import appAmount from './appAmount';

export default combineReducers({
    app,
    appAmount
});
