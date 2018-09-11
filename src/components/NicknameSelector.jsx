import React, { Component } from "react";
import moment from "moment";

const NICKNAMES = ["Speedy Gonzales", "Bilbo Beutlin", "Gollum", "Uncle Sam", "William Wallace", "Robert the Bruce"];

export default class NicknameSelector extends Component {
    constructor() {
        super();

        this.state = {
            nickname: null,
            enteredDuration: 0
        };

        this.onNicknameSubmit = this.onNicknameSubmit.bind(this);
    }

    onNicknameSubmit(event) {
        event.preventDefault();

        this.setState({
            nickname: NICKNAMES[Math.floor(Math.random()*(NICKNAMES.length - 1))],
            enteredDuration: moment().fromNow()
        });
        this.enteredTime = Date.now();
    }

    updateMemberTime() {
        if(this.state.nickname) {
            this.setState({
                enteredDuration: moment(this.enteredTime).fromNow()
            });
        }
    }

    componentDidMount() {
        this.memberTimer = setInterval(() => this.updateMemberTime(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.memberTimer);
    }

    render() {
        const { nickname, enteredDuration } = this.state;
        return nickname === null ?
            <form onSubmit={this.onNicknameSubmit}>
                <button type="submit" onClick={this.onNicknameSubmit}>Enter Chat</button>
            </form> :
            `Your Nickname: ${nickname} (entered ${enteredDuration})`
    }
}