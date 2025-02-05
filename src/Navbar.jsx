// import { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes, FaUser, FaGlobe, FaBell, FaQuestionCircle, FaBook } from "react-icons/fa";
// import { LanguageContext } from "./LanguageContext"; // ✅ นำเข้า Context

// function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const { language, toggleLanguage } = useContext(LanguageContext); // ✅ ใช้ Context

//     return (
//         <nav className="bg- shadow-md fixed w-full top-0 left-0 z-50">
//             <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//                 <Link to="/" className="text-2xl font-bold text-primary">SITBooking</Link>

//                 {/* Hamburger Menu Button */}
//                 <button onClick={() => setMenuOpen(!menuOpen)} className="text-primary text-3xl">
//                     {menuOpen ? <FaTimes /> : <FaBars />}
//                 </button>
//             </div>

//             {/* Sidebar Menu */}
//             <div className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
//                 <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-primary text-2xl">
//                     <FaTimes />
//                 </button>

//                 <ul className="mt-16 space-y-4 px-6 text-lg">
//                     <li className="flex items-center space-x-3">
//                         <FaUser className="text-blue-500" />
//                         <span>{language === "th" ? "โปรไฟล์" : "Profile"}</span>
//                     </li>
//                     <li className="flex items-center space-x-3">
//                         <FaQuestionCircle className="text-blue-500" />
//                         <span>{language === "th" ? "ข้อเสนอแนะ" : "Feedback"}</span>
//                     </li>
//                     <li className="flex items-center space-x-3">
//                         <FaBell className="text-blue-500" />
//                         <span>{language === "th" ? "แจ้งเตือน" : "Notifications"}</span>
//                     </li>
//                     <li className="flex items-center space-x-3">
//                         <FaBook className="text-blue-500" />
//                         <span>{language === "th" ? "คู่มือ" : "Guide"}</span>
//                     </li>
//                     <li className="flex items-center space-x-3 bg-gray-100 p-2 rounded-lg cursor-pointer" onClick={toggleLanguage}>
//                         <FaGlobe className="text-blue-500" />
//                         <span>{language === "th" ? "English" : "ภาษาไทย"}</span>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }


// import { FaGlobe, FaBars } from "react-icons/fa"; // นำเข้าไอคอน
// import { useContext } from "react";
// import { LanguageContext } from "./LanguageContext";

// function Navbar({ toggleSidebar }) {
//     const { language, toggleLanguage } = useContext(LanguageContext);

//     return (
//         <nav className="w-full bg-white shadow-md py-4 px-6 flex items-center justify-between">
//             {/* ปุ่มเปลี่ยนภาษา (อยู่ชิดซ้าย) */}
//             <button onClick={toggleLanguage} className="flex items-center text-lg text-primary">
//                 <FaGlobe className="mr-2" />
//                 {language === "th" ? "ภาษาไทย" : "English"}
//             </button>

//             {/* ชื่อเว็บ หรือ Logo อยู่กึ่งกลาง */}
//             <h1 className="text-2xl font-bold text-primary absolute left-1/2 transform -translate-x-1/2">
//                 SITBooking
//             </h1>

//             {/* ปุ่ม Hamburger Menu (ชิดขวา) */}
//             <button onClick={toggleSidebar} className="text-2xl">
//                 <FaBars />
//             </button>
//         </nav>
//     );
// }

import { useState, useContext } from "react";
import { Link } from "react-router-dom"; // ✅ นำเข้า Link
import { LanguageContext } from "./LanguageContext";
import { FaBars, FaTimes, FaUser, FaQuestionCircle, FaBell, FaBook, FaGlobe } from "react-icons/fa";

function Navbar() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
        {/* คลิกที่ "SIT Booking" เพื่อกลับไปหน้า Home */}
        <Link to="/" className="text-2xl font-bold text-primary">
          SIT Booking
        </Link>

        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          >
            <FaGlobe className="text-blue-500" />
            <span>{language === "th" ? "ภาษาไทย" : "English"}</span>
          </button>

          {/* Menu Button */}
          <button onClick={() => setIsOpen(true)}>
            <FaBars className="text-2xl text-black" />
          </button>
        </div>
      </nav>

      {/* Sidebar / Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-10 backdrop-blur-lg z-50 flex justify-end">
          <div className="w-4/5 sm:w-1/3 bg-white shadow-lg h-full p-6 space-y-6 rounded-lg">
            {/* Close Button */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-primary">Menu</h2>
              <button onClick={() => setIsOpen(false)}>
                <FaTimes className="text-2xl text-gray-500" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="space-y-4">
              <MenuItem icon={<FaUser />} label="โปรไฟล์" />
              <MenuItem icon={<FaQuestionCircle />} label="ขอเสนอแนะ" />
              <MenuItem icon={<FaBell />} label="แจ้งเตือน" />
              <MenuItem icon={<FaBook />} label="คู่มือ" />

              {/* Language Switcher in Sidebar */}
              <button
                onClick={toggleLanguage}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
              >
                <div className="flex items-center space-x-2">
                  <FaGlobe className="text-blue-500" />
                  <span>{language === "th" ? "ภาษาไทย" : "English"}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Menu Item Component
const MenuItem = ({ icon, label }) => (
  <button className="w-full flex items-center space-x-4 px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
    <span className="text-blue-500 text-xl">{icon}</span>
    <span className="text-lg font-medium">{label}</span>
  </button>
);

export default Navbar;
