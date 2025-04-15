import { NavLink } from "react-router-dom";
import logo from "../assets/RabbahLogo.jpg";
import { useState } from "react";
import {  motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full shadow-sm z-50 bg-[#c0c0c0] opacity-75 rounded-sm">
        <div className="w-full mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center gap-3 min-w-max">
          <img 
            src={logo} 
            alt="Rabbah Legal Logo" 
            className="h-20 md:h-28 lg:h-40 w-auto mr-4 md:mr-9" 
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 md:gap-12 lg:gap-20 mr-4 md:mr-12 lg:mr-20 ml-4 md:ml-12 lg:ml-20">
          {[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Services", path: "/services" },
            { label: "Contact", path: "/contact" },
          ].map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `text-[#050524] text-xl md:text-2xl lg:text-3xl hover:text-white transition-colors ${
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
          className="md:hidden text-[#050524] focus:outline-none"
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
           initial={{opacity: 0, y: -10}} 
           animate={{opacity: 1, y: 0}}
           exit={{opacity: 0, y: -10}}
           transition={{duration: 0.25}} 
           className="md:hidden bg-navy w-full px-6 py-4 space-y-3"
          >
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-[#050524] text-lg hover:text-white ${
                    isActive ? "font-semibold underline" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>  
    </header>
  );
};

export default Navbar;