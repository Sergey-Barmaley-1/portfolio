import { NavLink } from 'react-router-dom';
import links from './navLinks';
import './style.css';

const NavBar = ({ className = "" }) => {
  return (
    <nav className={`flex gap-6 p-4 ${className}`}>
      {links.map(({ to, label, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            isActive ? 'navlink navlink-active' : 'navlink'
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;


