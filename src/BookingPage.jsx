import { useState } from "react";
import BookingTable from "../components/BookingTable";
import BookingPopup from "../components/BookingPopup";
import RoomSelector from "../components/RoomSelector";

const BookingPage = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState("CB2");
  const [isBookingPopupOpen, setBookingPopupOpen] = useState(false);

  const handleSlotClick = (time, room) => {
    setSelectedTime(time);
    setSelectedRoom(room);
    setBookingPopupOpen(true);
  };

  return (
    <div className="p-6">
      <RoomSelector selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />
      <BookingTable onSlotClick={handleSlotClick} selectedRoom={selectedRoom} />
      {isBookingPopupOpen && <BookingPopup time={selectedTime} room={selectedRoom} onClose={() => setBookingPopupOpen(false)} />}
    </div>
  );
};

export default BookingPage;
