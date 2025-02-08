import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Globe, X } from "lucide-react"; // ✅ เพิ่ม import ไอคอนที่ขาดหายไป
import SidebarMenu from "../components/SidebarMenu";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
            {/* โลโก้ */}
            <Link to="/" className="text-2xl font-bold text-blue-600">
                SIT Booking
            </Link>

            {/* เมนู */}
            <div className="flex items-center gap-4">
                <button className="text-gray-600 hover:text-blue-600">
                    <Globe size={28} />
                </button>
                <button onClick={() => setSidebarOpen(true)} className="text-gray-600 hover:text-blue-600">
                    <Menu size={28} />
                </button>
            </div>

            {/* Sidebar */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                    <div className="bg-white w-64 h-full shadow-lg p-4">
                        <button onClick={() => setSidebarOpen(false)} className="text-gray-600 hover:text-red-500">
                            <X size={28} />
                        </button>
                        <SidebarMenu onClose={() => setSidebarOpen(false)} />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

