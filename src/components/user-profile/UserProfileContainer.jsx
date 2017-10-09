import React, { Component } from "react";
import PropTypes from "prop-types";
import UserProfile from "./UserProfile";
import { getUserProfile } from "../../services/users";


export default class UserProfileContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pending: true,
            user: null
        };
    }

    componentWillReceiveProps(newProps) {
        if(newProps.userId !== this.props.userId) {
            this.retrieveProfile(newProps.userId);
        }
    }

    componentDidMount() {
        this.retrieveProfile(this.props.userId);
    }

    retrieveProfile(userId) {
        this.setState({
            pending: true
        });

        getUserProfile(userId)
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