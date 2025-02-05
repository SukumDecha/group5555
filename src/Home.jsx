// import { useContext } from "react";
// import { LanguageContext } from "./LanguageContext";
// import { Link } from "react-router-dom";
// import { FaBuilding } from "react-icons/fa";

// function Home() {
//   const { language } = useContext(LanguageContext);

//   return (
//     <div className="flex flex-col items-center bg-blue-200 min-h-screen">
//       {/* Welcome Section */}
//       <div className="w-full h-48 bg-primary flex items-center justify-center text-black text-2xl font-bold">
//         {language === "th" ? "ยินดีต้อนรับ!" : "Welcome to the Room SITBooking!"}
//       </div>

//       {/* Building Selection */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-6 w-full max-w-5xl">
//         {["CB2 Building", "LX Building", "SIT Building"].map((building, index) => (
//           <Link key={index} to="/booking" className="block bg-white shadow-md rounded-lg overflow-hidden">
//             <img
//               src={`https://source.unsplash.com/400x300/?building&sig=${index}`}
//               alt={building}
//               className="w-full h-40 object-cover"
//             />
//             <div className="p-4 flex items-center">
//               <FaBuilding className="text-blue-500 mr-2" />
//               <h3 className="text-lg font-semibold">{building}</h3>
//             </div>
//           </Link>
//         ))}
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white p-6 mt-10 w-full text-center">
//         <p>{language === "th" ? "จองห้องประชุมที่ SIT" : "SIT Booking System"}</p>
//         <p>126 ถนนประชาอุทิศ เขตทุ่งครุ กรุงเทพฯ 10140</p>
//         <p>Email: webadmin@sit.kmutt.ac.th</p>
//       </footer>
//     </div>
//   );
// }

// export default Home;

import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { Link } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";

function Home() {
    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
        <div className="flex flex-col items-center bg-blue-200 min-h-screen">
            {/* Welcome Section */}
            <div className="w-full h-48 bg-primary flex items-center justify-center text-black text-2xl font-bold">
                {language === "th" ? "ยินดีต้อนรับ!" : "Welcome to the Room SITBooking!"}
            </div>

            {/* Toggle Language Button */}
            <button onClick={toggleLanguage} className="mt-4 p-2 bg-gray-700 text-white rounded">
                {language === "th" ? "เปลี่ยนภาษา" : "Change Language"}
            </button>

            {/* Building Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-6 w-full max-w-5xl">
                {["CB2 Building", "LX Building", "STI Building"].map((building, index) => (
                    <Link key={index} to="/booking" className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 cursor-pointer">
                        <img src={`https://source.unsplash.com/400x300/?building&sig=${index}`} alt={building} className="w-full h-40 object-cover" />
                        <div className="p-4 text-center font-semibold">{building}</div>
                    </Link>
                ))}
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white p-6 mt-10 w-full text-center">
                <p>{language === "th" ? "จองห้องประชุม SIT" : "SIT Booking System"}</p>
                <p>126 ถนนประชาอุทิศ แขวงทุ่งครุ กรุงเทพฯ 10140</p>
                <p>Email: webadmin@sit.kmutt.ac.th</p>
            </footer>
        </div>
    );
}

export default Home;
