import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NicknameSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newNickname: props.proposedNickname || ""
        };

        this.updateNewNickname = this.updateNewNickname.bind(this);
        this.onNicknameSubmit = this.onNicknameSubmit.bind(this);
    }

    updateNewNickname(event){
        this.setState({
            newNickname: event.target.value
        })
    }

    onNicknameSubmit(event) {
        event.preventDefault();
        this.props.onNicknameSubmit(this.state.newNickname);
    }


    render() {
        const { newNickname } = this.state;

        return <form onSubmit={this.onNicknameSubmit}>
            <label htmlFor="nickname">Nickname: </label>
            <input type="text" id="nickname" value={newNickname} onChange={this.updateNewNickname} />
            <button type="submit" disabled={newNickname === ""}
                    onClick={this.onNicknameSubmit}>Enter Chat</button>
        </form>
    }
}

NicknameSelector.propTypes = {
    proposedNickname: PropTypes.string,
    onNicknameSubmit: PropTypes.func
};