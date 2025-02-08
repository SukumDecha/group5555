import React from "react";

const RoomSelector = ({ selectedRoom, setSelectedRoom }) => {
    const buildings = {
        "CB Building": ["CB2301", "CB2304", "CB2305", "CB2306","CB2308", "CB2310", "CB2312", "CB2313","CB2401","CB2405","CB2502","CB2503","CB2505","CB2507","CB2508"],
        "LX Building": ["LX10/1", "LX10/2", "LX10/3","LX10/4","LX10/5", "LX11/1","LX11/2","LX11/3","LX11/4","LX11/5"],
        "SIT Building": ["SIT/101", "SIT/102", "SIT/103"],
    };

    return (
        <div className="flex flex-col space-y-4 max-w-md mx-auto">
            <label className="text-lg font-semibold text-gray-700">🏢 เลือกตึก</label>
            <select
                className="border p-2 rounded-md"
                onChange={(e) => setSelectedRoom(e.target.value)}
                value={selectedRoom}
            >
                <option value="">🔽 เลือกห้องประชุม</option>
                {Object.entries(buildings).map(([building, rooms]) => (
                    <optgroup key={building} label={building}>
                        {rooms.map((room) => (
                            <option key={room} value={room}>
                                {room}
                            </option>
                        ))}
                    </optgroup>
                ))}
            </select>
        </div>
    );
};

export default RoomSelector;
