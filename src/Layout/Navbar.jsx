import React, { useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaGlobe, FaUser, FaBell, FaBook, FaQuestionCircle } from "react-icons/fa";

const MenuItem = ({ icon, label }) => (
  <button className="w-full flex items-center space-x-4 px-4 py-3 rounded-lg bg-gray-100">
    <span className="text-blue-500 text-xl">{icon}</span>
    <span className="text-lg font-medium">{label}</span>
  </button>
);

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-2">
        <img src="/image/logoSIT1.png" alt="Logo" className="w-10" />
        <h1 className="text-xl font-bold">Room Booking</h1>
      </Link>
      
      <div className="flex items-center space-x-4 ml-auto">
  {/* Language Switcher */}
  <button
    onClick={toggleLanguage}
    className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:text-blue-600 transition bg-gray-100 hover:bg-gray-200"
  >
    <FaGlobe className="text-blue-500" />
    <span>{language === "th" ? "ภาษาไทย" : "English"}</span>
  </button>
</div>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(true)}>
        <FaBars className="text-2xl text-black" />
      </button>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-80 backdrop-blur-lg z-50 flex justify-center items-center">
          <div className="bg-white shadow-lg w-4/5 sm:w-1/3 rounded-lg p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Menu</h2>
              <button onClick={() => setIsOpen(false)}>
                <FaTimes className="text-2xl text-gray-500" />
              </button>
            </div>
            
            {/* Menu Items */}
            <div className="space-y-4 mt-4">
              <MenuItem icon={<FaUser />} label={language === "th" ? "โปรไฟล์" : "Profile"} />
              <MenuItem icon={<FaQuestionCircle />} label={language === "th" ? "ขอเสนอแนะ" : "Suggestions"} />
              <MenuItem icon={<FaBell />} label={language === "th" ? "แจ้งเตือน" : "Notifications"} />
              <MenuItem icon={<FaBook />} label={language === "th" ? "คู่มือ" : "Guide"} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
