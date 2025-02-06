import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";  
import Footer from "./components/Footer";
import Home from "./pages/Home";  
import BookingPage from "./pages/BookingPage";
import EditBooking from "./pages/EditBooking";
import MyBookings from "./pages/MyBookings";  
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/edit-booking" element={<EditBooking />} />
          <Route path="/my-bookings" element={<MyBookings />} />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
