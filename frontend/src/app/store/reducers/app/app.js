import notifications from "./notifications";
import {combineReducers} from "redux";
import layout from "./layout";
import auth from "./auth";

const app = combineReducers({
    layout, notifications, auth
});

export default app;