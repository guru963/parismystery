import React, { useState } from "react";
import logo from "../assets/logo-dark.jpg";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // React Icons

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0A0A0A] text-white px-6 md:px-12 py-4 flex items-center justify-between shadow-lg font-montserrat tracking-wide z-50">
      {/* Left Section: Logo & Brand Name */}
      <div className="flex items-center space-x-3">
        {/* Logo */}
        <div className="h-12 w-12 md:h-14 md:w-14 flex-shrink-0">
          <img src={logo} alt="Logo" className="h-full w-full object-contain" />
        </div>
        {/* Brand Name */}
        <span className="text-lg md:text-2xl font-[epunda] font-bold tracking-wider">
          PARIS <span className="text-[#B8860B]">MYSTERY</span>
        </span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase">
        <li className="group cursor-pointer">
          <a href="#" className="hover:text-[#B8860B] transition-colors">
            Home
          </a>
          <span className="block h-0.5 w-0 group-hover:w-full bg-[#B8860B] transition-all"></span>
        </li>
        <li className="group cursor-pointer">
          <a href="#about" className="hover:text-[#B8860B] transition-colors">
            About
          </a>
          <span className="block h-0.5 w-0 group-hover:w-full bg-[#B8860B] transition-all"></span>
        </li>
        <li className="group cursor-pointer">
          <a href="#collections" className="hover:text-[#B8860B] transition-colors">
            Collection
          </a>
          <span className="block h-0.5 w-0 group-hover:w-full bg-[#B8860B] transition-all"></span>
        </li>
        <li className="group cursor-pointer">
          <a href="#contact" className="hover:text-[#B8860B] transition-colors">
            Contact
          </a>
          <span className="block h-0.5 w-0 group-hover:w-full bg-[#B8860B] transition-all"></span>
        </li>
        <li>
          <Link
            to="/add-to-cart"
            className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition"
          >
            View Cart
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0A0A0A] flex flex-col items-center space-y-6 py-6 md:hidden shadow-lg z-40">
          <a
            href="#"
            className="uppercase text-sm hover:text-[#B8860B]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#collections"
            className="uppercase text-sm hover:text-[#B8860B]"
            onClick={() => setIsOpen(false)}
          >
            Collection
          </a>
          <a
            href="#about"
            className="uppercase text-sm hover:text-[#B8860B]"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="uppercase text-sm hover:text-[#B8860B]"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <Link
            to="/add-to-cart"
            className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            View Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
