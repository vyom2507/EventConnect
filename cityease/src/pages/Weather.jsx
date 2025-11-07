import React from "react";
import "../styles/styles.css";

function Weather() {
  return (
    <section
      className="page-hero"
      style={{
        backgroundImage: "url('/images/weather.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h1>Chicago Weather</h1>
          <p>
            Stay updated with live weather data, forecasts, and conditions
            across the city.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Weather;
