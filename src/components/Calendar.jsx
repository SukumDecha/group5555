// import React, { useState, useEffect } from "react";

// const Calendar = () => {
//   const [currentYear, setCurrentYear] = useState(2025);
//   const [currentMonth, setCurrentMonth] = useState(0);
//   const [days, setDays] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null); 
//   const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];

//   const bookedDates = [2, 7]; 

//   useEffect(() => {
//     const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
//     setDays([...Array(totalDays)].map((_, i) => i + 1));
//   }, [currentMonth, currentYear]);

//   return (
//     <div className="w-full max-w-4xl mx-auto mt-5 p-6 bg-white shadow-lg rounded-lg">
//       {/* Header */}
//       <div className="flex justify-between items-center bg-blue-900 text-white p-3 rounded-md">
//         <h2 className="text-lg font-semibold">📅 Upcoming Booking</h2>
//         <button
//           className="bg-white text-blue-700 px-3 py-1 text-sm rounded-full border border-yellow-500 hover:bg-yellow-100 transition"
//           onClick={() => navigate("/EditBooking")}
//         >
//           Edit
//         </button>
//       </div>

//       {/* Month Selector */}
//       <div className="flex justify-between items-center my-4 bg-orange-100 p-3 rounded-lg">
//         <button onClick={() => setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1))}>&lt;</button>
//         <span className="text-lg font-medium">{months[currentMonth]} {currentYear}</span>
//         <button onClick={() => setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1))}>&gt;</button>
//       </div>

//       {/* Date Grid */}
//       <div className="flex space-x-3 overflow-x-auto p-2">
//         {days.map((day) => {
//           const isBooked = bookedDates.includes(day);
//           const isSelected = selectedDate === day;

//           return (
//             <div
//               key={day}
//               className={`relative flex flex-col items-center justify-center p-2 w-16 h-16 rounded-lg shadow-md cursor-pointer transition-all
//               ${isSelected ? "bg-gray-500 text-white" : isBooked ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"}`}
//               onClick={() => setSelectedDate(day)}
//             >
//               <span className="text-xs font-semibold">
//                 {["S", "M", "T", "W", "T", "F", "S"][new Date(currentYear, currentMonth, day).getDay()]}
//               </span>
//               <span className="text-lg font-bold">{day}</span>
//               {isBooked && (
//                 <span className="absolute top-1 right-1 text-xs bg-red-600 px-1 rounded-full">✖</span>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Calendar;

import React, { useState, useEffect } from "react";

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [bookedDates, setBookedDates] = useState([]);

  // 🔄 โหลดข้อมูลการจองจาก API
  useEffect(() => {
    fetch(`https://api.example.com/bookings?month=${currentMonth + 1}&year=${currentYear}`)
      .then(res => res.json())
      .then(data => setBookedDates(data.map(b => b.date))) // แปลงเป็น array ของวันที่
      .catch(() => setBookedDates([])); // ป้องกัน error
  }, [currentMonth, currentYear]);

  // 🔢 สร้างวันที่ในเดือนปัจจุบัน
  const days = Array.from({ length: new Date(currentYear, currentMonth + 1, 0).getDate() }, (_, i) => i + 1);

  return (
    <div>
      {/* 🔽 ปุ่มเลือกเดือน */}
      <div className="flex justify-between items-center my-4 bg-orange-100 p-3 rounded-lg">
        <button onClick={() => setCurrentMonth(prev => (prev > 0 ? prev - 1 : 11))}>◀</button>
        <span className="text-lg font-medium">{`เดือน ${currentMonth + 1} ปี ${currentYear}`}</span>
        <button onClick={() => setCurrentMonth(prev => (prev < 11 ? prev + 1 : 0))}>▶</button>
      </div>

      {/* 📅 ตารางวันที่ */}
      <div className="grid grid-cols-7 gap-2">
        {days.map(day => {
          const isBooked = bookedDates.includes(day);
          const isSelected = selectedDate === day;
          return (
            <div 
              key={day}
              className={`relative flex flex-col items-center justify-center p-2 w-16 h-16 rounded-lg shadow-md cursor-pointer
                ${isSelected ? "bg-gray-500 text-white" : isBooked ? "bg-red-500 text-white" : "hover:bg-green-200"}`}
              onClick={() => !isBooked && setSelectedDate(day)}
            >
              <span className="text-xs font-semibold">{["S", "M", "T", "W", "T", "F", "S"][new Date(currentYear, currentMonth, day).getDay()]}</span>
              <span className="text-lg font-bold">{day}</span>
              {isBooked && <span className="absolute top-1 right-1 text-xs bg-red-600 px-1 rounded-full">❌</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;

