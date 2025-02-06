import React from "react";

const RoomSelector = ({ selectedRoom, setSelectedRoom, selectedFloor, setSelectedFloor }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-6 space-x-4">
      <select
        className="bg-blue-500 text-white p-2 rounded-lg w-48"
        value={selectedRoom}
        onChange={(e) => setSelectedRoom(e.target.value)}
      >
        <option>CB2 Building</option>
        <option>LX Building</option>
        <option>SIT Building</option>
      </select>

      <select
        className="bg-blue-500 text-white p-2 rounded-lg w-48"
        value={selectedFloor}
        onChange={(e) => setSelectedFloor(e.target.value)}
      >
        <option>10th Floor</option>
        <option>11th Floor</option>
        <option>12th Floor</option>
      </select>
    </div>
  );
};

export default RoomSelector;
