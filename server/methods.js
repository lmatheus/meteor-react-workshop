import { Tasks } from '/models/collections.js'

Meteor.methods({
  insertTask:(task)=>{
    Tasks.insert(task);
  },
  updateTask:(id, completed)=>{
    Tasks.update(id, {
      $set: {
        completed: completed
      }
    });
  },
  deleteTask:(id)=>{
    Tasks.remove(id);
  }
});
