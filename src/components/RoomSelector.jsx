import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const RoomSelector = ({ selectedRoom, setSelectedRoom, selectedFloor, setSelectedFloor }) => {
  const { language } = useContext(LanguageContext);
  const [buildings, setBuildings] = useState([]);
  const [floors, setFloors] = useState([]);

  // ✅ ดึงข้อมูลตึกและชั้นจาก API
  useEffect(() => {
    fetch("https://api.example.com/buildings")
      .then((res) => res.json())
      .then((data) => setBuildings(data))
      .catch(() => setBuildings([{ id: "CB2", name: "CB2 Building" }, { id: "LX", name: "LX Building" }, { id: "SIT", name: "SIT Building" }]));

    fetch("https://api.example.com/floors")
      .then((res) => res.json())
      .then((data) => setFloors(data))
      .catch(() => setFloors([{ id: "10", name: "10th Floor" }, { id: "11", name: "11th Floor" }, { id: "12", name: "12th Floor" }]));
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-6 space-x-4">
      
      {/* 🔹 เลือกตึก */}
      <select
        className="bg-blue-500 text-white p-2 rounded-lg w-48"
        value={selectedRoom ?? ""}
        onChange={(e) => setSelectedRoom(e.target.value ?? "")}
      >
        <option value="">{language === "th" ? "เลือกตึก" : "Select Building"}</option>
        {buildings.map((building) => (
          <option key={building.id} value={building.id}>{building.name}</option>
        ))}
      </select>

      {/* 🔹 เลือกชั้น */}
      <select
        className="bg-blue-500 text-white p-2 rounded-lg w-48"
        value={selectedFloor ?? ""}
        onChange={(e) => setSelectedFloor(e.target.value ?? "")}
      >
        <option value="">{language === "th" ? "เลือกชั้น" : "Select Floor"}</option>
        {floors.map((floor) => (
          <option key={floor.id} value={floor.id}>{floor.name}</option>
        ))}
      </select>
    </div>
  );
};

export default RoomSelector;
