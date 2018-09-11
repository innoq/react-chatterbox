import React, { Component } from "react";
import moment from "moment";

export default class NicknameSelector extends Component {
    constructor() {
        super();

        this.state = {
            nickname: null,
            enteredDuration: 0,
            newNickname: ""
        };

        this.onNicknameSubmit = this.onNicknameSubmit.bind(this);
        this.updateNewNickname = this.updateNewNickname.bind(this);
    }

    onNicknameSubmit(event) {
        event.preventDefault();

        this.setState({
            nickname: this.state.newNickname,
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

    updateNewNickname(event){
        this.setState({
            newNickname: event.target.value
        })
    }

    componentDidMount() {
        this.memberTimer = setInterval(() => this.updateMemberTime(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.memberTimer);
    }

    render() {
        const { nickname, enteredDuration, newNickname } = this.state;

        return nickname === null ?
            <form onSubmit={this.onNicknameSubmit}>
                <label htmlFor="nickname">Nickname: </label>
                <input type="text" id="nickname" value={newNickname} onChange={this.updateNewNickname} />
                <button type="submit" onClick={this.onNicknameSubmit}>Enter Chat</button>
            </form> :
            `Your Nickname: ${nickname} (entered ${enteredDuration})`
    }
}