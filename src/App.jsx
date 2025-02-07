import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext"; // ✅ ตรวจสอบ path
import Navbar from "./Layout/Navbar"; // ✅ ตรวจสอบ path
import Home from "./Home";
import Booking from "./components/Bookings/Booking";
import Welcome from "./Layout/Welcome";
import Calendar from "./UI/Calendar";
import Footer from "./Layout/Footer";

function App() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-300">
      <LanguageProvider>
        <Router>
          <Navbar />
          <Welcome /> {/* ✅ แก้ให้ Welcome กลับมาแสดง */}
          <Calendar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </Router>
      </LanguageProvider>
      <Footer />
    </div>
  );
}

export default App;
