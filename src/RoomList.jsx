function RoomList({ rooms, selectedRoom, setSelectedRoom }) {
    return (
      <div className="mb-4">
        <label htmlFor="room" className="block text-gray-700 font-bold mb-2">ห้อง:</label>
        <select
          id="room"
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={selectedRoom ? selectedRoom.id : ""}
          onChange={(e) => {
            const selectedId = parseInt(e.target.value);
            const room = rooms.find((room) => room.id === selectedId);
            setSelectedRoom(room || null); // Handle the case where no room is found
          }}
        >
          <option value="">เลือกห้อง</option>
          {rooms.map((room) => (
            <option key={room.id} value={room.id} disabled={!room.available}>
              {room.name}
              {!room.available && " (ไม่ว่าง)"}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  export default RoomList;