const initalState = true;
const toggleSidebar = (state = initalState, action) => {
    if (action.type == "TOGGLE") {
        return !state
    }
    if (action.type == "CLOSE")
        return false;
        
    return state
}

export default toggleSidebar;