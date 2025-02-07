import React from "react";
import { useNavigate } from "react-router-dom";
import RoomSelector from "./UI/RoomSelector"; // ✅ Fixed Path

const Home = () => {
  const navigate = useNavigate();
  const rooms = [
    { name: "CB2 Building", img: "/image/cb2.png", id: "CB2" },
    { name: "LX Building", img: "/image/lx.png", id: "LX" },
    { name: "SIT Building", img: "/image/sit.png", id: "SIT" },
  ];

  return (
    <div className="flex flex-col items-center bg-blue-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-700 mt-6">Welcome to Room Booking</h1>
      <RoomSelector /> {/* ✅ Uses correct path */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full max-w-5xl">
        {rooms.map(({ name, img, id }) => (
          <div key={id} className="bg-white shadow-lg rounded-lg overflow-hidden p-4 cursor-pointer" onClick={() => navigate(`/booking?room=${id}`)}>
            <img src={img} alt={name} className="w-full h-40 object-cover" />
            <h3 className="text-center mt-3 font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
