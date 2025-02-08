
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [selectedBuilding, setSelectedBuilding] = useState(["LX Building"]);
  const [selectedFloor, setSelectedFloor] = useState("10th Floor");

  const handleBooking = () => {
    navigate(`/booking?location=${selectedBuilding}&floor=${selectedFloor}`);
  };

  return (
    <div className="flex flex-col items-center bg-blue-100 min-h-screen p-6">
      {/* 🔹 ยินดีต้อนรับ */}
      <h1 className="text-3xl font-bold text-center text-gray-700 mt-6">
        ยินดีต้อนรับ!
      </h1>

      {/* 🔹 ปฏิทิน
      <div className="bg-white p-4 rounded-lg shadow-md mt-4 w-full max-w-3xl">
        <h2 className="text-lg font-semibold text-blue-900">Upcoming Booking Schedule</h2>
        <input type="date" className="w-full border p-2 rounded mt-2" />
      </div> */}

      {/* 🔹 Dropdown เลือกอาคารและชั้น */}
      <div className="flex flex-col md:flex-row items-center mt-6 space-x-4">
        <select
          className="bg-blue-500 text-white p-2 rounded-lg"
          value={selectedBuilding}
          onChange={(e) => setSelectedBuilding(e.target.value)}
        >
          <option>LX Building</option>
          <option>CB2 Building</option>
          <option>SIT Building</option>
        </select>

        <select
          className="bg-blue-500 text-white p-2 rounded-lg"
          value={selectedFloor}
          onChange={(e) => setSelectedFloor(e.target.value)}
        >
          <option>10th Floor</option>
          <option>11th Floor</option>
          <option>12th Floor</option>
        </select>

        <button className="bg-green-500 text-white p-2 rounded-lg" onClick={handleBooking}>
          ไปจอง
        </button>
      </div>

      {/* 🔹 ภาพแต่ละอาคารที่กดแล้วไปหน้าจอง */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full max-w-5xl">
        {[
          { name: "CB2 Building", img: "/image/cb2.png", link: "/booking?location=CB2" },
          { name: "LX Building", img: "/image/lx.png", link: "/booking?location=LX" },
          { name: "SIT Building", img: "/image/sit.png", link: "/booking?location=SIT" },
        ].map((building, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden p-4 cursor-pointer hover:scale-105"
            onClick={() => navigate(building.link)}>
            <img src={building.img} alt={building.name} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-center mt-3 font-bold">{building.name}</h3>
          </div>
        ))}
      </div>

      {selectedBuilding && (
        <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-gray-900 bg-opacity-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
            <h2 className="text-xl font-bold text-center">{selectedBuilding.name}</h2>
            <p className="mt-2 text-center">กรุณาเลือกชั้น:</p>
            <div className="flex justify-center gap-2 mt-3">
              {selectedBuilding.map((floor) => (
                <button
                  key={floor}
                  className={`px-4 py-2 rounded-lg ${selectedFloor === floor ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                  onClick={() => setSelectedFloor(floor)}
                >
                  ชั้น {floor}
                </button>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
                disabled={!selectedFloor}
                onClick={() => navigate(`/bookingpage`)}
              >
                เลือกห้อง
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={() => setSelectedBuilding(null)}>
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      )}
=======
    </div>
  );
}

export default Home;
