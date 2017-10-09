let nextUserId = 0;

const currentUser = (state = null, action) => {
    switch (action.type) {
        case "ENTER_CHAT":
            return {
                id: nextUserId++,
                nickname: action.nickname,
                memberSince: action.memberSince
            };
        case "LEAVE_CHAT":
            return null;
        default:
            return state
    }
};

export default currentUser;