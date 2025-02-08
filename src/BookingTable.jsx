import React from "react";

const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
const bookedSlots = { CB2: ["10:00"], LX: ["14:00"], SIT: ["15:00"] };

const BookingTable = ({ selectedRoom }) => {
  return (
    <div className="w-full max-w-4xl p-6 mx-auto mt-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-center text-blue-900">Booking Schedule for {selectedRoom}</h3>
      <table className="w-full mt-4 border-collapse">
        <thead>
          <tr className="text-white bg-blue-600">
            <th className="p-2 border">Time</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time) => (
            <tr key={time} className="text-center">
              <td className="p-3 border">{time}</td>
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
