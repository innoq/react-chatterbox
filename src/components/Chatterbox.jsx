import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import ChatView from "./ChatView";
import UserProfileContainer from "./user-profile/UserProfileContainer";

export default class Chatterbox extends Component {
    render() {
        return <Router>
            <div>
            <Route exact={true} path="/" component={ChatView} />
            <Route path="/user-profiles/:userId" render={(props) => {
                const { match } = props;
                return <UserProfileContainer userId={Number.parseInt(match.params.userId)} />
            }} />
            </div>
        </Router>;
    }
}