import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [selectedFloor, setSelectedFloor] = useState(null);

  const buildings = [
    { name: "CB2 Building", img: "/image/cb2.png", floors: [ 2,3 ], location: "CB2" },
    { name: "LX Building", img: "/image/lx.png", floors: [10, 11, 12], location: "LX" },
    { name: "SIT Building", img: "/image/sit.png", floors: [1, 2], location: "SIT" },
  ];

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-6xl px-4">
        {buildings.map((building, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-4 cursor-pointer hover:scale-105"
            onClick={() => setSelectedBuilding(building)}
          >
            <img src={building.img} alt={building.name} className="w-full h-60 object-cover rounded-lg" />
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
              {selectedBuilding.floors.map((floor) => (
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
    </div>
  );
}