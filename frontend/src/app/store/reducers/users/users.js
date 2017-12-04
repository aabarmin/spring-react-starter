import {notificationShow} from "../app/notifications";

const initialState = {
    users: [],
    pagesTotal: 0,
    currentUser: {},
    isLoading: false,
    
    usersTotal: 0,
    usersDrafts: 0
};

const USERS_LOAD = "load_users";
const USERS_LOADED = "loaded_users";
const USERS_LOAD_ERROR = "load_failed";

export function usersLoad(page, showDrafts) {
    return {
        types: [ USERS_LOAD, USERS_LOADED, USERS_LOAD_ERROR ],
        promise: (client) => {
            return client.get('/users/', {
            	params: {
            		page: page,
            		showDrafts: showDrafts
            	}
            })
        }
    }
}

const USER_LOAD = "user_load";
const USER_LOADED = "user_loaded";
const USER_LOAD_ERROR = "user_load_error";

export const userLoad = (id) => {
    return {
        types: [ USER_LOAD, USER_LOADED, USER_LOAD_ERROR ],
        promise: (client) => {
            return client.get('/users/' + id)
        }
    }
};

const USER_SAVE = "user_save";
const USER_SAVED = "user_saved";
const USER_SAVE_ERROR = "user_save_error";

export function userSave(data) {
    return {
        types: [ USER_SAVE, USER_SAVED, USER_SAVE_ERROR ],
        promise: (client) => client.post('/users/', data),
        afterSuccess: (dispatch) => {
            dispatch(notificationShow("User saved"));
        }
    }
}

const USER_DELETE = "user_delete";
const USER_DELETED = "user_deleted";
const USER_DELETE_ERROR = "user_delete_error";

export function userDelete(id) {
    return {
        types: [USER_DELETE, USER_DELETED, USER_DELETE_ERROR],
        promise: (client) => client.delete('/users/' + id),
        afterSuccess: (dispatch) => dispatch(notificationShow("User deleted"))
    }
}

const USER_STAT_LOAD = "user_stat_load";
const USER_STAT_LOADED = "user_stat_loaded";
const USER_STAT_LOAD_FAILED = "user_stat_load_error";

export const userStatisticsLoad = () => ({
	types: [ USER_STAT_LOAD, USER_STAT_LOADED, USER_STAT_LOAD_FAILED ],
	promise: (client) => client.get('/users/stats')
})

const users = (state = initialState, action) => {
    switch (action.type) {
        // --- load users
        case USERS_LOAD:
            return {
                ...state,
                isLoading: true,
                users: []
            };

        case USERS_LOADED:
            return {
                ...state,
                isLoading: false,
                users: action.data.data.items,
                pagesTotal: action.data.data.totalPages
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
                currentUser: savedUser,
                users: [...state.users].map(user => {
                    if (user.id === savedUser.id) {
                        return Object.assign(user, savedUser);
                    }
                    return user;
                })
            };

        // --- load user
        case USER_LOAD:
            return {
                ...state,
                isLoading: true,
                currentUser: {}
            };

        case USER_LOADED:
            return {
                ...state,
                isLoading: false,
                currentUser: action.data.data
            };

        // --- delete user
        case USER_DELETE:
            return {
                ...state,
                isLoading: true
            };

        case USER_DELETED:
            return {
                ...state,
                isLoading: false
            }
            
        // --- load statistics
        case USER_STAT_LOAD:
        	return {
        		...state,
        		isLoading: true
        	}
        	
        case USER_STAT_LOADED:
        	return {
        		...state,
        		isLoading: false,
        	    usersTotal: action.data.data.usersTotal,
        	    usersDrafts: action.data.data.usersDrafts
        	}

        default:
            return state;
    }
};

export default users;