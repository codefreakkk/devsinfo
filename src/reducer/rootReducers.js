import {combineReducers} from "redux";
import toggleSidebar from "./sidebarReducer";

const rootReducers = combineReducers({
    toggleSidebar,
})

export default rootReducers;
