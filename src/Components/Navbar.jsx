import { NavLink } from "react-router-dom";
import logo from "../assets/RabbahLogo.jpg";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full shadow-sm z-50 bg-[#c0c0c0] opacity-75 rounded-sm">
      {/* Main container */}
      <div className="w-full mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center gap-3 min-w-max">
          <img 
            src={logo} 
            alt="Rabbah Legal Logo" 
            className="h-40 w-auto mr-9" 
          />
          {/* <h1 className="text-3xl font-bold font-serif">Rabbah Legal</h1> */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-20 mr-20 ml-50" >
          {[
            { label: "Home", path: "/" },  // Special case for Home
            { label: "About", path: "/about" },
            { label: "Services", path: "/services" },
            { label: "Contact", path: "/contact" }]
            .map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `text-[#050524] text-[36px] hover:text-white transition-colors ${
                  isActive ? "font-medium underline" : "font-light"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-silver focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy w-full px-6 py-4 space-y-3">
          {[
            { label: "Home", path: "/" },  // Special case for Home
            { label: "About", path: "/about" },
            { label: "Services", path: "/services" },
            { label: "Contact", path: "/contact" }]
              .map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-[#050524] hover:text-white ${
                  isActive ? "font-semibold underline" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;