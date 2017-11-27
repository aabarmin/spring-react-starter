export const AUTH_LOGIN_SHOW = "auth_login";
export const AUTH_TOKEN = "auth_token";

const defaultState = {
    inProgress: false,
    isDialogVisible: false,
    loginException: "",
    lastAction: null,

    currentUser: {},
    currentUserLoaded: false
};

const AUTH_REQUEST_SEND = "auth_request_send";
const AUTH_REQUEST_OK = "auth_request_ok";
const AUTH_REQUEST_ERROR = "auth_request_error";

export function authenticate(username, password) {
    return {
        types: [ AUTH_REQUEST_SEND, AUTH_REQUEST_OK, AUTH_REQUEST_ERROR ],
        promise: (client) => {
            var params = new URLSearchParams();
            params.append('username', username);
            params.append('password', password);
            return client.post("/login", params);
        },
        afterSuccess: (dispatch, getState, response) => {
            // dispatching last action
            const state = getState();
            const lastAction = state.app.auth.lastAction;
            if (lastAction) {
                dispatch(lastAction);
            }
        }
    }
}

const CURRENT_USER_LOAD = "current_user_load";
const CURRENT_USER_LOADED = "current_user_loaded";
const CURRENT_USER_LOAD_FAIL = "current_user_load_failed";

export const currentUserLoad = () => {
    return {
        types: [ CURRENT_USER_LOAD, CURRENT_USER_LOADED, CURRENT_USER_LOAD_FAIL ],
        promise: (client) => client.get('/users/current')
    }
};

const CURRENT_USER_LOGOUT = "current_user_logout";
const CURRENT_USER_LOGGED_OUT = "current_user_logged_out";
const CURRENT_USER_LOGOUT_FAIL = "current_user_logout_failed";

export const currentUserLogout = () => {
    return {
        types: [ CURRENT_USER_LOGOUT, CURRENT_USER_LOGGED_OUT, CURRENT_USER_LOGOUT_FAIL ],
        promise: (client) => client.get('/users/logout')
    }
};

const auth = (state = defaultState, action) => {
    switch (action.type) {
        case AUTH_LOGIN_SHOW:
            localStorage.removeItem(AUTH_TOKEN);
			return {
                ...state,
                loginException: "",
                isDialogVisible: true,
                lastAction: action.lastAction
            };

        case AUTH_REQUEST_SEND:
            return {
                ...state,
                inProgress: true
            };

        case AUTH_REQUEST_OK:
            localStorage.setItem(AUTH_TOKEN, AUTH_TOKEN);
            document.cookie = "JSESSIONID=" + action.data.headers.login_token;
            return {
                ...state,
                loginException: "",
                isDialogVisible: false,
                inProgress: false
            };

        case AUTH_REQUEST_ERROR:
            localStorage.removeItem(AUTH_TOKEN);
            return {
                ...state,
                isDialogVisible: true,
                loginException: action.error.message,
                inProgress: false
            };

        // --- get current user
        case CURRENT_USER_LOAD:
            return {
                ...state,
                currentUser: {},
                currentUserLoaded: false
            };

        case CURRENT_USER_LOADED:
            return {
                ...state,
                currentUser: action.data.data,
                currentUserLoaded: true
            };

        // --- logout
        case CURRENT_USER_LOGOUT:
            return state;

        case CURRENT_USER_LOGGED_OUT:
            return {
                ...state,
                currentUser: {},
                currentUserLoaded: false
            };
    
    	default:
            return state;
    }
};

export default auth;