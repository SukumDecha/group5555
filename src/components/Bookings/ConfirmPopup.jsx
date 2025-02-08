import React from "react";

const ConfirmPopup = ({ room, timeIn, timeOut, onClose, onConfirm }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-md shadow-md w-96">
                <h2 className="text-xl font-bold text-gray-800">✅ ยืนยันการจอง</h2>
                <p className="mt-2 text-gray-700">
                    📍 ห้อง: <b>{room}</b>
                </p>
                <p className="mt-2 text-gray-700">
                    ⏰ เวลา: <b>{timeIn} - {timeOut}</b>
                </p>

                {/* 🔹 ปุ่ม */}
                <div className="mt-6 flex justify-between">
                    <button onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded-md">
                        ❌ ยกเลิก
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-green-500 text-white px-4 py-2 rounded-md"
                    >
                        ✅ ยืนยัน
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmPopup;

