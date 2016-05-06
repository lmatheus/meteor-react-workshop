import {composeWithTracker} from 'react-komposer';

import TaskList from '/imports/client/ui/components/TaskList.jsx';
import {Tasks} from '/models/collections.js';

composer = (onPropsChange, onData) => {
  const handle = Meteor.subscribe('tasks');
  if (handle.ready()) {
    const tasks = Tasks.find({ },{ sort: { completed:true }});
    onData(null, {tasks});
  }
}

export default composeWithTracker(composer)(TaskList);
