import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            email: "",
            password: ""
        };
    }
    onChange(event) {
        this.setState({email: this.refs.email.value, password: this.refs.password.value});
    }
    login(event) {
        event.preventDefault();
        form = event.target;
        var user = this.refs.email.value;
        var password = this.refs.password.value;
        if (user && password)
            Meteor.loginWithPassword(user, password, (err, result) => {
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
                    <form id="registerForm" onSubmit={this.login}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="text" ref="email" type="text" className="validate" onChange={this.onChange} autoFocus/>
                                <label for="addtask">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="password" type="text" ref="password" type="password" className="validate" onChange={this.onChange} autoFocus/>
                                <label for="addtask">Password</label>
                            </div>
                            <input className="waves-effect waves-light btn" type="submit" value="Login"/>
                            <a className="right" href="/register">Dont Have an account?</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
