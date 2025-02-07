import React, { useState } from "react";

const BookingPopup = ({ room, onClose }) => {
  const [timeIn, setTimeIn] = useState("");
  const [timeOut, setTimeOut] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  const handleConfirm = () => {
    if (!timeIn || !timeOut || !name || !subject) {
      alert("Please fill all fields.");
      return;
    }

    // Send booking data to backend API
    fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        room,
        timeIn,
        timeOut,
        name,
        subject,
      }),
    })
    .then((res) => res.json())
    .then(() => {
      alert("Booking confirmed!");
      onClose();
    })
    .catch(() => alert("Failed to book. Please try again."));
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h3 className="text-lg font-semibold bg-red-500 text-white p-3 rounded-t-lg">Room Booking Form</h3>

        <p className="text-gray-600 mt-2">Room: {room}</p>

        <input 
          className="w-full border p-2 rounded mt-3" 
          placeholder="Time In (HH:MM)" 
          value={timeIn} 
          onChange={(e) => setTimeIn(e.target.value)}
        />

        <input 
          className="w-full border p-2 rounded mt-3" 
          placeholder="Time Out (HH:MM)" 
          value={timeOut} 
          onChange={(e) => setTimeOut(e.target.value)}
        />

        <input 
          className="w-full border p-2 rounded mt-3" 
          placeholder="Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />

        <input 
          className="w-full border p-2 rounded mt-3" 
          placeholder="Subject" 
          value={subject} 
          onChange={(e) => setSubject(e.target.value)}
        />

        <div className="flex justify-between mt-4">
          <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>Cancel</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default BookingPopup;
