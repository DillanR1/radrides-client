import React from 'react';
// not in API yet import { NavLink } from 'react-router-dom'
import './NavBar.css';

function NavBar() {
    return
      <nav>
          <div className="container">
            <NavLink className="logo" to='/'>
              <h1>RadRides</h1>
            </NavLink>
            <ul className="nav-list">
              <li className='nav-item'>
                <NavLink className='nav-link' exact to='/'>Home</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' exact to='/cars'>Cars</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/cars/new'>Add Car</NavLink>
              </li>
            </ul>
          </div>
      </nav>
}

export default NavBar;

//NOTE  If auth stretch goal is met, add react.fragment