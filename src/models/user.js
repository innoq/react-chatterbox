export default class User {
    constructor(id, nickname, memberSince, color) {
        this.id = id;
        this.nickname = nickname;
        this.memberSince = memberSince;
        this.color = color;
    }

    static fromJson(userObject) {
        const { id, nickname, memberSince, color } = userObject;
        return new this(id, nickname, new Date(memberSince), color);
    }
}