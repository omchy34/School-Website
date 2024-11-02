import React, { useState } from "react";
import { FiShoppingCart, FiUser, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { FaGraduationCap, FaHome, FaBook, FaChalkboardTeacher, FaFileAlt, FaBlog, FaEnvelope  } from 'react-icons/fa';

import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setDropdownOpen(null);
  };

  const menuItems = [
    { title: "Home", icon: <FaHome />, subItems: ["Home University", "Home Online Education", "Home University Admission", "Home Digital Education", "Home Academy", "Home Online Training", "Home Online Mentors", "Home Online Courses", "Home Kindergarten", "Online Instructor"] },
    { title: "Courses", icon: <FaBook />, subItems: ["Course 1", "Course 2", "Course 3"] },
    { title: "Teachers", icon: <FaChalkboardTeacher />, subItems: ["Teacher 1", "Teacher 2", "Teacher 3"] },
    { title: "Pages", icon: <FaFileAlt />, subItems: ["Page 1", "Page 2", "Page 3"] },
    { title: "Blog", icon: <FaBlog />, subItems: ["Blog 1", "Blog 2", "Blog 3"] },
    { title: "Contact", icon: <FaEnvelope />, subItems: [] }
  ];

  return (
    <nav className="relative">
      <div className="bg-red-600 h-4 w-10/12 rounded-b-xl m-auto"></div>

      <div className="bg-white p-4 shadow-md flex items-center justify-between relative">
        <div className="absolute inset-0 bg-blue-700 h-full -z-10"></div>

        <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto px-4">
          <div className="flex items-center bg-blue-700 text-white p-2 rounded-tr-[3rem] rounded-br-lg relative z-10">
            <FaGraduationCap className="text-red-500 w-6 h-6 mr-2" />
            <div className="text-2xl font-bold">EDURA</div>
            <div className="absolute top-0 right-0 bg-white w-8 h-8 rounded-full translate-x-3 -translate-y-3"></div>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-700">
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>

          <ul className="hidden md:flex space-x-8 ml-6 z-50">
            {menuItems.map((menu, index) => (
              <li key={index} className="relative group">
                <button className="text-gray-700 hover:text-blue-500 font-bold transition-colors duration-200 flex items-center">
                  {menu.icon}
                  <span className="ml-2">{menu.title}</span>
                  {menu.subItems.length > 0 && <FaAngleDown className="ml-1 pt-1" />}
                </button>
                {menu.subItems.length > 0 && (
                  <ul className="absolute left-0 hidden group-hover:block w-56 bg-white text-black mt-2 shadow-lg rounded-md overflow-hidden">
                    {menu.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="px-4 py-2 hover:bg-gray-200 flex items-center">
                        <FaBook className="mr-2 text-blue-500" />
                        {subItem}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="flex space-x-4 text-gray-700 hidden md:flex">
            <FiSearch className="w-6 h-6" />
            <FiShoppingCart className="w-6 h-6" />
            <FiUser className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-end transition-opacity duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div
          className={`w-64 bg-gradient-to-b from-blue-700 to-blue-900 text-white h-full shadow-lg transform transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-blue-500">
            <div className="text-2xl font-bold">EDURA</div>
            <button onClick={toggleMobileMenu} className="text-white">
              <FiX className="w-6 h-6" />
            </button>
          </div>

          <ul className="flex flex-col space-y-2 p-4">
            {menuItems.map((menu, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="flex justify-between items-center w-full text-left py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    {menu.icon}
                    <span className="ml-2">{menu.title}</span>
                  </div>
                  <span>{dropdownOpen === index ? '-' : '+'}</span>
                </button>
                {menu.subItems.length > 0 && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${dropdownOpen === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <ul className="bg-blue-800 pl-4 border-l border-blue-600">
                      {menu.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} className="px-4 py-2 hover:bg-blue-700 flex items-center">
                          <FaBook className="mr-2 text-white" />
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="flex space-x-4 p-4 border-t border-blue-500">
            <FiSearch className="w-6 h-6" />
            <FiShoppingCart className="w-6 h-6" />
            <FiUser className="w-6 h-6" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
