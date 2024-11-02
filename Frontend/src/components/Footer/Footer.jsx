// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaSkype } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A] text-white pt-10 pb-4 px-6 md:px-16 lg:px-16 font-sans">
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
        
        {/* Brand and Description */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-red-600">EDURA</span>
          </h2>
          <p className="mt-4 text-sm leading-6 max-w-xs">
            Continually optimize backward manufactured products whereas communities negotiate life compelling alignments.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="cursor-pointer hover:text-blue-500" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
            <FaYoutube className="cursor-pointer hover:text-red-600" />
            <FaSkype className="cursor-pointer hover:text-blue-500" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Development</li>
            <li>Marketing</li>
            <li>Data Science</li>
            <li>Business</li>
            <li>Design</li>
            <li>Photography</li>
          </ul>
        </div>

        {/* Our Course */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Course</h3>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Business Course</li>
            <li>Digital Marketing</li>
            <li>Front-end Course</li>
            <li>Photography Course</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>Community</li>
            <li>Support</li>
            <li>Video Guides</li>
            <li>Documentation</li>
            <li>Template</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Get in touch!</h3>
          <p className="text-sm leading-6 max-w-xs">
            Fusce varius, dolor tempor interdum tristiquei bibendum service life.
          </p>
          <ul className="mt-4 text-sm space-y-2">
            <li>📍 147/I, Green Road, Gulshan Avenue, Panthapath, Dhaka</li>
            <li>✉️ info@edura.com</li>
            <li>📞 +256 214 203 215</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>Copyright © 2023 <span className="text-blue-500">Edura</span> All Rights Reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
