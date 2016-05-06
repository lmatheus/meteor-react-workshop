import React from 'react';
import NavBar from '/imports/client/ui/containers/NavBar.js';

export default AppLayout = ({content}) => (
    <div className="app-root">
      <NavBar />
        <div className="content">
            {content()}
        </div>
    </div>
);
