import { enterChatroom, leaveChatroom } from "../services/users";

export function enterChatRequest(nickname) {
    return dispatch => {
        dispatch({
            type: "ENTER_CHAT_REQUEST"
        });

        enterChatroom(nickname).then(userObj => {
            dispatch(enterChat(userObj))
        });
    };
}

function enterChat(userObj) {
    return {
        type: "ENTER_CHAT",
        user: userObj
    }
}

export function leaveChatRequest(userId){
    return dispatch => {
        dispatch({
            type: "LEAVE_CHAT_REQUEST"
        });

        leaveChatroom(userId).then(() => dispatch(leaveChat()));
    };
}

function leaveChat() {
    return {
        type: "LEAVE_CHAT"
    }
}