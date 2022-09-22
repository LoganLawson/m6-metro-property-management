import {Link} from 'react-router-dom';
import "./SortNavbar.css";

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-collapse'>
        <ul className='navbar-list'>
          <li className='navbar-item'>
            <Link to='/Home' className='nav-link'> Home </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/exercisehome' className='nav-link'>Exercises</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/create' className='nav-link'>Create Exercise Log</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/user' className='nav-link'>Create User</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/properties' className='nav-link'>Properties</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
