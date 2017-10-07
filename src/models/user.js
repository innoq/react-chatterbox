export default class User {
    constructor(id, nickname) {
        this.id = id;
        this.nickname = nickname;
    }

    static fromJson(userObject) {
        const { id, nickname } = userObject;
        return new this(id, nickname);
    }
}