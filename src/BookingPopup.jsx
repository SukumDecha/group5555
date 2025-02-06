import React, { useState } from "react";
import ConfirmPopup from "./ConfirmPopup";

const BookingPopup = ({ time, room, onClose }) => {
  const [name, setName] = useState("");
  const [isConfirmOpen, setConfirmOpen] = useState(false);

  const handleSubmit = () => {
    setConfirmOpen(true);
  };

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h3 className="text-lg font-semibold text-center">Booking at {room} - {time}</h3>
          <input type="text" placeholder="ชื่อ" className="w-full p-2 border rounded mt-3" value={name} onChange={(e) => setName(e.target.value)} />
          <div className="flex justify-between mt-4">
            <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>Cancel</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Confirm</button>
          </div>
        </div>
      </div>
      {isConfirmOpen && <ConfirmPopup time={time} room={room} onClose={onClose} />}
    </>
  );
};

export default BookingPopup;
