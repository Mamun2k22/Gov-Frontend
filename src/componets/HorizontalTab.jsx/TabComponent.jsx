import React, { useState, useEffect } from "react";
import { FaNewspaper, FaPlus, FaUser } from "react-icons/fa";
import { FiPlus, FiX, FiAward, FiBook, FiBox, FiCoffee } from "react-icons/fi";
import Noticeboard from "../dashboard/Noticeboard";
import Newsboard from "../dashboard/Newsboard";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState([
    {
      id: 1,
      title: "Dashboard",
      icon: <FiAward className="mr-2" />,
      content: (
        <div className="p-4">
          <h3 className="text-xl font-bold mb-4">Dashboard Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Analytics"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600">
                Your analytics data and insights will appear here.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Statistics"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600">
                Statistical analysis and reports section.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Add Notice",
      icon: <FiBook className="mr-2" />,
      content: (
     <div>
      <Noticeboard/>
     </div>
      ),
    },
    {
      id: 3,
      title: "Add News",
      icon: <FiBox className="mr-2" />,
      content: (
        <div>
        <Newsboard/>
        </div>
      ),
    },
    {
      id: 3,
      title: "Profile",
      icon: <FaUser className="mr-2" />,
      content: (
        <div className="p-4">
          <h3 className="text-xl font-bold mb-4">Account Settings</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Save Changes
            </button>
          </form>
        </div>
      ),
    },
  ]);

  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab");
    if (savedTab) {
      setActiveTab(parseInt(savedTab));
    }
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
    localStorage.setItem("activeTab", index);
  };

  return (
    <div className="max-w-6xl mx-auto p-4" role="tablist">
      <div className="mb-8 ">
        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`tabpanel-${index}`}
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                activeTab === index
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.icon}
              <span>{tab.title}</span>
              {index !== 0 && (
                <FiX
                  className="ml-2 hover:text-red-500"
                  onClick={(e) => removeTab(index, e)}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6  border border-blue-500">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            className={`transition-opacity duration-300 ${
              activeTab === index ? "block" : "hidden"
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
