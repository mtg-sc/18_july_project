import React, { useState } from 'react';
import Button from '../ui/Button'; // Ensure this path is correct for your Button component

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { text: "Services", href: "#services" },
    { text: "About", href: "#about" },
    { text: "Process", href: "#process" },
    { text: "Portfolio", href: "#portfolio" },
    { text: "Contact", href: "#contact" }
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6 px-4 sm:px-6 lg:px-8">

      {/* Main header content wrapper */}
      <div className="max-w-[1600px] mx-auto flex justify-between items-center py-3">

        {/* Left Section: Logo Image and Domain Name Text */}
        <div className="flex items-center gap-2">
          <img
            src="/logo_image.png"
            alt="Company Logo"
            className="h-10 w-auto"
          />
          <span className="text-white text-lg font-bold font-inter">Inflyenze.co</span>
        </div>

        {/* Right Section: Navigation, Mobile Toggle Button, and Login/Signup Buttons */}
        <div className="flex items-center gap-4 lg:gap-8"> 
          {/* Mobile Menu Toggle Button */}
          <button
            className="block lg:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white text-base font-medium hover:text-gray-300 transition-colors duration-200"
                onClick={() => setMenuOpen(false)} 
              >
                {item.text}
              </a>
            ))}
          </nav>

          {/* Desktop Login and Sign Up Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Login Button: Now uses variant="primary" */}
            <Button 
              variant="primary" // Changed to primary variant
              size="small"     // Kept as small for header fit
            >
              Login
            </Button>
            {/* Sign Up Button: Now uses variant="primary" */}
            <Button 
              variant="primary" // Changed to primary variant
              size="small"     // Kept as small for header fit
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden absolute top-full left-0 w-full bg-black z-40 p-4`}>
        <div className="flex flex-col gap-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-white text-base font-medium hover:text-gray-300 transition-colors duration-200 py-2"
              onClick={() => setMenuOpen(false)} 
            >
              {item.text}
            </a>
          ))}
          {/* Mobile Login and Sign Up Buttons */}
          <Button 
            variant="primary" // Changed to primary variant
            size="small" 
            fullWidth 
            className="mt-2" // Kept mt-2 for spacing
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Button>
          <Button 
            variant="primary" // Changed to primary variant
            size="small" 
            fullWidth 
            className="mt-2" // Kept mt-2 for spacing
            onClick={() => setMenuOpen(false)}
          >
            Sign Up
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;