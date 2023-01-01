import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

// styles & images
import './Navbar.css';
import Logo from '../assets/logo.svg';

export default function Navbar() {
  const { logout, isPending } = useLogout()
  
  return (
    <nav className='navbar'>
      <ul>
        <li className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
            <span className='logo-title'>ManagementApp</span>
          </Link>
        </li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li>
          {!isPending && <button className='btn' onClick={logout}>Logout</button>}
          {isPending && <button className='btn' disabled>Logging out...</button>}
        </li>
      </ul>
    </nav>
  );
}
