
import { useState, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import translations from "./translations";
import { FaCheck, FaTimes } from "react-icons/fa";

function Booking() {
  const { language } = useContext(LanguageContext);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isBookingModalOpen, setBookingModalOpen] = useState(false);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setBookingModalOpen(true);
  };

  const handleBookingSubmit = () => {
    setBookingModalOpen(false);
    setConfirmModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-blue-100 p-6">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-orange-200 to-white p-6 rounded-xl shadow-md text-center">
        <h2 className="text-xl font-bold text-primary">
          {translations[language].bookingTitle}
        </h2>
        <h3 className="text-md text-gray-600">{translations[language].bookingSub}</h3>
      </div>

      {/* Booking Table */}
      <div className="bg-white shadow-lg p-6 mt-6 rounded-lg">
        <h3 className="text-lg font-semibold">{translations[language].bookingTable}</h3>
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border p-2">{translations[language].time}</th>
              <th className="border p-2">{translations[language].room1}</th>
              <th className="border p-2">{translations[language].room2}</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(12)].map((_, i) => {
              const time = `${8 + i}:00`;
              return (
                <tr key={time} className="text-center">
                  <td className="border p-2">{time}</td>
                  <td className="border p-2 cursor-pointer hover:bg-orange-100"
                    onClick={() => handleTimeSelect(time)}>+</td>
                  <td className="border p-2 cursor-pointer hover:bg-orange-100"
                    onClick={() => handleTimeSelect(time)}>+</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold text-center">
              {translations[language].bookingForm}
            </h3>
            <input type="text" placeholder="ชื่อ" className="w-full p-2 mt-2 border rounded"
              value={bookingData.name} onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })} />
            <input type="email" placeholder="อีเมล" className="w-full p-2 mt-2 border rounded"
              value={bookingData.email} onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })} />
            <input type="tel" placeholder="เบอร์โทร" className="w-full p-2 mt-2 border rounded"
              value={bookingData.phone} onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })} />
            <div className="flex justify-between mt-4">
              <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setBookingModalOpen(false)}>
                <FaTimes /> {translations[language].cancel}
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleBookingSubmit}>
                <FaCheck /> {translations[language].confirm}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {isConfirmModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h3 className="text-lg font-semibold">{translations[language].confirmBooking}</h3>
            <p>เวลาที่เลือก: {selectedTime}</p>
            <p>ชื่อ: {bookingData.name}</p>
            <p>อีเมล: {bookingData.email}</p>
            <p>เบอร์โทร: {bookingData.phone}</p>
            <div className="flex justify-between mt-4">
              <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setConfirmModalOpen(false)}>
                {translations[language].close}
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => alert("Booking Confirmed!")}>
                {translations[language].done}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Booking;
