import React, { useState, useEffect } from "react";

const buildings = {
  "CB Building": ["CB2301", "CB2304", "CB2305", "CB2306", "CB2308", "CB2312", "CB2313", "CB2401", "CB2405", "CB2502", "CB2503", "CB2505", "CB2507", "CB2605"],
  "LX Building": ["LX10/1", "LX10/2", "LX10/3", "LX10/4", "LX10/5", "LX11/1", "LX11/2", "LX11/3", "LX11/4", "LX11/5", "LX12/1", "LX12/2", "LX13/1", "LX13/2", "LX13/3", "LX13/4"],
};

const RoomSelector = ({ selectedBuilding, setSelectedBuilding, selectedRoom, setSelectedRoom }) => {
  const [availableRooms, setAvailableRooms] = useState([]);

  useEffect(() => {
    if (selectedBuilding) {
      setAvailableRooms(buildings[selectedBuilding] || []);
      setSelectedRoom(buildings[selectedBuilding]?.[0] || "");
    }
  }, [selectedBuilding]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-6 space-x-4">
      <select
        className="bg-blue-500 text-white p-2 rounded-lg w-48 hover:bg-blue-700"
        value={selectedBuilding}
        onChange={(e) => setSelectedBuilding(e.target.value)}
      >
        <option value="">Select Building</option>
        {Object.keys(buildings).map((building) => (
          <option key={building} value={building}>
            {building}
          </option>
        ))}
      </select>

      <select
        className="bg-blue-500 text-white p-2 rounded-lg w-48 hover:bg-blue-700"
        value={selectedRoom}
        onChange={(e) => setSelectedRoom(e.target.value)}
      >
        <option value="">Select Room</option>
        {availableRooms.map((room) => (
          <option key={room} value={room}>
            {room}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RoomSelector;
