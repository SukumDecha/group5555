import React, { useState } from "react";
import Calendar from "../components/Calendar";
import BookingTable from "../components/BookingTable";
import RoomSelector from "../components/RoomSelector";
import BookingPopup from "../components/BookingPopup";
import DateButton from "./components/DateButton"; // ✅ เพิ่ม DateButton

const BookingPage = () => {
  const [selectedRoom, setSelectedRoom] = useState("CB2");
  const [selectedFloor, setSelectedFloor] = useState("10th Floor");
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null); // ✅ เพิ่มตัวแปรเลือกวัน
  const [isBookingPopupOpen, setBookingPopupOpen] = useState(false);

  const handleSlotClick = (time) => {
    setSelectedTime(time);
    setBookingPopupOpen(true);
  };

  return (
    <div className="container full-screen flex flex-col items-center">
      {/* 🔽 Dropdown เลือกห้องและชั้น */}
      <div className="w-full max-w-2xl flex justify-center mt-4">
        <RoomSelector 
          selectedRoom={selectedRoom} 
          setSelectedRoom={setSelectedRoom} 
          selectedFloor={selectedFloor} 
          setSelectedFloor={setSelectedFloor} 
        />
      </div>

      {/* 📅 เลือกวันที่ */}
      <div className="flex space-x-2 justify-center mt-4">
        {["07 ม.ค.", "08 ม.ค.", "09 ม.ค."].map((day, index) => (
          <DateButton key={index} day={day} date={{ date: day }} state={selectedDate} setState={setSelectedDate} />
        ))}
      </div>

      {/* 🏢 ตารางการจอง */}
      <div className="w-full max-w-2xl flex justify-center mt-4">
        <BookingTable selectedRoom={selectedRoom} onSlotClick={handleSlotClick} />
      </div>

      {/* 🔘 Popup จองห้อง */}
      {isBookingPopupOpen && (
        <BookingPopup 
          time={selectedTime || "N/A"} // ✅ ป้องกัน `null`
          room={selectedRoom} 
          date={selectedDate?.date || "N/A"} // ✅ ส่งวันที่ที่เลือกไป
          onClose={() => setBookingPopupOpen(false)}
        />
      )}
    </div>
  );
};

export default BookingPage;
