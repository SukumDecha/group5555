import React, { useState } from "react";
import { FiMenu, FiX, FiUser, FiSettings, FiCalendar, FiLogOut } from "react-icons/fi";

const SidebarMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* 🔹 ปุ่มเปิดเมนู */}
            <button onClick={() => setIsOpen(true)} className="fixed top-5 left-5 text-gray-700">
                <FiMenu size={28} />
            </button>

            {/* 🔹 Sidebar */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-md p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold">เมนู</h2>
                            <button onClick={() => setIsOpen(false)}>
                                <FiX size={24} />
                            </button>
                        </div>

                        {/* 🔹 เมนู */}
                        <nav className="space-y-4">
                            <a href="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
                                <FiUser /> <span>โปรไฟล์</span>
                            </a>
                            <a href="/calendar" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
                                <FiCalendar /> <span>ปฏิทินการจอง</span>
                            </a>
                            <a href="/settings" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
                                <FiSettings /> <span>ตั้งค่า</span>
                            </a>
                            <button className="flex items-center space-x-2 text-red-500 mt-6">
                                <FiLogOut /> <span>ออกจากระบบ</span>
                            </button>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};

export default SidebarMenu;
