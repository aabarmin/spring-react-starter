const defaultState = {
    notification: "",
    showNotification: false
};

const NOTIFICATION_SHOW = "notification_show";
const NOTIFICATION_HIDE = "notification_hide";

export const notificationShow = (message) => {
    return (dispatch) => {
        dispatch({
            type: NOTIFICATION_SHOW,
            payload: message
        });
        setTimeout(() => {
            dispatch(notificationHide())
        }, 2000);
    };
};

export const notificationHide = () => {
    return {
        type: NOTIFICATION_HIDE
    }
};

const notifications = (state = defaultState, action) => {
    switch (action.type) {
        case NOTIFICATION_HIDE:
            return {
                ...state,
                showNotification: false,
                notification: ""
            };

        case NOTIFICATION_SHOW:
            return {
                ...state,
                showNotification: true,
                notification: action.payload
            };

        default:
            return state;
    }
};

export default notifications;