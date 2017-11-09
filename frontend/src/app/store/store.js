import { createStore } from 'redux';
import { combineReducers } from 'redux';

import auth from './reducers/app/auth';

const store = createStore(combineReducers({
    authentication: auth
}));

export default store;