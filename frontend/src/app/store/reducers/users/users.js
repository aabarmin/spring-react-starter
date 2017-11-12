const initialState = {
    users: [],
    isLoading: false
};

const ACTION_USERS_LOAD = "load_users";
const ACTION_USERS_LOADED = "loaded_users";
const ACTION_USERS_LOAD_FAILED = "load_failed";

export function usersLoad() {
    return {
        types: [ ACTION_USERS_LOAD, ACTION_USERS_LOADED, ACTION_USERS_LOAD_FAILED ],
        promise: (client) => {
            return client.get('/users/')
        }
    }
}

const USER_SWITCH_TO_EDIT = "user_switch_to_edit";

export function userSwitchToEdit(id) {
    return {
        type: USER_SWITCH_TO_EDIT,
        id: id
    }
}

const USER_SWITCH_TO_READ = "user_switch_to_read";

export function userSwitchToRead(id) {
    return {
        type: USER_SWITCH_TO_READ,
        id: id
    };
}

const USER_SAVE = "user_save";
const USER_SAVED = "user_saved";
const USER_SAVE_ERROR = "user_save_error";

export function userSave(data) {
    return {
        types: [ USER_SAVE, USER_SAVED, USER_SAVE_ERROR ],
        promise: (client) => client.post('/users/', data),
        afterSuccess: dispatch => {
            dispatch(userSwitchToRead(data.id))
        }
    }
}

const USER_CREATE = "user_create";
const USER_CREATED = "user_created";
const USER_CREATE_ERROR = "user_create_error";

export function userCreate() {
    return {
        types: [ USER_CREATE, USER_CREATED, USER_CREATE_ERROR ],
        promise: (client) => client.get('/users/new/')
    }
}

const users = (state = initialState, action) => {
    switch (action.type) {
        // --- load users
        case ACTION_USERS_LOAD:
            return {
                ...state,
                isLoading: true,
                users: []
            };

        case ACTION_USERS_LOADED:
            const users =  action.data.data;
            // loaded users are not editable yet
            users.forEach(user => user.isEditable = false);
            return {
                ...state,
                isLoading: false,
                users: users
            };

        // --- save user
        case USER_SAVE:
            return {
                ...state,
                isLoading: true
            };

        case USER_SAVED:
            const savedUser = action.data.data;
            return {
                ...state,
                isLoading: false,
                users: [...state.users].map(user => {
                    if (user.id === savedUser.id) {
                        return Object.assign(user, savedUser);
                    }
                    return user;
                })
            };

        // --- create user
        case USER_CREATE:
            return {
                ...state,
                isLoading: true
            };

        case USER_CREATED:
            const newUser = action.data.data;
            newUser.isEditable = true;
            return {
                ...state,
                isLoading: false,
                users: [newUser].concat(state.users)
            };

        // --- switch user to edit and back again
        case USER_SWITCH_TO_EDIT:
            const usersForUpdate = [...state.users];
            usersForUpdate.forEach(user => {
                if (user.id === action.id) {
                    user.isEditable = true;
                }
            });
            return {
                ...state,
                users: usersForUpdate
            };

        case USER_SWITCH_TO_READ:
            const usersForUpdateToRead = [...state.users];
            usersForUpdateToRead.forEach(user => {
                if (user.id === action.id) {
                    user.isEditable = false;
                }
            });
            return {
                ...state,
                users: usersForUpdateToRead
            };

        default:
            return state;
    }
};

export default users;