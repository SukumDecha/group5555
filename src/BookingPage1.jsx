import { useState } from "react";
import BookingTable from "./BookingTable";
import RoomSelector from "./RoomSelector";
import BookingPopup from "./BookingPopup";

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
    <div className="container flex flex-col items-center full-screen">
      
      {/* ✅ Dropdown เลือกอาคารและชั้น */}
      <div className="flex justify-center w-full max-w-2xl mt-4">
        <RoomSelector selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom}
                      selectedFloor={selectedFloor} setSelectedFloor={setSelectedFloor} />
      </div>

      {/* ✅ ตารางเวลาที่สามารถกดเลือกจองได้ */}
      <div className="flex justify-center w-full max-w-3xl mt-4">
        <BookingTable selectedRoom={selectedRoom} onSlotClick={handleSlotClick} />
      </div>

      {/* ✅ Popup จอง */}
      {isBookingPopupOpen && <BookingPopup time={selectedTime} room={selectedRoom} onClose={() => setBookingPopupOpen(false)} />}
    </div>
  );
};

export default BookingPage;
