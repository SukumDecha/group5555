import React, { useState } from "react";
import ConfirmPopup from "./ConfirmPopup";

const BookingPopup = ({ time, room, onClose }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [description, setDescription] = useState("");
  const [isConfirmOpen, setConfirmOpen] = useState(false);

  const handleSubmit = () => {
    setConfirmOpen(true);
  };

  return (
    <>
      {/* 🔹 Popup กล่องอยู่ตรงกลาง */}
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] border border-gray-300 relative">
          <div className="bg-red-500 text-white p-2 rounded-t-md text-center font-bold">
            กรุณากรอกข้อมูลการจอง
          </div>
          <div className="p-4 space-y-3">
            <label className="block font-medium">ชื่อ - นามสกุล</label>
            <input type="text" className="w-full p-2 border rounded" value={name} onChange={(e) => setName(e.target.value)} />

            <label className="block font-medium">วิชา</label>
            <input type="text" className="w-full p-2 border rounded" value={course} onChange={(e) => setCourse(e.target.value)} />

            <label className="block font-medium">รายละเอียดเพิ่มเติม</label>
            <textarea className="w-full p-2 border rounded" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="flex justify-between mt-4">
            <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>ยกเลิก</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>ยืนยัน</button>
          </div>
        </div>
      </div>

      {/* 🔹 Popup ยืนยันการจอง */}
      {isConfirmOpen && <ConfirmPopup time={time} room={room} onClose={onClose} />}
    </>
  );
};

export default BookingPopup;
