// sidebar/Sidebar.js
import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        className={`fixed top-4 left-4 z-20 ${isOpen ? 'hidden' : 'block'}`}
        onClick={toggleSidebar}
      >
        <img src={assets.menu_icon} alt="Menu" className="w-8 h-8" />
      </button>

      {/* Sidebar */}
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-10`}
        style={{ width: '250px' }}
      >
        <div className="flex items-center justify-between h-20 p-4 border-b border-gray-700">
          <h1 className="text-2xl font-bold">Gemini Chat</h1>
          <button onClick={toggleSidebar} className="focus:outline-none">
            <img src={assets.menu_icon} alt="Close" className="w-8 h-8" />
          </button>
        </div>
        <nav className="mt-10 space-y-2">
          <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-700 transition">
            <img src={assets.history_icon} alt="History" className="w-6 h-6 mr-2" />
            History
          </a>
          <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-700 transition">
            <img src={assets.plus_icon} alt="New Chat" className="w-6 h-6 mr-2" />
            New Chat
          </a>
          <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-700 transition">
            <img src={assets.question_icon} alt="Help" className="w-6 h-6 mr-2" />
            Help
          </a>
          <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-700 transition">
            <img src={assets.setting_icon} alt="Settings" className="w-6 h-6 mr-2" />
            Settings
          </a>
          <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-700 transition">
            <img src={assets.user_icon} alt="Profile" className="w-6 h-6 mr-2" />
            Profile
          </a>
          {/* Add more links as necessary */}
        </nav>
        <div className="mt-auto p-4 border-t border-gray-700">
          <button className="w-full py-2.5 px-4 rounded bg-red-600 hover:bg-red-700 transition duration-200">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
