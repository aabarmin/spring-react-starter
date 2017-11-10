import { createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { combineReducers, applyMiddleware } from 'redux';

import auth from './reducers/app/auth';

const store = createStore(combineReducers({
    authentication: auth
}), applyMiddleware(
		thunkMiddleware
		));

export default store;