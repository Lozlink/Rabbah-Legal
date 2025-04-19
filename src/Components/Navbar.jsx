/* eslint-disable no-unused-vars */
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/RabbahLogo.jpg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import banner from "../assets/banner.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <header
        style={{ backgroundImage: `url(${banner})` }}
          className="sticky top-0 w-full shadow-sm z-50 opacity-75 rounded-sm bg-cover bg-center bg-no-repeat mb-10"
      >
        <div className="w-full mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center gap-3 min-w-max">
         <Link to='/'>
          <img 
            src={logo} 
            alt="Rabbah Legal Logo" 
            className="h-20 md:h-24 lg:h-32 w-auto"
          />
          </Link>
          <Link to='/'>
          <span className="font-serif text-[#c0c0c0] text-lg md:hidden">
            Rabbah Legal
          </span>
          </Link>
        </div>

        {/* Centered Title and Desktop Navigation */}
        <div className="hidden md:flex justify-center flex-1">
          <motion.span 
          className="font-serif text-[#c0c0c0] text-xl md:text-2xl lg:text-3xl xl:text-4xl cursor-pointer transition-all duration-300 hover:text-white hover:scale-105 shadow-lg hover:shadow-xl"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          >
            Rabbah Legal
          </motion.span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 md:gap-6 lg:gap-12 xl:gap-20 mr-4">
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
                `font-serif text-[#c0c0c0] text-[18px] md:text-[20px] lg:text-[28px] xl:text-[36px] hover:text-white transition-colors ${
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#c0c0c0] bg-=opacity-40 w-full px-6 py-4 space-y-3"
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