import React, { Component } from "react";

const NICKNAMES = ["Speedy Gonzales", "Bilbo Beutlin", "Gollum", "Uncle Sam", "William Wallace", "Robert the Bruce"];

export default class NicknameSelector extends Component {
    constructor() {
        super();

        this.state = {
            nickname: null,
        };

        this.onNicknameSubmit = this.onNicknameSubmit.bind(this);
    }

    onNicknameSubmit(event) {
        event.preventDefault();

        this.setState({nickname: NICKNAMES[Math.floor(Math.random()*(NICKNAMES.length - 1))]});
    }

    render() {
        const { nickname } = this.state;
        return nickname === null ?
            <form onSubmit={this.onNicknameSubmit}>
                <button type="submit" onClick={this.onNicknameSubmit}>Enter Chat</button>
            </form> :
            "Your Nickname: " + nickname
    }
}