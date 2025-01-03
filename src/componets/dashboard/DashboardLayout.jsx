import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaChalkboardTeacher, FaHome, FaMagnet } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";
import { HiSearch, HiX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

const DashboardLayout = () => {
  const [mobleToggle, setMobileToggle] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Toggle drawer visibility
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <div>
      <>
        <div className="flex justify-between mx-4 items-center md:hidden block">
          <div>
            <Link to={"/"}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyVUlMSBzvPmEmq4iU3ZVm1VEzdATNRg_jg&s"
                alt="organic"
                className="lg:h-14 h-8 w-auto object-cover"
              />
            </Link>
          </div>
          <div className="flex min-h-[10vh] items-center justify-center">
            <button
              onClick={() => setIsOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 transition"
            >
              ☰
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-start z-50 md:hidden block">
            <div className="w-64 bg-white p-5 shadow-lg h-full relative">
              {/* Close Icon */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition"
              >
                <HiX size={24} />
              </button>
              <h2 className="text-lg font-semibold mb-4">MENU</h2>
              <form className="pb-3 md:hidden">
                <div className="flex items-center border rounded px-2 py-1">
                  <HiSearch className="text-gray-500" />
                  <input
                    type="search"
                    placeholder="Search"
                    className="ml-2 w-full focus:outline-none"
                  />
                </div>
              </form>
              <nav className="mt-4">
                <ul>
                  <Link
                    to={"/dashboard/profile"}
                    class="flex items-center px-4 text-slate-600 hover:bg-indigo-100  hover:text-indigo-600 active:border-indigo-200 border border-transparent hover:shadow-sm hover:shadow-slate-300/50 active:bg-white/75 active:text-slate-800 active:shadow-slate-300/10  py-1.5 mt-4 transition-colors duration-300 transform rounded-md dark:text-gray-400  dark:hover:bg-gray-800 dark:hover:text-gray-200"
                  >
                    <CgProfile />
                    <span class="mx-4 font-medium">My Profile</span>
                  </Link>

                  <Link
                    to={"/"}
                    class="flex items-center px-4 text-slate-600 hover:bg-indigo-100  hover:text-indigo-600 active:border-indigo-200 border border-transparent hover:shadow-sm hover:shadow-slate-300/50 active:bg-white/75 active:text-slate-800 active:shadow-slate-300/10  py-1.5 mt-4 transition-colors duration-300 transform rounded-md dark:text-gray-400  dark:hover:bg-gray-800 dark:hover:text-gray-200"
                  >
                    <FaHome />

                    <span class="mx-4 font-medium">Home</span>
                  </Link>

                  <Link
                    to={"/dashboard/order"}
                    class="flex items-center px-4 text-slate-600 hover:bg-indigo-100  hover:text-indigo-600 active:border-indigo-200 border border-transparent hover:shadow-sm hover:shadow-slate-300/50 active:bg-white/75 active:text-slate-800 active:shadow-slate-300/10  py-1.5 mt-4 transition-colors duration-300 transform rounded-md dark:text-gray-400  dark:hover:bg-gray-800 dark:hover:text-gray-200"
                  >
                    {/* <img
                      className="h-5 w-5"
                      src="https://cdn-icons-png.flaticon.com/128/2435/2435292.png"
                      alt=""
                      srcset=""
                    /> */}
                    <FaChalkboardTeacher />

                    <span class="mx-4 font-medium">All Post</span>
                  </Link>

                  <hr class="my-6 border-gray-200 dark:border-gray-600" />

                  <button class="flex items-center px-4 text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200 border border-transparent hover:shadow-sm hover:shadow-slate-300/50 active:bg-white/75 active:text-slate-800 active:shadow-slate-300/10 py-1.5 mt-4 transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                    <svg
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span class="mx-4 font-medium">Logout</span>
                  </button>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </>

      <div className="flex font-poppins ">
        {/* Dashboard Sidebar */}
        <div
          className={`bg-[#f1f8f3] font-poppins md:block ${
            isDrawerOpen ? "block" : "hidden"
          }`}
        >
          <aside class="flex flex-col w-64 h-full md:h-screen px-4 py-8 border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 font">
            <div class="flex flex-col justify-between flex-1 mt-6  ">
              <nav>
                <ul>
                  <Link
                    to={"/"}
                    class="flex items-center px-4 text-slate-600 hover:bg-indigo-100  hover:text-indigo-600 active:border-indigo-200 border border-transparent hover:shadow-sm hover:shadow-slate-300/50 active:bg-white/75 active:text-slate-800 active:shadow-slate-300/10  py-1.5 mt-4 transition-colors duration-300 transform rounded-md dark:text-gray-400  dark:hover:bg-gray-800 dark:hover:text-gray-200"
                  >
                    <FaHome />

                    <span class="mx-4 font-medium">Home</span>
                  </Link>
                  <div className="relative">
                    <div className="relative group">
                      <Link className="flex items-center px-4 text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200 border border-transparent hover:shadow-sm hover:shadow-slate-300/50 active:bg-white/75 active:text-slate-800 active:shadow-slate-300/10 py-1.5 mt-4 transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                        <RxDashboard />
                        <span class="mx-4 font-medium">Dashboard</span>
                      </Link>
                    </div>

                    {/* Another menu */}
                    <div className="relative group">
                      <Link to={'/dashboard/teacher'} className="flex items-center px-4 text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200 border border-transparent hover:shadow-sm hover:shadow-slate-300/50 active:bg-white/75 active:text-slate-800 active:shadow-slate-300/10 py-1.5 mt-4 transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                        <FaChalkboardTeacher />
                        <span class="mx-4 font-medium">Teacher</span>
                      </Link>
                    </div>
                    <div className="relative group">
                      <Link to={'/dashboard/student'} className="flex items-center px-4 text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200 border border-transparent hover:shadow-sm hover:shadow-slate-300/50 active:bg-white/75 active:text-slate-800 active:shadow-slate-300/10 py-1.5 mt-4 transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                     <img className="h-5 w-5" src="https://cdn-icons-png.flaticon.com/128/17643/17643595.png" alt="" srcset="" />
                        <span class="mx-4 font-medium">Student</span>
                      </Link>
                    </div>
                    <div className="relative group">
                      <Link to={'/dashboard/profile'} className="flex items-center px-4 text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200 border border-transparent hover:shadow-sm hover:shadow-slate-300/50 active:bg-white/75 active:text-slate-800 active:shadow-slate-300/10 py-1.5 mt-4 transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                     <img className="h-5 w-5" src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" alt="" srcset="" />
                        {/* <FaCircleUser className="h-4 w-4"/> */}
                        <span class="mx-4 font-medium">Profile</span>
                      </Link>
                    </div>
                  </div>

                  <hr class="my-6 border-gray-200 dark:border-gray-600" />
                  <button class="flex items-center px-4 text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200 border border-transparent hover:shadow-sm hover:shadow-slate-300/50 active:bg-white/75 active:text-slate-800 active:shadow-slate-300/10 py-1.5 mt-4 transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                    <svg
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span class="mx-4 font-medium">Logout</span>
                  </button>
                </ul>
              </nav>
            </div>
          </aside>
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
