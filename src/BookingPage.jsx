import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RoomList from "./RoomList";
import getRooms from "./GetRoom";


function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { search } = location;
  const params = new URLSearchParams(search);
  const selectedLocation = params.get("location");
  const selectedFloor = params.get("floor");

  const [timeIn, setTimeIn] = useState("");
  const [timeOut, setTimeOut] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    surname: "",
    phone: "",
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingFailed, setBookingFailed] = useState(false);

  useEffect(() => {
    getRooms(selectedLocation, selectedFloor)
      .then((data) => setRooms(data))
      .catch((error) => console.error("Error fetching rooms:", error));
  }, [selectedLocation, selectedFloor]);

  const handleTimeChange = (e, type) => {
    const value = e.target.value;
    if (type === "in") setTimeIn(value);
    else setTimeOut(value);
  };

  const handleBooking = () => {
    if (!timeIn || !timeOut || !selectedRoom) {
      alert("กรุณาเลือกเวลาและห้อง");
      return;
    }

    // ตรวจสอบเวลาว่าง (สมมติว่ามีฟังก์ชันตรวจสอบใน api.js)
    checkAvailability(selectedRoom.id, timeIn, timeOut)
      .then((available) => {
        if (available) {
          setBookingSuccess(true);
        } else {
          setBookingFailed(true);
        }
      })
      .catch((error) => console.error("Error checking availability:", error));
  };

  const handleConfirmBooking = () => {
    // บันทึกข้อมูลการจอง (สมมติว่ามีฟังก์ชันบันทึกใน api.js)
    saveBooking({
      room: selectedRoom,
      timeIn,
      timeOut,
      ...bookingDetails,
    })
      .then(() => {
        alert("จองห้องสำเร็จ!");
        navigate("/");
      })
      .catch((error) => console.error("Error saving booking:", error));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">จองห้อง {selectedLocation} ชั้น {selectedFloor}</h2>

        {/* ... (ส่วนเลือกเวลา) ... */}

        <RoomList rooms={rooms} selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />

        {bookingFailed && <p className="text-red-500 mb-4">ไม่สามารถจองห้องได้ กรุณาเลือกเวลาหรือห้องอื่น</p>}

        {bookingSuccess && (
          <div>
            <h3 className="text-lg font-bold mb-4">กรอกรายละเอียดผู้จอง</h3>
            {/* ... (ส่วนฟอร์มกรอกข้อมูลผู้จอง) ... */}
            <button onClick={handleConfirmBooking}>ยืนยันการจอง</button>
          </div>
        )}

        <button onClick={() => navigate(-1)}>กลับ</button>
      </div>
    </div>
  );
}

export default BookingPage;