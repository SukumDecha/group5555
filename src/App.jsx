import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./LanguageContext";
import Navbar from "./Navbar";
import Home from "./Home";
import Booking from "./Booking";
import Welcome from "./Welcome";
import Calendar from "./Calendar";
import Footer from "./Footer";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import BookingPage from "./BookingPage";

import EditBooking from "./EditBooking";


=======
>>>>>>> parent of 67f5cfc (Noy Errorrrr)
=======
>>>>>>> parent of 67f5cfc (Noy Errorrrr)
=======
>>>>>>> parent of 67f5cfc (Noy Errorrrr)

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

          <Route path="/bookingpage" element={<BookingPage />} />

          <Route path="Calendar" element={<Calendar />} />
          <Route path="/edit-booking" element={<EditBooking />} />

        </Routes>

      </Router>
    </LanguageProvider>
    <Footer/>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    
=======
>>>>>>> parent of 67f5cfc (Noy Errorrrr)
=======
>>>>>>> parent of 67f5cfc (Noy Errorrrr)
=======
>>>>>>> parent of 67f5cfc (Noy Errorrrr)
    </div>
  );
}

export default App;
