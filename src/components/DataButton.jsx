import React from "react";

const DateButton = ({ day, date = {}, state, setState }) => {
  const onClickHandler = () => {
    const newDate = date?.date ?? "ไม่ระบุวันที่";
    setState(prevState => ({ ...prevState, date: newDate }));

    // 🔄 ส่งข้อมูลไปยัง Backend
    fetch("https://api.example.com/select-date", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ selectedDate: newDate }),
    })
      .then(res => res.json())
      .then(data => console.log("📅 วันที่ถูกบันทึก:", data))
      .catch(err => console.error("❌ เกิดข้อผิดพลาด:", err));
  };

  return (
    <button onClick={onClickHandler} className="cursor-pointer p-3 border rounded text-center hover:bg-blue-200">
      <h1>{day}</h1>
      <div>{date?.date || "ไม่ระบุวันที่"}</div>
      <div>{date?.month || "ไม่ระบุเดือน"}</div>
    </button>
  );
};

export default DateButton;
