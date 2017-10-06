import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";

export default class NicknameSelector extends Component {
    constructor(props) {
        super();

        this.state = {
            nickname: null,
            enteredDuration: 0,
            newNickname: props.proposedNickname
        };

        this.onNicknameSubmit = this.onNicknameSubmit.bind(this);
        this.updateNewNickname = this.updateNewNickname.bind(this);
        this.leaveChat = this.leaveChat.bind(this);
    }

    onNicknameSubmit(event) {
        event.preventDefault();

        this.setState({
            nickname: this.state.newNickname,
            enteredDuration: moment().fromNow()
        });

        this.enteredTime = Date.now();
        this.props.onStateChanged(true);
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

    leaveChat() {
        this.setState({
            nickname: null,
            enteredDuration: 0,
            newNickname: this.props.proposedNickname
        });

        this.props.onStateChanged(false);
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
                <button type="submit" disabled={newNickname === ""}
                        onClick={this.onNicknameSubmit}>Enter Chat</button>
            </form> :
            <span>
                {`Your Nickname: ${nickname} (entered ${enteredDuration})`}<br />
                <button onClick={this.leaveChat}>Leave Chat</button>
            </span>
    }
}

NicknameSelector.propTypes = {
    proposedNickname: PropTypes.string.isRequired,
    onStateChanged: PropTypes.func
};