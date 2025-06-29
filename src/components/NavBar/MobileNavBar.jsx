import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import links from '../../MockData/navLinks';

export default function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Burger button */}
      <button
        className="p-2 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? '✖️ Close' : '🍔 Menu'}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md border border-gray-200 z-50">
          <nav className="flex flex-col p-4 gap-4">
            {links.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive
                    ? 'navlink navlink-active'
                    : 'navlink'
                }
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
