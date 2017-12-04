const defaultState = {
    sidebarOpen: false
};

const APP_SIDEBAR_OPEN = "app_sidebar_open";
const APP_SIDEBAR_CLOSE = "app_sidebar_close";

export function sidebarOpen() {
    return {
        type: APP_SIDEBAR_OPEN
    };
}

export function sidebarClose() {
    return {
        type: APP_SIDEBAR_CLOSE
    }
}

const layout = (state = defaultState, action) => {
    switch (action.type) {
        case APP_SIDEBAR_OPEN:
            return {
                ...state,
                sidebarOpen: true
            };

        case APP_SIDEBAR_CLOSE:
            return {
                ...state,
                sidebarOpen: false
            };

        default:
            return state;
    }
};

export default layout;