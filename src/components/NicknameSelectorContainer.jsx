import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NicknameSelector from "./NicknameSelector";
import StatusControl from "./StatusControl";
import User from "../models/user";

import {
    enterChat as createEnterChatAction,
    leaveChat as createLeaveChatAction } from "../redux/actions";

class NicknameSelectorContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entering: false,
            leaving: false
        };

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
        this.props.leaveChat();
    }

    render() {
        const { entering, leaving } = this.state;
        const { currentUser } = this.props;

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
    currentUser: PropTypes.instanceOf(User)
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser && User.fromJson(state.currentUser) || null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        enterChat: nickname => dispatch(createEnterChatAction(nickname)),
        leaveChat: () => dispatch(createLeaveChatAction())
    }
};

const ConnectedNicknameSelector = connect(
    mapStateToProps, mapDispatchToProps
)(NicknameSelectorContainer);

export default ConnectedNicknameSelector;


