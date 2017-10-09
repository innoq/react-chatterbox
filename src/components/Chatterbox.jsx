import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route } from "react-router-dom";

import chatStateReducers from "../redux/reducers";
import ChatView from "./ChatView";
import UserProfileContainer from "./user-profile/UserProfileContainer";

const store = createStore(chatStateReducers, applyMiddleware(thunk));

export default class Chatterbox extends Component {
    render() {
        return <Provider store={store}>
            <Router>
                <div>
                <Route exact={true} path="/" component={ChatView} />
                <Route path="/user-profiles/:userId" render={(props) => {
                    const { match } = props;
                    return <UserProfileContainer userId={Number.parseInt(match.params.userId)} />
                }} />
                </div>
            </Router>
        </Provider>;
    }
}