import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./LanguageContext";
import Navbar from "./Navbar";
import Home from "./Home";
import Booking from "./Booking";
import Welcome from "./Welcome";
import Calendar from "./Calendar";
import Footer from "./Footer";

function App() {
  return (
    <div className='bg-gradient-to-b from-blue-50 to-blue-300'>
    <LanguageProvider>
      <Router>
        <Navbar />
        <Welcome/>
        <Calendar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Router>
    </LanguageProvider>
    <Footer/>
    </div>
  );
}

export default App;
