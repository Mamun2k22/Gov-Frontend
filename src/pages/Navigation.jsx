import React, { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-500 text-white ">
      <div className="mx-auto flex justify-between items-center py-2 px-4">
        {/* Branding */}
        <div className="text-lg font-bold">
          <span>বাংলাদেশ জাতীয় তথ্য বাতায়ন</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 items-center mt-2 sm:mt-0`}
        >
          {/* Dropdowns */}
          <select className="bg-white text-black px-4 py-2 rounded w-full sm:w-auto">
            <option>বিভাগ</option>
            <option>ঢাকা</option>
            <option>খুলনা</option>
            <option>চট্টগ্রাম</option>
          </select>
          <select className="bg-white text-black px-4 py-2 rounded w-full sm:w-auto">
            <option>খুলনা বিভাগ</option>
            <option>কুষ্টিয়া</option>
            <option>যশোর</option>
          </select>
          <select className="bg-white text-black px-4 py-2 rounded w-full sm:w-auto">
            <option>বাগেরহাট জেলা</option>
            <option>মোংলা</option>
            <option>সাতক্ষীরা</option>
          </select>
          <select className="bg-white text-black px-4 py-2 rounded w-full sm:w-auto">
            <option>---</option>
          </select>

          {/* Language Switcher */}
          <select className="bg-white text-black px-4 py-2 rounded w-full sm:w-auto">
            <option>Bangla</option>
            <option>English</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
