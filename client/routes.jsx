import React from 'react';
import { mount } from 'react-mounter';
import { Meteor } from 'meteor/meteor';

import AppLayout from '/imports/client/ui/layout.jsx';
import Main from '/imports/client/ui/components/Main.jsx';
import Register from '/imports/client/ui/components/Register.jsx';
import Login from '/imports/client/ui/components/Login.jsx';

FlowRouter.triggers.enter([(context, redirect) => {
  if(!Meteor.userId() && FlowRouter.current().route.name !== "register") {
		FlowRouter.go('login');
	}
}]);

FlowRouter.route('/register', {
	name: 'register',
	action() {
    mount(AppLayout, {
      content: () => (<Register />)
    });
  }
});

FlowRouter.route('/login', {
	name: 'login',
	action() {
    mount(AppLayout, {
      content: () => (<Login />)
    });
  }
});

FlowRouter.route('/', {
  name: 'main',
  action() {
    mount(AppLayout, {
      content: () => (<Main />)
    });
  }
});
