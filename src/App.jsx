import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./LanguageContext";
import Navbar from "./Navbar";
import Home from "./Home";
import Booking from "./Booking";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
