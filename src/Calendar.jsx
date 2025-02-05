import React, { useState, useEffect } from "react";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [hoveredDate, setHoveredDate] = useState(null); // วันที่ที่เมาส์ชี้
  const [currentYear, setCurrentYear] = useState(2025);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [days, setDays] = useState([]);

  // รายการวันที่ที่ถูกจองไว้ล่วงหน้า
  const bookedDates = [2,7]; // สมมุติว่ามีการจองวันที่ 2 และ 7

  // ชื่อเดือน
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  useEffect(() => {
    generateCalendarDays();
  }, [currentMonth, currentYear]);

  // คำนวณจำนวนวันในเดือน
  const generateCalendarDays = () => {
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate(); // จำนวนวันในเดือนนี้
    let newDays = [];
    for (let i = 1; i <= totalDays; i++) {
      newDays.push({ day: getWeekday(i), date: i });
    }
    setDays(newDays);
  };

  //ตัวอักษรวันย่อๆ
  const getWeekday = (day) => {
    const date = new Date(currentYear, currentMonth, day);
    return ["S.", "M.", "T.", "W.", "T.", "F.", "S."][date.getDay()];
  };

  // เปลี่ยนเดือน
  const changeMonth = (step) => {
    let newMonth = currentMonth + step;
    let newYear = currentYear;

    if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    } else if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  return (
    <div className="p-4 rounded-lg border-2 border-blue-400 w-7xl mx-auto bg-white shadow-lg mt-10 ">
      {/* Header */}
      <div className="flex justify-between items-center bg-blue-900 text-white p-3 rounded-md">
        <h2 className="text-lg font-semibold">Upcoming Booking Schedule</h2>
        <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">Edit</button>
      </div>

      {/* Month Selector */}
      <div className="flex justify-between items-center my-4 bg-orange-100 p-3 rounded-lg">
        <button onClick={() => changeMonth(-1)} className="text-gray-600 px-2 text-2xl">&lt;</button>
        <span className="text-lg font-medium">{months[currentMonth]} {currentYear}</span>
        <button onClick={() => changeMonth(1)} className="text-gray-600 px-2 text-2xl">&gt;</button>
      </div>

      {/* Date Grid (Scrollable) */}
      <div className="flex space-x-3 overflow-x-auto p-2">
        {days.map(({ day, date }) => {
          const isBooked = bookedDates.includes(date); // ตรวจสอบว่ามีการจองหรือไม่
          const isSelected = selectedDate === date;
          const isHovered = hoveredDate === date;

          return (
            <div
              key={date}
              className={`relative flex flex-col items-center justify-center p-2 w-19 h-16 rounded-lg cursor-pointer shadow-md transition-all m-1
                ${isBooked ? "bg-red-500 text-white" 
                : isSelected ? "bg-blue-400 text-white"
                : isHovered ? "bg-gray-300 text-black"  // เปลี่ยนสีเมื่อ hover
                : "bg-gray-100 text-gray-800"}`}
              onClick={() => setSelectedDate(date)}
              onMouseEnter={() => setHoveredDate(date)} // เมื่อเมาส์ชี้
              onMouseLeave={() => setHoveredDate(null)} // เมื่อเมาส์ออก
            >
              <span className="text-xs font-semibold">{day}</span>
              <span className="text-lg font-bold">{date}</span>

              {/* แสดงเครื่องหมาย "*" ถ้าวันนี้ถูกจอง */}
              {isBooked && (
                <span className="absolute top-1 right-1 text-xs text-white bg-red-600 rounded-full px-1">*</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;