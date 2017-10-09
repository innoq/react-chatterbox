import React from "react";
import PropTypes from "prop-types";

import User from "../../models/user";

export default function UserProfile(props) {
    const { user } = props;

    return <div><h1>{user.nickname}</h1>
        <dl>
            <dt>ID</dt>
            <dd>{user.id}</dd>
            <dt>Color</dt>
            <dd>{user.color}</dd>
            <dt>Member Since</dt>
            <dd>{user.memberSince.toString()}</dd>
        </dl>
    </div>;
}

UserProfile.propTypes = {
    user: PropTypes.instanceOf(User)
};