import React from "react";
import { useNavigate } from "react-router-dom";

const BookingOverview = () => {
    const navigate = useNavigate();
    
    // ตัวอย่างข้อมูลการจอง
    const bookings = [
        { id: 1, room: "LX10/1", timeIn: "10:00", timeOut: "12:00" },
        { id: 2, room: "CB2305", timeIn: "14:00", timeOut: "16:00" },
        { id: 3, room: "LX12/3", timeIn: "09:30", timeOut: "11:30" }
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800">📊 รายการจองทั้งหมด</h1>

            <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="py-2 px-4">#</th>
                            <th className="py-2 px-4">ห้อง</th>
                            <th className="py-2 px-4">เวลาเข้า</th>
                            <th className="py-2 px-4">เวลาออก</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={booking.id} className="border-b">
                                <td className="py-2 px-4 text-center">{index + 1}</td>
                                <td className="py-2 px-4 text-center">{booking.room}</td>
                                <td className="py-2 px-4 text-center">{booking.timeIn}</td>
                                <td className="py-2 px-4 text-center">{booking.timeOut}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-6 text-center">
                <button
                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
                    onClick={() => navigate("/booking")}
                >
                    🔙 กลับไปจองห้อง
                </button>
            </div>
        </div>
    );
};

export default BookingOverview;
