import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  render() { 
    return (
      <div>
        <h1>Goal App</h1>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink exact to="/goals">Goals</NavLink>
            </li>
            <li>
              <NavLink exact to="/auth">Login</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
 
export default Header;