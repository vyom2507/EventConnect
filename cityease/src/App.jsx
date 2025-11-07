import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Transport from "./pages/Transport";
import Weather from "./pages/Weather";
import Emergency from "./pages/Emergency";
import Bookmarks from "./pages/Bookmarks";
import "./styles/styles.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar visible on all pages */}
        <Navbar />

        {/* Main content area */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Routes>
        </main>

        {/* Footer visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
