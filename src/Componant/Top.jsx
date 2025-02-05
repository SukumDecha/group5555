import React from 'react';
import { RxDragHandleHorizontal } from "react-icons/rx";
const Top = () => {
  return (
    <div style={{display:"flex", alignItems: "center", gap: "10px" }}>
    <img src="/image/logoSIT1.png" style={{ width: "155px", height: "75px" }}/>
    <p className="text-4xl font-bold">Booking</p>
    <RxDragHandleHorizontal style={{ fontSize: "65px", color: "blue",marginLeft: "auto"}} />
    </div>
);
};
export default Top;