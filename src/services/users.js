import User from "../models/user";

const USERS_URL = "/api/users";

export function enterChatroom(newNickname) {
    return fetch(USERS_URL, {
        method: "POST",
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify({nickname: newNickname})
    }).
        then(response => response.json()).
        then(jsonObject => User.fromJson(jsonObject));
}

export function getUserProfile(userId) {
    return fetch(USERS_URL + "/" + userId, {
        method: "GET"
    })
        .then(response => response.json())
        .then(userObject => User.fromJson(userObject))
}


export function leaveChatroom(userId) {
    return fetch(USERS_URL + "/" + userId, {
        method: "DELETE"
    });
}

export function getUserList() {
    return fetch(USERS_URL, {
        method: "GET"
    }).
        then(response => response.json()).
        then(usersObjArray => usersObjArray.map(userObj => User.fromJson(userObj)))
}