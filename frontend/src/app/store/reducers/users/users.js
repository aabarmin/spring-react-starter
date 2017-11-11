const initialState = {
    users: [],
    isLoading: false,
};

const ACTION_USERS_LOAD = "load_users";
const ACTION_USERS_LOADED = "loaded_users";
const ACTION_USERS_LOAD_FAILED = "load_failed";

export function loadUsers() {
    return {
        types: [ ACTION_USERS_LOAD, ACTION_USERS_LOADED, ACTION_USERS_LOAD_FAILED ],
        promise: (client) => {
            return client.get('/users/')
        }
    }
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_USERS_LOAD:
            return {
                ...state,
                isLoading: true
            };

        case ACTION_USERS_LOADED:
            return {
                ...state,
                isLoading: false
            };

        default:
            return state;
    }
}

export default users;