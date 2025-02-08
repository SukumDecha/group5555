import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // ✅ ตรวจสอบ path
import BookingPage from "./components/BookingPage"; 
import BookingOverview from "./components/BookingOverview"; 
import Navbar from "../Layout/Navbar"; // ✅ แก้ import Navbar
import SidebarMenu from "./components/SidebarMenu";
import Footer from "./layout/Footer"; // ✅ แก้ import Footer

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-grow">
          <SidebarMenu />
          <div className="flex-grow p-4 bg-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/overview" element={<BookingOverview />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

/* 🔧 แก้ไข:
  1. แก้ `import` ให้ถูกต้องสำหรับ Vite
  2. ตรวจสอบว่าไฟล์ทั้งหมดมีอยู่จริงในโฟลเดอร์ที่ `import`
  3. โครงสร้าง React Router ถูกต้องและสามารถรันได้กับ Vite (`npm run dev`)
*/


