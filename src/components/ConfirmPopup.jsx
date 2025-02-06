import React from "react";

const ConfirmPopup = ({ time = "N/A", room = "N/A", date = "N/A", onClose = () => {}, onConfirm = () => {} }) => {
  const handleConfirm = () => {
    fetch("https://api.example.com/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ time, room, date }),
    })
      .then(res => res.json())
      .then(() => {
        alert("✅ การจองสำเร็จ!");
        onConfirm();
      })
      .catch(() => alert("❌ เกิดข้อผิดพลาด! กรุณาลองใหม่อีกครั้ง"));
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-lg font-semibold">📅 ยืนยันการจอง</h3>
        <p className="text-gray-600">⏰ เวลา: {time}</p>
        <p className="text-gray-600">🏢 ห้อง: {room}</p>
        <p className="text-gray-600">📅 วันที่: {date}</p>
        <div className="flex justify-between mt-4">
          <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>❌ ปิด</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleConfirm}>✅ ยืนยัน</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPopup;
