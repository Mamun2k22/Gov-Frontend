import React from "react";
import Expert from "./Expert";

const About = () => {
  return (
    <div className="lg:mt-36">
      <div
          id="Ready"
          class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
        >
          
          <div class="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 lg:gap-8 gap-6">
            <div class="h-36 sm:h-56 flex flex-col justify-center border hover:border-red-500 rounded-xl text-center p-4 md:p-5 dark:border-gray-700 hover:shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <div class="flex justify-center items-center w-12 h-12 bg-red-600  rounded-lg mx-auto">
                <svg
                  class="flex-shrink-0 w-7 h-7 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="18" height="10" x="3" y="11" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" x2="8" y1="16" y2="16" />
                  <line x1="16" x2="16" y1="16" y2="16" />
                </svg>
              </div>

              <div class="mt-3">
                <h3 class="text-sm sm:text-base font-poppins sm:text-lg font-medium text-white dark:text-gray-200">
                  Creative minds
                </h3>
              </div>
            </div>

            <div class="h-36 sm:h-56 flex flex-col justify-center border hover:border-red-500 rounded-xl text-center p-4 md:p-5 dark:border-gray-700 hover:shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <div class="flex justify-center items-center w-12 h-12 bg-red-600  bg-red-600  rounded-lg mx-auto">
                <svg
                  class="flex-shrink-0 w-7 h-7 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m7.5 4.27 9 5.15" />
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                  <path d="m3.3 7 8.7 5 8.7-5" />
                  <path d="M12 22V12" />
                </svg>
              </div>

              <div class="mt-3">
                <h3 class="text-sm sm:text-base font-poppins sm:text-lg font-medium text-white dark:text-gray-200">
                  Effortless updates
                </h3>
              </div>
            </div>

            <div class="h-36 sm:h-56 flex flex-col justify-center border hover:border-red-500 rounded-xl text-center p-4 md:p-5 dark:border-gray-700 hover:shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <div class="flex justify-center items-center w-12 h-12 bg-red-600   rounded-lg mx-auto">
                <svg
                  class="flex-shrink-0 w-7 h-7 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>

              <div class="mt-3">
                <h3 class="text-sm sm:text-base font-poppins sm:text-lg font-medium text-white dark:text-gray-200">
                  Strong empathy
                </h3>
              </div>
            </div>

            <div class="h-36 sm:h-56 flex flex-col justify-center border hover:border-red-500 rounded-xl text-center p-4 md:p-5 dark:border-gray-700 hover:shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <div class="flex justify-center items-center w-12 h-12 bg-red-600   rounded-lg mx-auto">
                <svg
                  class="flex-shrink-0 w-7 h-7 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.28 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.28 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>

              <div class="mt-3">
                <h3 class="text-sm sm:text-base font-poppins sm:text-lg font-medium text-white dark:text-gray-200">
                  Conquer the best
                </h3>
              </div>
            </div>

            <div class="h-36 sm:h-56 flex flex-col justify-center border hover:border-red-500 rounded-xl text-center p-4 md:p-5 dark:border-gray-700 hover:shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <div class="flex justify-center items-center w-12 h-12 bg-red-600   rounded-lg mx-auto">
                <svg
                  class="flex-shrink-0 w-7 h-7 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>

              <div class="mt-3">
                <h3 class="text-sm sm:text-base font-poppins sm:text-lg font-medium text-white dark:text-gray-200">
                  Designing for people
                </h3>
              </div>
            </div>

            <div class="h-36 sm:h-56 flex flex-col justify-center border hover:border-red-500 rounded-xl text-center p-4 md:p-5 dark:border-gray-700 hover:shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <div class="flex justify-center items-center w-12 h-12 bg-red-600   rounded-lg mx-auto">
                <svg
                  class="flex-shrink-0 w-7 h-7 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
              </div>

              <div class="mt-3">
                <h3 class="text-sm sm:text-base font-poppins sm:text-lg font-medium text-white dark:text-gray-200">
                  Simple and affordable
                </h3>
              </div>
            </div>

            <div class="h-36 sm:h-56 flex flex-col justify-center border hover:border-red-500 rounded-xl text-center p-4 md:p-5 dark:border-gray-700 hover:shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <div class="flex justify-center items-center w-12 h-12 bg-red-600   rounded-lg mx-auto">
                <svg
                  class="flex-shrink-0 w-7 h-7 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M2 3h20" />
                  <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                  <path d="m7 21 5-5 5 5" />
                </svg>
              </div>

              <div class="mt-3">
                <h3 class="text-sm sm:text-base font-poppins sm:text-lg font-medium text-white dark:text-gray-200">
                  Get freelance work
                </h3>
              </div>
            </div>

            <div class="h-36 sm:h-56 flex flex-col justify-center border hover:border-red-500 rounded-xl text-center p-4 md:p-5 dark:border-gray-700 hover:shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <div class="flex justify-center items-center w-12 h-12 bg-red-600   rounded-lg mx-auto">
                <svg
                  class="flex-shrink-0 w-7 h-7 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                  <path d="M2 7h20" />
                  <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
                </svg>
              </div>

              <div class="mt-3">
                <h3 class="text-sm sm:text-base font-poppins sm:text-lg font-medium text-white dark:text-gray-200">
                  Sell your goods
                </h3>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default About;
