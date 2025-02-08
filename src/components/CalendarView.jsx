
import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";

const CalendarView = ({ bookings }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const today = new Date();
    const daysInMonth = eachDayOfInterval({
        start: startOfMonth(today),
        end: endOfMonth(today),
    });

    return (
        <div className="mt-6 w-full max-w-lg mx-auto bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold text-center text-gray-800">📅 ปฏิทินการจอง</h2>
            <div className="grid grid-cols-7 gap-2 mt-4 bg-gray-100 p-4 rounded-md">
                {daysInMonth.map((day) => {
                    const formattedDate = format(day, "yyyy-MM-dd");
                    const hasBooking = bookings.some((b) => b.date === formattedDate);

                    return (
                        <div
                            key={formattedDate}
                            onClick={() => setSelectedDate(formattedDate)}
                            className={`p-3 text-center cursor-pointer rounded-md ${
                                hasBooking ? "bg-blue-400 text-white font-semibold" : "bg-gray-200"
                            }`}
                        >
                            {format(day, "dd")}
                        </div>
                    );
                })}
            </div>

            {selectedDate && (
                <div className="mt-4 p-4 border rounded-md bg-gray-50">
                    <h3 className="text-lg font-semibold text-gray-800">📍 รายการจอง {selectedDate}</h3>
                    {bookings
                        .filter((b) => b.date === selectedDate)
                        .map((booking, index) => (
                            <p key={index} className="mt-2 text-gray-700">
                                ✅ {booking.room} ({booking.timeIn} - {booking.timeOut})
                            </p>
                        ))}
                </div>
            )}
        </div>
    );
};

export default CalendarView;
