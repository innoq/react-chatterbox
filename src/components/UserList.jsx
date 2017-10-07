import React, { Component } from "react";
import { getUserList } from "../services/users";

export default class UserList extends Component {
    constructor() {
        super();
        this.state = {
            userList: [],
            retrieving: false
        }
    }

    componentDidMount() {
        this.updateTimer = setInterval(() => {
            this.setState({
                retrieving: true
            });

            getUserList().then(userList => {
                this.setState({
                    userList: userList,
                    retrieving: false
                })
            })
        }, 500);
    }

    componentWillUnmount() {
        clearInterval(this.updateTimer);
    }

    render() {
        return <div>Current Members:
            <ul>
                {this.state.userList.map(user => <li key={user.id}>{user.nickname}</li>)}
            </ul>
        </div>;
    }
}