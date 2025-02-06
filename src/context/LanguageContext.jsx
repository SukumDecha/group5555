import React, { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  // ✅ โหลดค่าภาษาจาก Backend ถ้ามี
  useEffect(() => {
    fetch("https://api.example.com/user-preference/language")
      .then((res) => res.json())
      .then((data) => {
        if (data.language) {
          setLanguage(data.language);
          localStorage.setItem("language", data.language);
        }
      })
      .catch(() => {
        console.warn("⚠️ API ไม่พร้อมใช้ ใช้ localStorage แทน");
      });
  }, []);

  // ✅ ฟังก์ชันสลับภาษา (EN ↔ TH)
  const toggleLanguage = () => {
    const newLang = language === "en" ? "th" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
