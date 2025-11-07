import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

function Home() {
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState({
    temp: null,
    condition: "",
    icon: "",
  });

  // Update Chicago time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const chicagoTime = now.toLocaleTimeString("en-US", {
        timeZone: "America/Chicago",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(chicagoTime);
    };

    updateTime(); // call immediately once
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch weather data for Chicago
  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=${apiKey}`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.main) {
          setWeather({
            temp: Math.round(data.main.temp),
            condition: data.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          });
        }
      } catch (error) {
        console.error("Weather fetch failed:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <>
      {/* ---------- HERO SECTION ---------- */}
      <section
        className="home hero-with-bg"
        style={{
          backgroundImage: "url('/images/chicago-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "calc(100vh - 130px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <div className="home-overlay">
          <div className="home-content home-card">
            <h1>Welcome to CityEase</h1>
            <p>Your smart assistant for exploring and living in Chicago.</p>
            <p className="subtext">
              Discover housing, transport, weather updates, and more — all in one place.
            </p>
            <Link to="/explore">
              <button className="cta-button">Get Started</button>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- ABOUT SECTION ---------- */}
      <section className="about-section">
        <h2>About CityEase</h2>
        <p>
          CityEase helps residents and newcomers easily navigate Chicago’s everyday essentials.
          From public transportation routes and weather forecasts to housing, safety, and
          bookmarked spots — everything you need is right at your fingertips.
        </p>
      </section>

      {/* ---------- FEATURE CARDS ---------- */}
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <Link to="/explore" className="feature-card">
            <img src="/images/explore-bg.jpg" alt="Explore" />
            <h3>Explore Chicago</h3>
            <p>Discover housing, groceries, cafes, and essential spots around you.</p>
          </Link>

          <Link to="/transport" className="feature-card">
            <img src="/images/transport.jpg" alt="Transport" />
            <h3>Transport</h3>
            <p>Navigate CTA lines and stations with route maps and live updates.</p>
          </Link>

          <Link to="/weather" className="feature-card">
            <img src="/images/weather.jpg" alt="Weather" />
            <h3>Weather</h3>
            <p>Stay updated with current temperature, humidity, and air quality.</p>
          </Link>

          <Link to="/emergency" className="feature-card">
            <img src="/images/emergency.jpeg" alt="Emergency" />
            <h3>Emergency Info</h3>
            <p>Find important helplines and safety contacts instantly.</p>
          </Link>

          <Link to="/bookmarks" className="feature-card">
            <img src="/images/bookmark.jpg" alt="Bookmarks" />
            <h3>Your Bookmarks</h3>
            <p>Save your favorite Chicago locations for quick access later.</p>
          </Link>
        </div>
      </section>

      {/* ---------- LIVE INFO ---------- */}
      <section className="live-info-section">
        <div className="info-box">
          <h3>Chicago Weather</h3>
          {weather.temp ? (
            <>
              <img src={weather.icon} alt="weather" width="60" height="60" />
              <p>
                🌤 {weather.temp}°F — {weather.condition}
              </p>
            </>
          ) : (
            <p>Loading weather...</p>
          )}
        </div>

        <div className="info-box">
          <h3>Local Time</h3>
          <p>🕒 {time || "Loading time..."}</p>
        </div>
      </section>
    </>
  );
}

export default Home;
