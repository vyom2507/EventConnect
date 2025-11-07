import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">CityEase</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/transport">Transport</Link>
        <Link to="/weather">Weather</Link>
        <Link to="/emergency">Emergency</Link>
        <Link to="/bookmarks">Bookmarks</Link>
      </div>
    </nav>
  );
}

export default Navbar;
