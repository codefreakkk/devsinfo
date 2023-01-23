import {combineReducers} from "redux";
import toggleSidebar from "./sidebarReducer";
import isLoggedIn from "./loginReducer";

const rootReducers = combineReducers({
    toggleSidebar,
    isLoggedIn,
})

export default rootReducers;
