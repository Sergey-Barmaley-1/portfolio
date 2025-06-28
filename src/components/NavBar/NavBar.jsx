import { NavLink } from 'react-router-dom';
import links from './navLinks';

const NavBar = () => {
  return (
    <div className="flex justify-center">
      <nav className="flex gap-6 p-4 bg-gray-100 shadow-sm dark:bg-gray-900">
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              isActive
                ? 'text-white bg-blue-600 px-2 py-1 rounded hover:underline'
                : 'text-blue-600 hover:underline'
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;


