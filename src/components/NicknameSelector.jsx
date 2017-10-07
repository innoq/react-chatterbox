import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import {enterChatroom, leaveChatroom} from "../services/users";

export default class NicknameSelector extends Component {
    constructor(props) {
        super();

        this.state = {
            nickname: null,
            enteredDuration: 0,
            newNickname: props.proposedNickname,
            entering: false,
            leaving: false,
            currentUser: null
        };

        this.onNicknameSubmit = this.onNicknameSubmit.bind(this);
        this.updateNewNickname = this.updateNewNickname.bind(this);
        this.leaveChat = this.leaveChat.bind(this);
    }

    onNicknameSubmit(event) {
        event.preventDefault();

        this.setState({ entering: true });

        enterChatroom(this.state.newNickname).
            then(newUser => {
                    this.setState({
                        nickname: newUser.nickname,
                        entering: false,
                        enteredDuration: moment().fromNow(),
                        currentUser: newUser
                    });
                    this.enteredTime = Date.now();
                    this.props.onStateChanged(true);
                }
        );
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
            leaving: true,
        });

        leaveChatroom(this.state.currentUser.id).
            then(response => {
                this.setState({
                    nickname: null,
                    enteredDuration: 0,
                    newNickname: this.props.proposedNickname,
                    currentUser: null,
                    leaving: false
                });

                this.props.onStateChanged(false);
            });


    }

    componentDidMount() {
        this.memberTimer = setInterval(() => this.updateMemberTime(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.memberTimer);
    }

    render() {
        const { nickname, enteredDuration, newNickname, entering, leaving } = this.state;

        let output;

        if (!entering && !leaving) {
            if (nickname === null) {
                output = <form onSubmit={this.onNicknameSubmit}>
                    <label htmlFor="nickname">Nickname: </label>
                    <input type="text" id="nickname" value={newNickname} onChange={this.updateNewNickname} />
                    <button type="submit" disabled={newNickname === ""}
                            onClick={this.onNicknameSubmit}>Enter Chat</button>
                </form>
            } else {
                output = <span>
                    {`Your Nickname: ${nickname} (entered ${enteredDuration})`}<br />
                    <button onClick={this.leaveChat}>Leave Chat</button>
                </span>
            }
        } else {
            if(entering) {
                output = "Entering chat ..."
            } else {
                output = "Leaving chat ..."
            }
        }

        return output;

    }
}

NicknameSelector.propTypes = {
    proposedNickname: PropTypes.string.isRequired,
    onStateChanged: PropTypes.func
};