import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaUser, FaGlobe } from "react-icons/fa"; // React Icons
import classNames from "classnames"; // For conditional classes

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Conditional class for background blur and shadow on scroll
  const headerClass = classNames(
    "fixed top-0 left-0 w-full z-50 transition-all",
    {
      "bg-white shadow-lg backdrop-blur-md": scrolled,
      "bg-white": !scrolled,
    }
  );

  return (
    <header className={headerClass}>
      <div className="container flex items-center justify-between p-4 mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">Eventos</div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <NavLink to="/" label="Home" icon={<FaHome />} location={location} />
          <NavLink to="/events" label="Events" icon={<FaCalendarAlt />} location={location} />
          <NavLink to="/profile" label="Profile" icon={<FaUser />} location={location} />
        </nav>

        {/* Connect Wallet Button */}
        <button className="flex items-center px-4 py-2 text-white transition bg-black rounded-lg shadow-lg hover:bg-gray-800">
          <FaGlobe className="mr-2" />
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

// Reusable NavLink Component for active styles
interface NavLinkProps {
  to: string;
  label: string;
  icon: React.ReactNode;
  location: { pathname: string };
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, icon, location }) => {
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={classNames(
        "flex items-center text-lg font-semibold transition-colors pb-2",
        {
          "text-black border-b-2 border-black": isActive,
          "text-gray-500 hover:text-gray-800": !isActive,
        }
      )}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </Link>
  );
};

export default Header;
