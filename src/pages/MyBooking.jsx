import React, { useState, useEffect } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/my-bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const cancelBooking = (id) => {
    if (window.confirm("คุณต้องการยกเลิกการจองนี้หรือไม่?")) {
      fetch(`https://api.example.com/bookings/${id}`, { method: "DELETE" })
        .then(() => setBookings(bookings.filter((b) => b.id !== id)));
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-xl font-bold">📋 รายการจองของฉัน</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id} className="border p-4 my-2">
            ⏰ {booking.time} | 🏢 ห้อง {booking.room} | 📅 วันที่ {booking.date}
            <button className="ml-4 bg-red-500 text-white p-2 rounded" onClick={() => cancelBooking(booking.id)}>
              ❌ ยกเลิก
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBookings;
