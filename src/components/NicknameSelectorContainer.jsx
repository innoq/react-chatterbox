import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NicknameSelector from "./NicknameSelector";
import StatusControl from "./StatusControl";
import User from "../models/user";

import {
    enterChatRequest as createEnterChatRequest,
    leaveChatRequest as createLeaveChatRequest } from "../redux/actions";

class NicknameSelectorContainer extends Component {
    constructor(props) {
        super(props);

        this.onNicknameSubmit = this.onNicknameSubmit.bind(this);
        this.leaveChat = this.leaveChat.bind(this);
    }

    componentWillReceiveProps(newProps){
        if(newProps.currentUser !== this.props.currentUser){
            this.props.onStateChanged(newProps.currentUser !== null);
        }
    }

    onNicknameSubmit(newNickname) {
        this.props.enterChat(newNickname);
    }

    leaveChat() {
        const { leaveChat, currentUser } = this.props;
        leaveChat(currentUser.id);
    }

    render() {
        const { currentUser, entering, leaving } = this.props;

        let output;

        if (!entering && !leaving) {
            if (currentUser === null) {
                output = <NicknameSelector proposedNickname={this.props.proposedNickname}
                                           onNicknameSubmit={this.onNicknameSubmit}/>
            } else {
                output = <StatusControl nickname={currentUser.nickname} enteredTime={currentUser.memberSince}
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
    onStateChanged: PropTypes.func,
    currentUser: PropTypes.instanceOf(User),
    entering: PropTypes.bool,
    leaving: PropTypes.bool
};

const mapStateToProps = (state) => {
    const { currentUser } = state;
    const { user, entering, leaving } = currentUser;
    return {
        currentUser: user && User.fromJson(user) || null,
        entering: entering,
        leaving: leaving
    };
};

const mapDispatchToProps = dispatch => {
    return {
        enterChat: nickname => dispatch(createEnterChatRequest(nickname)),
        leaveChat: userId => dispatch(createLeaveChatRequest(userId))
    }
};

const ConnectedNicknameSelector = connect(
    mapStateToProps, mapDispatchToProps
)(NicknameSelectorContainer);

export default ConnectedNicknameSelector;


