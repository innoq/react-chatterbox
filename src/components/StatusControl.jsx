import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";

export default class StatusControl extends Component {
    constructor(props){
        super(props);

        this.state = {
            enteredDuration: moment(props.enteredTime).fromNow()
        };

        this.onLeaveChat = this.onLeaveChat.bind(this);
    }

    componentDidMount() {
        this.memberTimer = setInterval(() => this.updateMemberTime(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.memberTimer);
    }

    updateMemberTime() {
        if(this.state.nickname) {
            this.setState({
                enteredDuration: moment(this.props.enteredTime).fromNow()
            });
        }
    }

    onLeaveChat(event) {
        this.props.onLeaveChat();
    }

    render() {
        const { nickname } = this.props;
        const { enteredDuration } = this.state;

        return <span>
            {`Your Nickname: ${nickname} (entered ${enteredDuration})`}<br />
            <button onClick={this.onLeaveChat}>Leave Chat</button>
        </span>;
    }
}

StatusControl.propTypes = {
    nickname: PropTypes.string,
    enteredTime: PropTypes.instanceOf(Date),
    onLeaveChat: PropTypes.func
};