import React, { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

const BookingList = ({ bookings, setBookings }) => {
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCancel = (booking) => {
        setSelectedBooking(booking);
        setIsModalOpen(true);
    };

    const confirmCancel = () => {
        setBookings(bookings.filter((b) => b !== selectedBooking));
        setIsModalOpen(false);
    };

    return (
        <div className="mt-6 w-full max-w-md mx-auto">
            <h2 className="text-xl font-semibold text-center">รายการจองของฉัน</h2>
            <ul className="mt-4 space-y-3">
                {bookings.map((booking, index) => (
                    <li key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
                        <div>
                            <p className="font-medium">{booking.room}</p>
                            <p className="text-sm text-gray-600">{booking.timeIn} - {booking.timeOut}</p>
                        </div>
                        <button
                            onClick={() => handleCancel(booking)}
                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700"
                        >
                            ยกเลิกการจอง
                        </button>
                    </li>
                ))}
            </ul>

            {isModalOpen && <ConfirmationModal onConfirm={confirmCancel} onClose={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default BookingList;
