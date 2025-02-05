
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate(); // ใช้ navigate เพื่อเปลี่ยนหน้า

  // ฟังก์ชันเมื่อคลิกรูปภาพให้ไปหน้า Booking
  const handleBooking = (building) => {
    navigate(`/booking?location=${encodeURIComponent(building)}`);
  };

  return (
    <div className="flex flex-col items-center bg-blue-200 min-h-screen">
      {/* Booking Location Section */}
      <div className="w-full max-w-5xl mt-8 px-6">
        <h2 className="text-white text-xl font-bold bg-blue-900 py-2 px-6 rounded-lg inline-block">
          {language === "th" ? "สถานที่ในการจอง" : "Booking Location"}
        </h2>

        {/* Location Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {[
            { name: "CB2 Building", img: "/image/cb2.png" },
            { name: "LX Building", img: "/image/lx.png" },
            { name: "SIT Building", img: "/image/sit.png" },
          ].map((building, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-lg overflow-hidden p-4 cursor-pointer transition transform hover:scale-105 hover:shadow-2xl"
              onClick={() => handleBooking(building.name)}
            >
              <img 
                src={building.img} 
                alt={building.name} 
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="mt-3">
                <select className="w-full bg-blue-500 text-white p-2 rounded-lg text-center">
                  <option>{building.name}</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-6 mt-10 w-full text-center">
        <div className="flex flex-col sm:flex-row items-center justify-between px-4">
          <img src="/images/sit_logo.png" alt="SIT Logo" className="w-20" />
          <p className="text-sm">
            +662 470 9850 <br />
            126 ถนนประชาอุทิศ เขตบางมด เขตทุ่งครุ กรุงเทพฯ 10140 <br />
            webadmin@sit.kmutt.ac.th <br />
            @sit.kmutt
          </p>
          <a href="https://sit.kmutt.ac.th" className="text-blue-300 underline">
            SIT WEBSITE
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
