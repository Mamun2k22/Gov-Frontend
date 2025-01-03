import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

export const AddTeacher = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
   <button
  onClick={handleOpen}
  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md"
>
  <FaPlus />
  Add Teacher
</button>


      {/* Dialog Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" max-w-[355px] lg:max-w-xl bg-white p-6 rounded-lg shadow-lg">
            <div className="relative">
              <h4 className="text-2xl font-semibold text-gray-800">Manage Teacher</h4>
              <p className="mt-1 text-gray-600">Keep your records up-to-date and organized.</p>
              <button
                onClick={handleOpen}
                className="absolute top-3 right-3 text-gray-800 hover:text-red-500"
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4 mt-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Teacher Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter teacher name"
                  className="mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Teacher Email
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter student email"
                  className="mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Category Select */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Suject Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Bangla</option>
                  <option>English</option>
                  <option>Math</option>
                </select>
              </div>

              {/* Weight Input */}
              <div className="flex gap-4">
                <div className="w-full">
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                  Roll Number
                  </label>
                  <input
                    type="text"
                    id="weight"
                    name="roll"
                    placeholder="Enter Roll"
                    className="mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="size" className="block text-sm font-medium text-gray-700">
                    Id Number
                  </label>
                  <input
                    type="number"
                    id="id"
                    name="id"
                    placeholder="Roll number"
                    className="mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Description Input */}
              {/* <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description (Optional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  placeholder="eg. This is a white shoes with a comfortable sole."
                  className="mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div> */}
            </div>

            {/* Footer with Buttons */}
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={handleOpen}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleOpen}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Add Teacher
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
