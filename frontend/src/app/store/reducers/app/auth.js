export const AUTH_LOGIN_SHOW = "auth_login";
export const AUTH_TOKEN = "auth_token";

const defaultState = {
    inProgress: false,
    isDialogVisible: false,
    basicAuthenticationUrl: ""
};

const AUTH_REQUEST_SEND = "auth_request_semd";
const AUTH_REQUEST_OK = "auth_request_ok";
const AUTH_REQUEST_ERROR = "auth_request_error";

export function authenticate(username, password, target) {
    return {
        types: [ AUTH_REQUEST_SEND, AUTH_REQUEST_OK, AUTH_REQUEST_ERROR ],
        promise: (client) => {
            return client.get(target, {
                withCredentials: true,
                auth: {
                    username: username,
                    password: password
                }
            })
        }
    }
}

const auth = (state = defaultState, action) => {
    switch (action.type) {
        case AUTH_LOGIN_SHOW:
            localStorage.removeItem(AUTH_TOKEN);
			return {
                ...state,
                basicAuthenticationUrl: action.target,
                isDialogVisible: true
            };

        case AUTH_REQUEST_OK:
            localStorage.setItem(AUTH_TOKEN, action.data.config.headers.Authorization);
            return {
                ...state,
                basicAuthenticationUrl: "",
                isDialogVisible: false
            };

        case AUTH_REQUEST_ERROR:
            debugger;
            break;
    
    	default:
            return state;
    }
};

export default auth;