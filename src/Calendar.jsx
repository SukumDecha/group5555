import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentYear, setCurrentYear] = useState(2025);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [days, setDays] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimeSelector, setShowTimeSelector] = useState(false);
  const [calendarPosition, setCalendarPosition] = useState({ top: 0, left: 0 });

  const bookingRef = useRef(null); // ใช้ ref เพื่ออ้างอิงตำแหน่งกล่องปฏิทิน

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const bookedDates = [2, 7]; // วันที่ถูกจอง

  useEffect(() => {
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
    setDays([...Array(totalDays)].map((_, i) => i + 1));
  }, [currentMonth, currentYear]);

  // คำนวณตำแหน่งของ DatePicker
  useEffect(() => {
    if (showDatePicker && bookingRef.current) {
      const rect = bookingRef.current.getBoundingClientRect();
      setCalendarPosition({
        top: rect.top + window.scrollY + rect.height + 10, // ตำแหน่งใต้ปฏิทิน
        left: rect.left + window.scrollX + rect.width / 2 - 100, // ให้อยู่กึ่งกลาง
      });
    }
  }, [showDatePicker]);

  const times = ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00"];

  return (
    <div ref={bookingRef} className="w-full max-w-[1600px] mx-auto mt-5 p-4 border border-blue-400 bg-white shadow-lg rounded-lg relative">
      {/* Header */}
      <div className="flex justify-between items-center bg-blue-900 text-white p-3 rounded-md">
        <h2 className="text-lg font-semibold">📅 Upcoming Booking</h2>
        <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md" onClick={() => setShowDatePicker(!showDatePicker)}>
          Edit
        </button>
      </div>

      {/* Month Selector */}
      <div className="flex justify-between items-center my-4 bg-orange-100 p-3 rounded-lg">
        <button onClick={() => setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1))}>&lt;</button>
        <span className="text-lg font-medium">{months[currentMonth]} {currentYear}</span>
        <button onClick={() => setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1))}>&gt;</button>
      </div>

      {/* Drop-down ปฏิทิน - ใช้ตำแหน่ง Dynamic */}
      {showDatePicker && (
        <div
          className="absolute z-50 bg-white shadow-lg rounded-md border p-2"
          style={{ top: `${calendarPosition.top}px`, left: `${calendarPosition.left}px` }}
        >
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              setShowDatePicker(false);
              setShowTimeSelector(true);
            }}
            inline
            className="border rounded-md"
          />
        </div>
      )}

      {/* Time Selector (แสดงเฉพาะเมื่อเลือกวันแล้ว) */}
      {showTimeSelector && (
        <div className="mt-4 p-4 border rounded-md bg-gray-100">
          <h3 className="text-lg font-semibold mb-2">⏰ Select Time:</h3>
          <div className="flex gap-2 flex-wrap">
            {times.map((time) => (
              <button
                key={time}
                className={`px-4 py-2 rounded-md ${selectedTime === time ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>

          {/* ปุ่ม Confirm */}
          {selectedTime && (
            <button
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md"
              onClick={() => alert(`✅ จองวันที่ ${selectedDate.toLocaleDateString()} เวลา ${selectedTime} สำเร็จ!`)}
            >
              Confirm Booking
            </button>
          )}
        </div>
      )}

      {/* Date Grid */}
      <div className="flex space-x-3 overflow-x-auto p-2">
        {days.map((day) => (
          <div
            key={day}
            className={`relative flex flex-col items-center justify-center p-2 w-16 h-16 rounded-lg shadow-md cursor-pointer transition-all
            ${bookedDates.includes(day) ? "bg-red-500 text-white" : selectedDate === day ? "bg-blue-400 text-white" : "bg-gray-200 text-gray-800"}`}
            onClick={() => {
              setSelectedDate(new Date(currentYear, currentMonth, day));
              setShowDatePicker(false);
              setShowTimeSelector(true);
            }}
          >
            <span className="text-xs font-semibold">{["S", "M", "T", "W", "T", "F", "S"][new Date(currentYear, currentMonth, day).getDay()]}</span>
            <span className="text-lg font-bold">{day}</span>
            {bookedDates.includes(day) && <span className="absolute top-1 right-1 text-xs bg-red-600 px-1 rounded-full">✖</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
