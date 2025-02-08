function getRooms(selectedLocation, selectedFloor) {
        return new Promise((resolve, reject) => {
          // Mockup data
          const rooms = [
            { id: 1, name: "Room A", location: "Building 1", floor: 1 },
            { id: 2, name: "Room B", location: "Building 1", floor: 2 },
            { id: 3, name: "Room C", location: "Building 2", floor: 1 },
            { id: 4, name: "Room D", location: "Building 2", floor: 2 },
            { id: 5, name: "Room E", location: "Building 1", floor: 1 },
          ];
      
          // Simulate an API delay
          setTimeout(() => {
            const filteredRooms = rooms.filter(
              (room) => room.location === selectedLocation && room.floor === selectedFloor
            );
            
            if (filteredRooms.length > 0) {
              resolve(filteredRooms);
            } else {
              reject("No rooms found for the selected criteria.");
            }
          }, 1000);
        });
      }

export default getRooms;