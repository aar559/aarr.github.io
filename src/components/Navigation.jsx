import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Certifications", path: "/certifications" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];

  const isActive = (path) => {
    return location.pathname === path ? "text-blue-400" : "text-gray-300";
  };

  return (
    <nav className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-40 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-blue-400" />
            <Link to="/" className="text-xl font-bold">Aaryan Bhati</Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${isActive(item.path)} hover:text-blue-400 transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="text-gray-300" /> : <Menu className="text-gray-300" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-800 border-b border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md ${isActive(item.path)} hover:bg-gray-700`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
