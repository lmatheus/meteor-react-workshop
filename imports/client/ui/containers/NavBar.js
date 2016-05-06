import {composeWithTracker} from 'react-komposer';
import { Meteor } from 'meteor/meteor';

import NavBar from '/imports/client/ui/components/NavBar.jsx';

composer = (onPropsChange, onData) => {
    const currentUser = Meteor.user();
    onData(null, {currentUser});
}

export default composeWithTracker(composer)(NavBar);
