const isLoggedIn = (state = false, action) => {
    if (action.type == "CHECKLOGIN") {
        state = true;
        return state;
    }
    state = false;
    return state;
}

export default isLoggedIn;