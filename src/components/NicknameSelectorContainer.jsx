import React, { Component } from "react";
import PropTypes from "prop-types";
import {enterChatroom, leaveChatroom} from "../services/users";
import NicknameSelector from "./NicknameSelector";
import StatusControl from "./StatusControl";

export default class NicknameSelectorContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entering: false,
            leaving: false,
            currentUser: null
        };

        this.onNicknameSubmit = this.onNicknameSubmit.bind(this);
        this.leaveChat = this.leaveChat.bind(this);
    }

    onNicknameSubmit(newNickname) {

        this.setState({ entering: true });

        enterChatroom(newNickname).
        then(newUser => {
                this.setState({
                    entering: false,
                    currentUser: newUser
                });
                this.enteredTime = new Date();
                this.props.onStateChanged(true);
            }
        );
    }

    leaveChat() {
        this.setState({
            leaving: true,
        });

        leaveChatroom(this.state.currentUser.id).
        then(response => {
            this.setState({
                currentUser: null,
                leaving: false
            });

            this.props.onStateChanged(false);
        });


    }

    render() {
        const { currentUser, entering, leaving } = this.state;

        let output;

        if (!entering && !leaving) {
            if (currentUser === null) {
                output = <NicknameSelector proposedNickname={this.props.proposedNickname}
                                           onNicknameSubmit={this.onNicknameSubmit}/>
            } else {
                output = <StatusControl nickname={currentUser.nickname} enteredTime={this.enteredTime}
                                        onLeaveChat={this.leaveChat} />
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

NicknameSelectorContainer.propTypes = {
    proposedNickname: PropTypes.string.isRequired,
    onStateChanged: PropTypes.func
};