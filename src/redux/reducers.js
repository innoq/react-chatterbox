let nextUserId = 0;

const chatStateReducers = (state = {}, action) => {
    switch (action.type) {
        case "ENTER_CHAT":
            return Object.assign({}, state, {
                currentUser: {
                    id: nextUserId++,
                    nickname: action.nickname,
                    memberSince: action.memberSince
                }
            });
        case "LEAVE_CHAT":
            return Object.assign({}, state, {
                currentUser: null
            });
        default:
            return state
    }
};

export default chatStateReducers;