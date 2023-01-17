const initalState = true;
const toggleSidebar = (state = initalState, action) => {
    if (action.type == "TOGGLE") {
        return !state
    }
    return state
}

export default toggleSidebar;