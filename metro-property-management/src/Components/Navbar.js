import React, {Component} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-brand'>ExerciseTracker</Link>
      <div className='navbar-collapse'>
        <ul className='navbar-nav'>
          <li className='navbar-item'>
            <Link to='/' className='nav-link'>Exercises</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/create' className='nav-link'>Create Exercise Log</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/user' className='nav-link'>Create User</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
