// import React, { useState } from "react";

// const BookingModal = ({ slot, onClose }) => {
//   const [name, setName] = useState("");
//   const [organization, setOrganization] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Booking Confirmed: ${name}, ${organization} at ${slot}`);
//     onClose();
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <h3>Booking Slot: {slot}</h3>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Name:
//             <input value={name} onChange={(e) => setName(e.target.value)} required />
//           </label>
//           <label>
//             Organization:
//             <input value={organization} onChange={(e) => setOrganization(e.target.value)} required />
//           </label>
//           <div className="modal-actions">
//             <button type="submit">Confirm</button>
//             <button onClick={onClose} className="cancel">Cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookingModal;

import React, { useState } from "react";

const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
const bookedSlots = { CB2: ["10:00"], LX: ["14:00"], SIT: ["15:00"] };

const BookingTable = ({ onSlotClick, selectedRoom }) => {
  return (
    <div className="bg-white shadow-lg p-6 mt-6 rounded-lg">
      <h3 className="text-lg font-semibold text-center">Booking Schedule for {selectedRoom}</h3>
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
                className={`border p-3 cursor-pointer ${bookedSlots[selectedRoom]?.includes(time) ? "bg-red-200" : "hover:bg-green-200"}`}
                onClick={() => !bookedSlots[selectedRoom]?.includes(time) && onSlotClick(time, selectedRoom)}
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
