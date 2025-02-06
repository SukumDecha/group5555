import React from "react";

const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
const bookedSlots = { CB2: ["10:00"], LX: ["14:00"], SIT: ["15:00"] };

const BookingTable = ({ selectedRoom }) => {
  return (
    <div className="bg-white shadow-lg p-6 mt-6 rounded-lg w-full max-w-4xl mx-auto">
      <h3 className="text-lg font-semibold text-center text-blue-900">Booking Schedule for {selectedRoom}</h3>
      <table className="w-full border-collapse mt-4">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border p-2">Time</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time) => (
            <tr key={time} className="text-center">
              <td className="border p-3">{time}</td>
              <td
                className={`border p-3 cursor-pointer ${
                  bookedSlots[selectedRoom]?.includes(time) ? "bg-red-200" : "hover:bg-green-200"
                }`}
              >
                {bookedSlots[selectedRoom]?.includes(time) ? "Booked" : "Available"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
