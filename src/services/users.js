const USERS_URL = "/api/users";

export function enterChatroom(newNickname) {
    return fetch(USERS_URL, {
        method: "POST",
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify({nickname: newNickname})
    }).
        then(response => response.json());
}

export function leaveChatroom(userId) {
    return fetch(USERS_URL + "/" + userId, {
        method: "DELETE"
    });
}