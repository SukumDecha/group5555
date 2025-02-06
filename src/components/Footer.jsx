import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../utils/translations";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language]?.footer ?? translations["en"].footer; // ป้องกัน null

  return (
    <footer className="bg-[#133b5c] text-white p-6 mt-10 w-full text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* 📌 โลโก้ */}
        <div className="flex items-center space-x-4">
          <img src="/assets/logoSIT.png" alt="SIT Logo" className="h-10" />
        </div>

        {/* 📌 ข้อมูลติดต่อ */}
        <div className="text-sm mt-4 md:mt-0">
          <p>{t.address}</p>
          <p>{t.email}</p>
        </div>

        {/* 📌 SIT Website */}
        <div className="mt-4 md:mt-0">
          <a href="https://www.sit.kmutt.ac.th" 
             className="text-white underline hover:text-blue-300" 
             target="_blank" 
             rel="noopener noreferrer">
            SIT WEBSITE
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
