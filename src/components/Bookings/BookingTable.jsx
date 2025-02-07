import React, { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00", "21:30", "22:00"
];

const BookingTable = ({ selectedBuilding, selectedDate }) => {
  const { language } = useContext(LanguageContext);
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (!selectedBuilding) return;

    // โหลดข้อมูลห้องทั้งหมดในอาคารที่เลือก
    fetch(`/api/rooms?building=${selectedBuilding}`)
      .then((res) => res.json())
      .then((data) => setRooms(data))
      .catch(() => setRooms([]));

    // โหลดข้อมูลการจองของวันที่เลือก
    fetch(`/api/bookings?building=${selectedBuilding}&date=${selectedDate}`)
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch(() => setBookings([]));
  }, [selectedBuilding, selectedDate]);

  return (
    <div className="bg-white shadow-lg p-6 mt-6 rounded-lg w-full overflow-x-auto">
      <h3 className="text-lg font-semibold text-center text-blue-900">
        {language === "th"
          ? `ตารางการจองสำหรับ ${selectedBuilding} - ${selectedDate}`
          : `Booking Schedule for ${selectedBuilding} - ${selectedDate}`}
      </h3>

      <table className="w-full border-collapse mt-4">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border p-2">Time</th>
            {rooms.map((room) => (
              <th key={room} className="border p-2">{room}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time) => (
            <tr key={time} className="text-center">
              <td className="border p-3">{time}</td>
              {rooms.map((room) => {
                const booking = bookings.find((b) => b.room === room && b.time === time);
                return (
                  <td key={room} className={`border p-3 ${booking ? "bg-blue-300" : "hover:bg-green-200"}`}>
                    {booking ? booking.subject : "Available"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
