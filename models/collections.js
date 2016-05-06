import { Mongo } from 'meteor/mongo';
import moment from 'moment';
import { Meteor } from 'meteor/meteor';

const Tasks = new Mongo.Collection('tasks');

Tasks.helpers({
  fullName(){
    return Meteor.users.findOne(this.author).username;
  },
  taskDate(){
    return moment(this.createdAt).fromNow();
  }
});

Tasks.allow({
  insert(userId, doc) {
    return false;
  },
  update(userId, doc, fields, modifier) {
    return true;
  },
  remove(userId, doc) {
    return false
  }
});

TaskSchema = new SimpleSchema({
  taskText: {
    type: String
  },
  completed:{
    type: Boolean
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    }
  },
  author: {
    type: String,
    autoValue: function() {
      if (this.isInsert) {
        return this.userId;
      }
    }
  }
});

Tasks.attachSchema(TaskSchema)

export {Tasks};
