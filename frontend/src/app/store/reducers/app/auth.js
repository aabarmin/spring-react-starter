const ACTION_LOGIN = "login";
const ACTION_AUTH_STARTED = "auth_started";
const ACTION_AUTH_FINISHED = "auth_finished";

const defaultState = {
    isAuthenticated: false,
    inProgress: false
};

export function login(login, password) {
    return (dispatch) => {
    	dispatch(authStarted());
    	setTimeout(() => {
    		dispatch(authFinished())
    	}, 2000)
    }
}

function authStarted() {
	return {
		type: ACTION_AUTH_STARTED
	}
}

function authFinished() {
	return {
		type: ACTION_AUTH_FINISHED
	}
}

const auth = (state = defaultState, action) => {
    switch (action.type) {
    	case ACTION_AUTH_STARTED: 
    		return {
    			...state,
    			inProgress: true
    		};
    		
    	case ACTION_AUTH_FINISHED:
    		return {
    			...state,
    			inProgress: false
    		};
    
    	default:
            return state;
    }
}

export default auth;