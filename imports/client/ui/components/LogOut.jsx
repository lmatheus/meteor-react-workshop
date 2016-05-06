import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    }
    logOut() {
        Meteor.logout(() =>{
           FlowRouter.go("login")
        });
    }
    render() {
        return (
            <li>
                <a onClick={this.logOut}>Log out</a>
            </li>
        )
    }
}

export default Logout
