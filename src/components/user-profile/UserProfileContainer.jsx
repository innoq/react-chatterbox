import React, { Component } from "react";
import PropTypes from "prop-types";
import UserProfile from "./UserProfile";
import { getUserProfile } from "../../services/users";


export default class UserProfileContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pending: false,
            user: null
        };
    }

    componentDidMount() {
        this.setState({
            pending: true
        });

        getUserProfile(this.props.userId)
            .then(user => this.setState({
                pending: false,
                user: user
            }));
    }

    render(){
        const { user, pending } = this.state;

        return pending ?
            <p>"Receiving user profile ..."</p> :
            user && <UserProfile user={user} />;
    }
}

UserProfileContainer.propTypes = {
    userId: PropTypes.number
};