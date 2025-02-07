import React from "react";

const ConfirmPopup = ({ time, room, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h3 className="text-lg font-semibold">ยืนยันการจอง</h3>
        <p className="text-gray-600">เวลา: {time}</p>
        <p className="text-gray-600">ห้อง: {room}</p>
        <div className="flex justify-between mt-4">
          <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>
            ปิด
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => alert("Booking Confirmed!")}>
            เสร็จสิ้น
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPopup;
