export function enterChat(nickname) {
    return {
        type: "ENTER_CHAT",
        nickname: nickname,
        memberSince: new Date()
    }
}

export function leaveChat() {
    return {
        type: "LEAVE_CHAT"
    }
}