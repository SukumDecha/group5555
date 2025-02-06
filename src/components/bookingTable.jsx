import React, { useState, useEffect } from "react";

const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const BookingTable = ({ building }) => {
  const [bookings, setBookings] = useState({});

  useEffect(() => {
    fetch(`https://api.example.com/bookings?building=${building}`)
      .then(res => res.json())
      .then(data => {
        const newBookings = data.reduce((acc, { room, time }) => {
          acc[room] = acc[room] || [];
          acc[room].push(time);
          return acc;
        }, {});
        setBookings(newBookings);
      });
  }, [building]);

  return (
    <div className="bg-white shadow-lg p-6 mt-6 rounded-lg w-full max-w-6xl mx-auto">
      <h3 className="text-lg font-semibold text-center text-blue-900">📅 ตารางการจอง {building}</h3>
      <table className="w-full border-collapse mt-4">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border p-2">เวลา</th>
            <th className="border p-2">สถานะ</th>
          </tr>
        </thead>
        <tbody>
          {timeSlots.map(time => (
            <tr key={time} className="text-center">
              <td className="border p-3">{time}</td>
              <td className={`border p-3 ${bookings?.[time] ? "bg-red-300" : "hover:bg-green-300"}`}>
                {bookings?.[time] ? "❌ ถูกจองแล้ว" : "✅ ว่าง"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
