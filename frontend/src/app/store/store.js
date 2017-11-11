import { createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from './promiseMiddleware';

import auth from './reducers/app/auth';
import users from './reducers/users/users';

const rootReducer = combineReducers({
    authentication: auth,
    users: users
});

const initialState = {};

const middleware = applyMiddleware(
    thunkMiddleware,
    promiseMiddleware
);

const store = createStore(
    rootReducer,
    initialState,
    middleware
);

export default store;