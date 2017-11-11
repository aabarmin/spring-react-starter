export const AUTH_LOGIN_SHOW = "auth_login";
export const AUTH_TOKEN = "auth_token";

const defaultState = {
    inProgress: false,
    isDialogVisible: false,
    loginException: "",
    lastAction: null
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
            const lastAction = state.authentication.lastAction;
            if (lastAction) {
                dispatch(lastAction);
            }
        }
    }
}

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
    
    	default:
            return state;
    }
};

export default auth;