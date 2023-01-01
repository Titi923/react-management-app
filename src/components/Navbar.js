import { Link } from 'react-router-dom';

// styles & images
import './Navbar.css';
import Logo from '../assets/logo.svg';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li className="logo">
          <img src={Logo} alt="Logo" />
          <span>ManagementApp</span>
        </li>

        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>

        <li>
          <button className='btn'>Logout</button>
        </li>
      </ul>
    </nav>
  );
}
