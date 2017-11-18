import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from './promiseMiddleware';
import users from './reducers/users/users';
import app from "./reducers/app/app";

const rootReducer = combineReducers({
    users, app
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