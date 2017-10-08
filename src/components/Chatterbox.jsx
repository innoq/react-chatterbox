import React, { Component } from "react";
import Title from "./common/Title";
import Subtitle from "./common/Subtitle";
import NicknameSelector from "./NicknameSelectorContainer";
import UserList from "./UserList";
import UserProfileContainer from "./user-profile/UserProfileContainer";

const NICKNAMES = ["Speedy Gonzales", "Bilbo Beutlin", "Gollum", "Uncle Sam", "William Wallace", "Robert the Bruce"];

function getRandomNick(){
    return NICKNAMES[Math.floor(Math.random()*(NICKNAMES.length - 1))];
}

export default class Chatterbox extends Component {
    constructor() {
        super();
        this.state = {
            entered: false
        };
        this.onStateChanged = this.onStateChanged.bind(this);

    }

    onStateChanged(entered) {
        this.setState({
            entered: entered
        });
    }

    render() {
        const activeAppendix = this.state.entered ? " (active)" : "";

        return <span>
            <Title>Chatterbox{activeAppendix}</Title>
            <Subtitle>A super fancy react chat</Subtitle>
            <UserList />
            <NicknameSelector proposedNickname={getRandomNick()} onStateChanged={this.onStateChanged} />
            {this.state.entered && <UserProfileContainer userId={0} />}
        </span>;
    }
}