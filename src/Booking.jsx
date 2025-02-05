import { useContext, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import translations from "./translations"; // Import translations

function Booking() {
  const { language } = useContext(LanguageContext);
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-center text-primary">
        {translations[language].bookingTitle}
      </h2>
      <p className="text-lg text-center text-secondary">
        {translations[language].bookingDescription}
      </p>

      {/* Calendar Section */}
      <div className="bg-white shadow-lg p-6 mt-6 rounded-lg w-full max-w-lg mx-auto">
        <h3 className="text-lg font-semibold">{translations[language].selectDate}</h3>
        <input
          type="date"
          value={selectedDate.toISOString().substring(0, 10)}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
          className="w-full p-2 border rounded mt-2"
        />
      </div>

      {/* Booking Table */}
      <div className="bg-white shadow-lg p-6 mt-6 rounded-lg">
        <h3 className="text-lg font-semibold">{translations[language].bookingTable}</h3>
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr className="bg-primary text-black">
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
                  <td className="border p-2 cursor-pointer hover:bg-gray-200">+</td>
                  <td className="border p-2 cursor-pointer hover:bg-gray-200">+</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Booking;
