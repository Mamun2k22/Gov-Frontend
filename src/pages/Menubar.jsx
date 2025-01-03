import React, { useState } from "react";
import { FaList } from "react-icons/fa";

const Menubar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="border-dotted border-[1px] border-gray-300 bg-white p-2 z-50 border-l-0 border-r-0">
  
        <div className="flex items-center justify-between sm:hidden">
          {/* Menu Icon */}
          <button
            onClick={toggleMenu}
            className="flex items-center space-x-2 px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            <span className="material-icons">
              <FaList />
            </span>
            <span className="text-sm">মেনু নির্বাচন করুন</span>
          </button>


          <p className="text-sm text-gray-600">Select your menu</p>
        </div>

        {/* Horizontal Menu */}
        <ul className=" hidden sm:flex flex-wrap justify-start sm:justify-center md:justify-start text-blue-700 font-medium gap-2">
          <li className="hover:underline cursor-pointer px-1 border-r border-dotted border-2 border-l-0 border-t-0 border-b-0 border-gray-400">
            Home
          </li>
          <li className="hover:underline cursor-pointer px-1 border-r border-dotted border-2 border-l-0 border-t-0 border-b-0 border-gray-400">
            District Info
          </li>
          <li className="hover:underline cursor-pointer px-1 border-r border-dotted border-2 border-l-0 border-t-0 border-b-0 border-gray-400">
            District Admin
          </li>
          <li className="hover:underline cursor-pointer px-1 border-r border-dotted border-2 border-l-0 border-t-0 border-b-0 border-gray-400">
            Govt Offices
          </li>
          <li className="hover:underline cursor-pointer px-1 border-r border-dotted border-2 border-l-0 border-t-0 border-b-0 border-gray-400">
            Local Govt
          </li>
          <li className="hover:underline cursor-pointer px-1 border-r border-dotted border-2 border-l-0 border-t-0 border-b-0 border-gray-400">
            Other Institutes
          </li>
          <li className="hover:underline cursor-pointer px-1 border-r border-dotted border-2 border-l-0 border-t-0 border-b-0 border-gray-400">
            E-Service Center
          </li>
          <li className="hover:underline cursor-pointer px-1 border-r border-dotted border-2 border-l-0 border-t-0 border-b-0 border-gray-400">
            Gallery
          </li>
          <li className="hover:underline cursor-pointer px-1 border-r border-dotted border-2 border-l-0 border-t-0 border-b-0 border-gray-400">
            Land Acquisition
          </li>
          <li className="hover:underline cursor-pointer px-1 border-r border-dotted border-2 border-l-0 border-t-0 border-b-0 border-gray-400">
            Complaint List
          </li>
        </ul>

        {/* Vertical Dropdown Menu for Mobile Devices */}
        {isMenuOpen && (
          <ul className="flex flex-col space-y-1 mt-2 sm:hidden text-blue-700 font-medium">
            <li className="cursor-pointer px-2 py-1 hover:bg-blue-100 hover:text-blue-900 transition duration-200">
              Home
            </li>
            <li className="cursor-pointer px-2 py-1 hover:bg-blue-100 hover:text-blue-900 transition duration-200">
              District Info
            </li>
            <li className="cursor-pointer px-2 py-1 hover:bg-blue-100 hover:text-blue-900 transition duration-200">
              District Admin
            </li>
            <li className="cursor-pointer px-2 py-1 hover:bg-blue-100 hover:text-blue-900 transition duration-200">
              Govt Offices
            </li>
            <li className="cursor-pointer px-2 py-1 hover:bg-blue-100 hover:text-blue-900 transition duration-200">
              Local Govt
            </li>
            <li className="cursor-pointer px-2 py-1 hover:bg-blue-100 hover:text-blue-900 transition duration-200">
              Other Institutes
            </li>
            <li className="cursor-pointer px-2 py-1 hover:bg-blue-100 hover:text-blue-900 transition duration-200">
              E-Service Center
            </li>
            <li className="cursor-pointer px-2 py-1 hover:bg-blue-100 hover:text-blue-900 transition duration-200">
              Gallery
            </li>
            <li className="cursor-pointer px-2 py-1 hover:bg-blue-100 hover:text-blue-900 transition duration-200">
              Land Acquisition
            </li>
            <li className="cursor-pointer px-2 py-1 hover:bg-blue-100 hover:text-blue-900 transition duration-200">
              Complaint List
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Menubar;
