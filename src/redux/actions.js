import { enterChatroom, leaveChatroom } from "../services/users";

export function enterChatRequest(nickname, dispatch){
    enterChatroom(nickname).then(userObj => {
        dispatch(enterChat(userObj))
    });

    return {
        type: "ENTER_CHAT_REQUEST",
    }
}

function enterChat(userObj) {
    return {
        type: "ENTER_CHAT",
        user: userObj
    }
}

export function leaveChatRequest(userId, dispatch){
    leaveChatroom(userId).then(() => dispatch(leaveChat()));

    return {
        type: "LEAVE_CHAT_REQUEST"
    }
}

function leaveChat() {
    return {
        type: "LEAVE_CHAT"
    }
}