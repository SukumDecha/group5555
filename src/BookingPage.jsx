<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RoomList from "./RoomList";
import getRooms from "./GetRoom";

=======
import { useState } from "react";
import Calendar from "./Calendar";
import BookingTable from "./BookingTable";
import RoomSelector from "./RoomSelector";
import BookingPopup from "./BookingPopup";
>>>>>>> parent of 1359fbc (Merge pull request #51 from ludacapo4646/group22)

const BookingPage = () => {
  const [selectedRoom, setSelectedRoom] = useState("CB2");
  const [selectedFloor, setSelectedFloor] = useState("10th Floor");
  const [selectedTime, setSelectedTime] = useState(null);
  const [isBookingPopupOpen, setBookingPopupOpen] = useState(false);

  const handleSlotClick = (time) => {
    setSelectedTime(time);
    setBookingPopupOpen(true);
  };
 
  return (
    <div className="container full-screen flex flex-col items-center">
      
      {/* ✅ Dropdown เลือกอาคารและชั้น */}
      <div className="w-full max-w-2xl flex justify-center mt-4">
        <RoomSelector selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom}
                      selectedFloor={selectedFloor} setSelectedFloor={setSelectedFloor} />
      </div>

      {/* ✅ ตารางเวลาที่สามารถกดเลือกจองได้ */}
      <div className="w-full max-w-3xl flex justify-center mt-4">
        <BookingTable selectedRoom={selectedRoom} onSlotClick={handleSlotClick} />
      </div>

      {/* ✅ Popup จอง */}
      {isBookingPopupOpen && <BookingPopup time={selectedTime} room={selectedRoom} onClose={() => setBookingPopupOpen(false)} />}
    </div>
  );
};

export default BookingPage;
