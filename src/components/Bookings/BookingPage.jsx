import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoomSelector from "./RoomSelector";
import BookingTable from "./bookingTable";
import BookingPopup from "./BookingPopup";
import ConfirmPopup from "./ConfirmPopup";

const BookingPage = () => {
    const [selectedRoom, setSelectedRoom] = useState("");
    const [bookings, setBookings] = useState([]);
    const [showBookingPopup, setShowBookingPopup] = useState(false);
    const [showConfirmPopup, setShowConfirmPopup] = useState(false);
    const [timeIn, setTimeIn] = useState("");
    const [timeOut, setTimeOut] = useState("");
    const navigate = useNavigate(); // ✅ ใช้ navigate เพื่อนำทางไปหน้า overview

    const handleConfirmBooking = (selectedTimeIn, selectedTimeOut) => {
        setTimeIn(selectedTimeIn);
        setTimeOut(selectedTimeOut);
        setShowBookingPopup(false);
        setShowConfirmPopup(true);
    };

    const handleFinalizeBooking = () => {
        setBookings([...bookings, { room: selectedRoom, timeIn, timeOut }]);
        setShowConfirmPopup(false);
    };

    const handleCancelBooking = (index) => {
        const updatedBookings = [...bookings];
        updatedBookings.splice(index, 1);
        setBookings(updatedBookings);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800">📅 ระบบจองห้องประชุม</h1>

            <div className="mt-6">
                <RoomSelector selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />
            </div>

            {selectedRoom && (
                <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                    onClick={() => setShowBookingPopup(true)}
                >
                    📝 จองห้อง {selectedRoom}
                </button>
            )}

            <BookingTable bookings={bookings} onCancelBooking={handleCancelBooking} />

            {bookings.length > 0 && (
                <button
                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                    onClick={() => navigate("/overview")} // ✅ ลิงก์ไปหน้า overview
                >
                    📊 ดูรายการจองทั้งหมด
                </button>
            )}

            {showBookingPopup && (
                <BookingPopup
                    room={selectedRoom}
                    onClose={() => setShowBookingPopup(false)}
                    onConfirm={handleConfirmBooking}
                />
            )}

            {showConfirmPopup && (
                <ConfirmPopup
                    room={selectedRoom}
                    timeIn={timeIn}
                    timeOut={timeOut}
                    onClose={() => setShowConfirmPopup(false)}
                    onConfirm={handleFinalizeBooking}
                />
            )}
        </div>
    );
};

export default BookingPage;
