import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import logo from "../assets/logo-dark.jpg"; // adjust path as needed

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16 " id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-gray-800 pt-12">
        
        {/* Logo + About */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Paris Mystery Logo"
              className="h-14 w-14 object-contain"
            />
            <h2 className="text-2xl font-bold tracking-wider">
              PARIS <span className="text-[#B8860B]">MYSTERY</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Discover timeless fragrances that capture elegance, mystery, and
            sophistication. Crafted for those who embrace style and essence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors font-medium">
                Collections
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors font-medium">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors font-medium">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Support</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors font-medium">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors font-medium">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors font-medium">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors font-medium">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Follow Us</h3>
          <div className="flex gap-5">
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-12 text-center text-xs text-gray-500 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Paris Mystery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
