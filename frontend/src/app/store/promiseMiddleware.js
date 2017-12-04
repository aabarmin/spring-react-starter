import axios from 'axios';

import { AUTH_LOGIN_SHOW, AUTH_TOKEN } from "./reducers/app/auth";

// todo, move into configuration
const { REACT_APP_BACKEND_URL } = process.env;
axios.defaults.baseURL = REACT_APP_BACKEND_URL;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.interceptors.response.use(data => {
    return data;
}, error => {
    if (error.response && (error.response.status === 401 
    		|| error.response.status === 403)) {
        // process as a standard response
        return error;
    }
    return Promise.reject(error);
});
axios.interceptors.request.use(config => {
    if (!!localStorage.getItem(AUTH_TOKEN)) {
        config.withCredentials = true;
    }
    return config;
});

export default function promiseMiddleware({ dispatch, getState }) {
    return next => action => {
        // thunx
        if (typeof action === 'function') {
            return action(dispatch, getState);
        }
        // default action
        if (!action.promise) {
            return next(action);
        }
        // with a promise
        // extracting properties as local variables
        const { promise, types, afterSuccess, ...rest} = action;
        const [ REQUEST, SUCCESS, FAILURE ] = types;
        // running request action
        next({...rest, type: REQUEST});
        // creating onSuccess function
        const onSuccess = (data) => {
            if (data.response && data.response.status && (data.response.status === 401 
            		|| data.response.status === 403)) {
                next({
                    type: AUTH_LOGIN_SHOW,
                    target: data.config.url,
                    lastAction: action
                });
                return;
            }
            next({...rest, data, type: SUCCESS});
            if (afterSuccess) {
                // I'm not sure about it
                afterSuccess(dispatch, getState, data);
            }
        }
        const onError = (error) => {
            next({...rest, error, type: FAILURE});
        }
        // executing request
        return promise(axios)
            .then(onSuccess, onError)
            .catch(error => {
                debugger;
                console.error("Middleware error", error);
                onError(error);
            })
    }
}