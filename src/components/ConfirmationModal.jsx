import React from "react";

const ConfirmationModal = ({ onConfirm, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-lg font-semibold mb-4 text-center">คุณต้องการยกเลิกการจองใช่หรือไม่?</h2>
                <div className="flex justify-between">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-md">ยกเลิก</button>
                    <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded-md">ยืนยัน</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
