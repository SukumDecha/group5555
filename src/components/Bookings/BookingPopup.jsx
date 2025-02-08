import React, { useState } from "react";
import { motion } from "framer-motion";

const BookingPopup = ({ room, onClose, onConfirm }) => {
    const [timeIn, setTimeIn] = useState("");
    const [timeOut, setTimeOut] = useState("");

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-700">📝 จองห้อง {room}</h2>
                <label className="block mt-4">🕒 เวลาเข้า</label>
                <input
                    type="time"
                    className="border p-2 rounded-md w-full"
                    value={timeIn}
                    onChange={(e) => setTimeIn(e.target.value)}
                />
                <label className="block mt-2">⏳ เวลาออก</label>
                <input
                    type="time"
                    className="border p-2 rounded-md w-full"
                    value={timeOut}
                    onChange={(e) => setTimeOut(e.target.value)}
                />
                <div className="flex justify-between mt-4">
                    <button className="bg-gray-400 px-4 py-2 rounded-md" onClick={onClose}>❌ ยกเลิก</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => onConfirm(timeIn, timeOut)}>✅ ยืนยัน</button>
                </div>
            </div>
        </motion.div>
    );
};

export default BookingPopup;
