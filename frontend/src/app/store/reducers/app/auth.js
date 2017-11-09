const ACTION_LOGIN = "login";

const defaultState = {
    isAuthenticated: false
};

export function login(login, password) {
    return {
        type: ACTION_LOGIN
    }
}

const auth = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default auth;