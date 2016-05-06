import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            email: "",
            password: ""
        };
    }
    onChange(event) {
        this.setState({email: this.refs.email.value, password: this.refs.password.value});
    }
    register(event) {
        event.preventDefault();
        form = event.target;
        var email = this.refs.email.value;
        var password = this.refs.password.value;
        if (email && password)
            var userObject = {
                username: email,
                email: email,
                password: password
            };
        Accounts.createUser(userObject, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                FlowRouter.go("main");
            }
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col s4 offset-s4">
                    <form id="registerForm" onSubmit={this.register}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="text" ref="email" type="text" className="validate" onChange={this.onChange} autoFocus/>
                                <label for="addtask">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="password" type="text" ref="password" type="password" className="validate" onChange={this.onChange} autoFocus/>
                                <label for="addtask">Password</label>
                            </div>
                            <input className="waves-effect waves-light btn" type="submit" value="Register"/>
                            <a className="right" href="/login">Have an account?</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register
