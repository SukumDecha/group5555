import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BookingTable from "./bookingTable"; // ✅ ตรวจสอบ path
import RoomSelector from "../../UI/RoomSelector"; // ✅ แก้ path
import BookingPopup from "./BookingPopup"; // ✅ ตรวจสอบ path

const BookingPage = () => {
  const location = useLocation();
  const [selectedBuilding, setSelectedBuilding] = useState("CB Building");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // ดึงค่าห้องจาก URL (ถ้ามี)
  useEffect(() => {
    const room = new URLSearchParams(location.search).get("room");
    if (room) setSelectedRoom(room);
  }, [location.search]);

  return (
    <div className="container full-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-700 mt-4">Room Booking</h1>

      {/* 🔹 เลือกอาคารและห้อง */}
      <RoomSelector
        selectedBuilding={selectedBuilding}
        setSelectedBuilding={setSelectedBuilding}
        selectedRoom={selectedRoom}
        setSelectedRoom={setSelectedRoom}
      />

      {/* 🔹 แสดงตารางจอง */}
      {selectedRoom && (
        <BookingTable selectedBuilding={selectedBuilding} selectedRoom={selectedRoom} />
      )}

      {/* 🔹 ปุ่มจองห้อง */}
      <div className="mt-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => setShowPopup(true)}
        >
          Book Now
        </button>
      </div>

      {/* 🔹 Popup สำหรับจอง */}
      {showPopup && (
        <BookingPopup
          room={selectedRoom}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default BookingPage;

