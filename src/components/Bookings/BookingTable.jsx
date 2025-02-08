import React from "react";
import { motion } from "framer-motion";

const BookingTable = ({ bookings, onCancelBooking }) => {
    return (
        <div className="max-w-2xl mx-auto mt-6">
            <h2 className="text-2xl font-bold text-gray-800">📌 รายการจองห้องประชุม</h2>
            <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
                {bookings.length === 0 ? (
                    <p className="text-gray-600">⏳ ไม่มีการจองห้องในขณะนี้</p>
                ) : (
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="p-2">📌 ห้อง</th>
                                <th className="p-2">🕒 เวลาเข้า</th>
                                <th className="p-2">⏳ เวลาออก</th>
                                <th className="p-2">❌ ยกเลิก</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking, index) => (
                                <motion.tr
                                    key={index}
                                    className="border-b"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <td className="p-2 text-center">{booking.room}</td>
                                    <td className="p-2 text-center">{booking.timeIn}</td>
                                    <td className="p-2 text-center">{booking.timeOut}</td>
                                    <td className="p-2 text-center">
                                        <button
                                            className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                                            onClick={() => onCancelBooking(index)}
                                        >
                                            ❌ ลบ
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default BookingTable;

