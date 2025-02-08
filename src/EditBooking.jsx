import React from "react";
import { useState, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { FaBars, FaTimes, FaUser, FaQuestionCircle, FaBell, FaBook, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

function EditBooking() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     
    </>
  );
}
  
  export default EditBooking;