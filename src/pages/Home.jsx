import React, { useState } from "react";
import { Calendar } from "lucide-react"; // ✅ เพิ่ม import ที่ขาดหายไป
import Navbar from "../layout/Navbar"; // ✅ แก้ path ของ Navbar
import RoomSelector from "../components/RoomSelector"; // ✅ แก้ path ของ RoomSelector

const Home = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className="bg-white min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* ส่วนต้อนรับ */}
            <header className="text-center mt-6">
                <h1 className="text-4xl font-bold text-blue-700">ยินดีต้อนรับ!</h1>
                <p className="text-gray-600 mt-2">เลือกตึก และเลือกวันที่ต้องการจอง</p>
            </header>

            {/* ปฏิทินเลือกวัน */}
            <div className="flex justify-center mt-6">
                <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow">
                    <Calendar size={20} /> {selectedDate.toDateString()}
                </button>
            </div>

            {/* เลือกตึก */}
            <div className="mt-8">
                <RoomSelector />
            </div>
        </div>
    );
};

export default Home;

