import React from 'react';
import LogOut from '/imports/client/ui/components/LogOut.jsx';

const LoggedInNavBar = ({currentUser}) => (
  <nav className="blue">
      <div className="nav-wrapper">
          <a href="/" className="brand-logo">To do</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
                <a>{currentUser.username}</a>
            </li>
            <LogOut />
          </ul>
      </div>
  </nav>
)

const LoggedOutNavBar = () => (
  <nav className="blue">
      <div className="nav-wrapper">
          <a href="/" className="brand-logo">To do</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
                <a href="/login">Log In</a>
            </li>
          </ul>
      </div>
  </nav>
)

const NavBar = ({currentUser}) => {
  if(currentUser){
    return <LoggedInNavBar currentUser={currentUser}/>
  }
  else{
    return <LoggedOutNavBar />
  }
}

export default NavBar;
