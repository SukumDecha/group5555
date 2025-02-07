import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EditBooking from "./EditBooking";
import Button from "@mui/material/Button";
import { Button as ChakraButton } from '@chakra-ui/react';
import {CardRoot,Card} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Calendar = () => {
  const [currentYear, setCurrentYear] = useState(2025);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [days, setDays] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null); 
  const navigate = useNavigate(); 

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const bookedDates = [2, 7]; 

  useEffect(() => {
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
    setDays([...Array(totalDays)].map((_, i) => i + 1));
  }, [currentMonth, currentYear]);
  

  return (
    <>
  
    <div className="w-full max-w-4xl mx-auto mt-5 p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center bg-blue-900 text-white p-3 rounded-md">
        <h2 className="text-lg font-semibold">📅 Upcoming Booking</h2>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => navigate("/edit-booking")} 
        >
          Edit
        </Button>
      </div>

      {/* Month Selector */}
      <div className="flex justify-between items-center my-4 bg-orange-100 p-3 rounded-lg">
        <button onClick={() => setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1))}>&lt;</button>
        <span className="text-lg font-medium">{months[currentMonth]} {currentYear}</span>
        <button onClick={() => setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1))}>&gt;</button>
      </div>

      {/* Date Grid */}
      <div className="flex space-x-3 overflow-x-auto p-2">
        {days.map((day) => {
          const isBooked = bookedDates.includes(day);
          const isSelected = selectedDate === day;

          return (
            <div
              key={day}
              className={`relative flex flex-col items-center justify-center p-2 w-16 h-16 rounded-lg shadow-md cursor-pointer transition-all
              ${isSelected ? "bg-gray-500 text-white" : isBooked ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"}`}
              onClick={() => setSelectedDate(day)}
            >
              <span className="text-xs font-semibold">
                {["S", "M", "T", "W", "T", "F", "S"][new Date(currentYear, currentMonth, day).getDay()]}
              </span>
              <span className="text-lg font-bold">{day}</span>
              {isBooked && (
                <span className="absolute top-1 right-1 text-xs bg-red-600 px-1 rounded-full">✖</span>
              )}
            </div>
          );
        })}
      </div> 
    </div>
    <div>
    <CardRoot axW="sm" overflow="hidden">
          <Image
            src="/image/cb2.png"
            alt=""
          />
          <Card.Body gap="2">
          <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
            CB2
          </Text>
            <Card.Description>
            Options for booking.
            </Card.Description>
            
          </Card.Body>
          <Card.Footer gap="2">
            <Button variant="solid">Booking</Button>
            
          </Card.Footer>
  
    </CardRoot>
    </div>
    </>
  );
  
  
    
}
export default Calendar;
