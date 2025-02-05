function Booking() {
    return (
      <div className="min-h-screen bg-gray-100 p-6 pt-20">
        <h2 className="text-2xl font-bold text-center text-primary">LX 11th Floor</h2>
        <h3 className="text-lg text-center mb-4 text-secondary">27 January 2025</h3>

        <div className="bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-xl font-semibold">📅 Booking Table</h2>
      <p>รายละเอียดการจองห้องจะอยู่ที่นี่</p>
    </div>
  
        {/* ตารางเวลา */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary text-black">
                <th className="border p-2">Time</th>
                <th className="border p-2">Training Room 11/1</th>
                <th className="border p-2">Training Room 11/2</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(15)].map((_, i) => {
                const time = `${8 + i}:00`;
                return (
                  <tr key={time} className="text-secondary">
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
  