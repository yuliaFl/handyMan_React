import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Bathroom from "./pages/Bathroom";
import Bedroom from "./pages/Bedroom";
import Kitchen from "./pages/Kitchen";
import Contact from "./pages/Contact";
import Outdoor from "./pages/Outdoor";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import ScrollToTop from "./components/ScrollToTop";

function MainPage() {
  return (
    <div>
      <div id="Home">
        <Home />
      </div>
      <div id="Kitchen">
        <Kitchen />
      </div>
      <div id="Bedroom">
        <Bedroom />
      </div>
      <div id="Bathroom">
        <Bathroom />
      </div>
      <div id="Outdoor">
        <Outdoor />
      </div>
      <div id="Reviews">
        <Reviews />
      </div>
    </div>
  );
}

/* 
      
 */
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/outdoor" element={<Outdoor />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
