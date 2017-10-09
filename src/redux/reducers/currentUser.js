const initialState = {
    entering: false,
    leaving: false,
    user: null
};

const currentUser = (state = initialState, action) => {
    switch (action.type) {
        case "ENTER_CHAT_REQUEST":
            return Object.assign({}, state, {
                entering: true
            });
        case "ENTER_CHAT":
            return Object.assign({}, state, {
                entering: false,
                user: action.user
            });
        case "LEAVE_CHAT_REQUEST":
            return Object.assign({}, state, {
                leaving: true
            });
        case "LEAVE_CHAT":
            return Object.assign({}, state, initialState);
        default:
            return state
    }
};

export default currentUser;