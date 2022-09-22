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
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
