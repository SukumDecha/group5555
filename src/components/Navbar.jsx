
// import { useState, useContext } from "react";
// import { LanguageContext } from "./LanguageContext";
// import { FaBars, FaTimes, FaUser, FaQuestionCircle, FaBell, FaBook, FaGlobe } from "react-icons/fa";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const { language, toggleLanguage } = useContext(LanguageContext);
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="w-full py-4 px-6 flex justify-between items-center">
//         <Link to="/" className="flex items-center space-x-2">
//           <img src="/image/logoSIT1.png" alt="Logo" className="w-30 h-15" />
//           <p className="text-2xl font-bold text-primary">Booking</p>
//         </Link>
//         <div className="flex items-center space-x-4">
//           {/* Language Switcher */}
//           <button
//             onClick={toggleLanguage}
//             className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:text-blue-600 transition"
//           >
//             <FaGlobe className="text-blue-500" />
//             <span>{language === "th" ? "ภาษาไทย" : "English"}</span>
//           </button>

//           {/* Menu Button */}
//           <button onClick={() => setIsOpen(true)}>
//             <FaBars className="text-2xl text-black" />
//           </button>
//         </div>
//       </nav>

//       {/* Sidebar / Mobile Menu */}
//       {isOpen && (
//         <div className="fixed top-0 left-0 w-full h-full bg-opacity-10 backdrop-blur-lg z-50 flex justify-end">
//           <div className="w-4/5 sm:w-1/3 bg-white shadow-lg h-full p-6 space-y-6 rounded-lg">
//             {/* Close Button */}
//             <div className="flex justify-between items-center">
//               <h2 className="text-xl font-semibold text-primary">Menu</h2>
//               <button onClick={() => setIsOpen(false)}>
//                 <FaTimes className="text-2xl text-gray-500" />
//               </button>
//             </div>

//             {/* Menu Items */}
//             <div className="space-y-4">
//               <MenuItem icon={<FaUser />} label={language === "th" ? "โปรไฟล์" : "Profile"} />
//               <MenuItem icon={<FaQuestionCircle />} label={language === "th" ? "ขอเสนอแนะ" : "Feedback"} />
//               <MenuItem icon={<FaBell />} label={language === "th" ? "แจ้งเตือน" : "Notifications"} />
//               <MenuItem icon={<FaBook />} label={language === "th" ? "คู่มือ" : "Guide"} />
              
//               {/* Language Switcher in Sidebar */}
//               <button
//                 onClick={toggleLanguage}
//                 className="w-full flex items-center justify-between px-4 py-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
//               >
//                 <div className="flex items-center space-x-2">
//                   <FaGlobe className="text-blue-500" />
//                   <span>{language === "th" ? "ภาษาไทย" : "English"}</span>
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// // Menu Item Component
// const MenuItem = ({ icon, label }) => (
//   <button className="w-full flex items-center space-x-4 px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
//     <span className="text-blue-500 text-xl">{icon}</span>
//     <span className="text-lg font-medium">{label}</span>
//   </button>
// );

// export default Navbar;


import React, { useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";

function Navbar() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  // ✅ ฟังก์ชันเปลี่ยนภาษา และบันทึกลง localStorage
  const toggleLanguage = () => {
    const newLang = language === "th" ? "en" : "th";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center bg-white shadow-md">
      
      {/* 🔹 Logo และชื่อเว็บไซต์ */}
      <Link to="/" className="flex items-center space-x-2">
        <img src="/assets/logoSIT.png" alt="Logo" className="w-30 h-15" />
        <p className="text-2xl font-bold text-primary">Booking</p>
      </Link>

      {/* 🔹 ปุ่มเปลี่ยนภาษา */}
      <button onClick={toggleLanguage} className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 hover:text-blue-600 transition">
        <FaGlobe className="text-blue-500" />
        <span>{language === "th" ? "ภาษาไทย" : "English"}</span>
      </button>

      {/* 🔹 Sidebar Menu */}
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes className="text-2xl text-black" /> : <FaBars className="text-2xl text-black" />}
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-black flex justify-end">
          <div className="bg-white shadow-lg w-64 h-full p-6">
            <button className="text-xl font-semibold text-primary" onClick={() => setIsOpen(false)}>Menu ✖</button>
            <div className="space-y-4 mt-4">
              <Link to="/profile" className="block p-2 text-gray-700 hover:bg-gray-200">{language === "th" ? "โปรไฟล์" : "Profile"}</Link>
              <Link to="/feedback" className="block p-2 text-gray-700 hover:bg-gray-200">{language === "th" ? "ข้อเสนอแนะ" : "Feedback"}</Link>
              <Link to="/notifications" className="block p-2 text-gray-700 hover:bg-gray-200">{language === "th" ? "การแจ้งเตือน" : "Notifications"}</Link>
            </div>
          </div>
        </div>
      )}
      
    </nav>
  );
}

export default Navbar;
