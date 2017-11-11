const initialState = {
    activeSection: 1,


    users: [],
    isLoading: false
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

const SECTION_SELECT = "users_section_select";

export function sectionSelect(sectionKey) {
    return {
        type: SECTION_SELECT,
        section: sectionKey
    }
};

const users = (state = initialState, action) => {
    switch (action.type) {
        // --- sidebar sections
        case SECTION_SELECT:
            return {
                ...state,
                activeSection: action.section
            };

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
};

export default users;